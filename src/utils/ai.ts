// AI 调用封装 - 豆包大模型 API（火山引擎 ARK）

const API_URL = 'https://ark.cn-beijing.volces.com/api/v3/chat/completions';

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface StreamCallbacks {
  onChunk: (text: string) => void;
  onDone: (fullText: string) => void;
  onError: (error: string) => void;
}

/**
 * 流式调用 AI 接口
 */
export async function streamChat(
  messages: ChatMessage[],
  callbacks: StreamCallbacks
): Promise<void> {
  const apiKey = import.meta.env.ARK_API_KEY;
  const modelId = import.meta.env.ARK_MODEL_ID;

  if (!apiKey || !modelId) {
    callbacks.onError('请先配置 ARK_API_KEY 和 ARK_MODEL_ID 环境变量');
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: modelId,
        messages,
        stream: true,
        temperature: 0.8,
        max_tokens: 4096,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      callbacks.onError(`API 请求失败 (${response.status}): ${errorText}`);
      return;
    }

    const reader = response.body?.getReader();
    if (!reader) {
      callbacks.onError('无法读取响应流');
      return;
    }

    const decoder = new TextDecoder();
    let fullText = '';
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed === 'data: [DONE]') continue;
        if (!trimmed.startsWith('data: ')) continue;

        try {
          const json = JSON.parse(trimmed.slice(6));
          const content = json.choices?.[0]?.delta?.content;
          if (content) {
            fullText += content;
            callbacks.onChunk(content);
          }
        } catch {
          // 忽略解析错误
        }
      }
    }

    callbacks.onDone(fullText);
  } catch (error) {
    callbacks.onError(`网络错误: ${error instanceof Error ? error.message : '未知错误'}`);
  }
}

/**
 * 非流式调用 AI 接口
 */
export async function chat(messages: ChatMessage[]): Promise<string> {
  const apiKey = import.meta.env.ARK_API_KEY;
  const modelId = import.meta.env.ARK_MODEL_ID;

  if (!apiKey || !modelId) {
    throw new Error('请先配置 ARK_API_KEY 和 ARK_MODEL_ID 环境变量');
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: modelId,
      messages,
      temperature: 0.8,
      max_tokens: 4096,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API 请求失败 (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// ===== Prompt 模板 =====

export const prompts = {
  // 小红书笔记
  xiaohongshu: (topic: string, keywords: string, style: string) => [
    {
      role: 'system' as const,
      content: `你是一位资深小红书博主，粉丝百万级。你擅长写出爆款小红书笔记，风格真实、有感染力。

写作要求：
1. 标题：生成5个吸引眼球的标题，每个标题要有"点击冲动"，善用数字、疑问句、感叹句
2. 正文：口语化表达，像跟闺蜜聊天一样真实自然
3. 大量使用emoji表情，每段开头或关键词处适当添加
4. 段落短小精悍，2-3句话为一段
5. 文末添加相关hashtag（5-8个）
6. 要有个人体验和感受，增强真实感
7. 避免过于广告化，要有"分享"而非"推销"的感觉

风格参考：
- 种草：突出产品亮点，用"姐妹们！""绝了！""回购N次"等口语
- 测评：客观+主观结合，有对比有数据，真实体验感
- 教程：步骤清晰，简单易学，"手残党也能学会"
- 日常分享：生活化场景，情感共鸣，真实记录感`,
    },
    {
      role: 'user' as const,
      content: `请为以下主题创作一篇小红书笔记：

📌 主题/产品：${topic}
🔑 关键词：${keywords}
📝 风格：${style}

请输出格式：
【标题备选】
1. xxx
2. xxx
3. xxx
4. xxx
5. xxx

【正文】
（带emoji的完整笔记正文）

【Hashtag】
#标签1 #标签2 ...`,
    },
  ],

  // 多平台改写
  rewrite: (originalText: string, platforms: string[]) => {
    const platformStyles: Record<string, string> = {
      '小红书': '小红书风格：emoji多、口语化、种草感强。开头要吸引眼球，段落短小，大量emoji，像闺蜜聊天。文末带hashtag。语气亲切活泼，常用"姐妹们""绝绝子""yyds"等词汇。',
      '公众号': '微信公众号风格：正式专业、有深度、逻辑清晰。标题要有吸引力但不夸张。段落可以较长，论述充分，引用数据或案例。语言书面化，适合长文阅读。结尾有总结和引导关注。',
      '抖音': '抖音文案风格：短平快、口语化、有钩子。开头3秒就要抓住注意力，句子短促有力。适合配合视频画面，有节奏感。可以用一些网络流行语，要有趣味性和互动感。',
      '知乎': '知乎风格：专业严谨、有论据、理性分析。开头先给结论或核心观点，然后展开论述。引用数据、案例、专业知识。语言理性客观，避免过度情绪化。适当使用专业术语但要有解释。',
      '视频号': '视频号风格：生活化、正能量、易传播。语言通俗易懂，适合中年及以上用户群体。内容要有温度，传递积极价值观。段落适中，适合朋友圈转发。避免过于年轻化或网络化的用语。',
      '快手': '快手风格：接地气、朴实、真实。语言直白不绕弯，用老百姓能听懂的话。真诚不做作，有烟火气。可以用一些方言化表达，让人感到亲切可信。',
      'B站': 'B站风格：年轻化、有梗、互动感强。可以使用二次元用语、网络热梗。语言活泼跳脱，有"内味儿"。善用"一键三连""下次一定"等B站文化用语。段落节奏快，信息密度高。',
    };

    const platformPrompts = platforms
      .map((p) => `【${p}版本】\n风格要求：${platformStyles[p] || p}`)
      .join('\n\n---\n\n');

    return [
      {
        role: 'system' as const,
        content: `你是一位全平台内容运营专家，精通各大社交媒体的内容风格和调性。你的任务是将原始文案改写为不同平台的版本，每个版本都要有该平台独特的风格特征，差异要明显。

核心原则：
1. 保留原文的核心信息和卖点
2. 完全适配目标平台的语言风格和用户习惯
3. 每个版本的差异要足够明显，不能只是简单换几个词
4. 注意各平台的内容规范和敏感词限制`,
      },
      {
        role: 'user' as const,
        content: `请将以下文案改写为多个平台的版本：

【原始文案】
${originalText}

请分别输出以下平台的版本：

${platformPrompts}

每个版本请完整输出，格式清晰。`,
      },
    ];
  },

  // 文案评分
  scoring: (text: string, platform: string) => [
    {
      role: 'system' as const,
      content: `你是一位资深的社交媒体内容审核专家和文案顾问，对各平台的内容规范和爆款逻辑了如指掌。

评分维度（各10分，总分50分）：
1. **吸引力**（/10）：标题和开头是否能抓住注意力，是否有"点击冲动"
2. **可读性**（/10）：排版是否清晰，段落是否合理，阅读是否流畅
3. **平台适配度**（/10）：是否符合目标平台的风格调性和用户习惯
4. **转化力**（/10）：是否能引导用户产生行动（点赞/收藏/购买/关注）
5. **原创感**（/10）：是否有个人特色，是否避免同质化，是否有真实感

评分标准：
- 9-10分：优秀，几乎无需修改
- 7-8分：良好，小幅优化即可
- 5-6分：一般，需要较多改进
- 3-4分：较差，需要大幅重写
- 1-2分：很差，建议重新创作`,
    },
    {
      role: 'user' as const,
      content: `请对以下${platform}文案进行专业评分：

【文案内容】
${text}

请按以下格式输出：

## 📊 评分结果

| 维度 | 得分 | 评价 |
|------|------|------|
| 吸引力 | X/10 | 简短评价 |
| 可读性 | X/10 | 简短评价 |
| 平台适配度 | X/10 | 简短评价 |
| 转化力 | X/10 | 简短评价 |
| 原创感 | X/10 | 简短评价 |
| **总分** | **X/50** | |

## ✅ 亮点
- 列出文案的优点（至少2条）

## 🔧 改进建议
- 针对每个扣分维度给出具体修改建议

## ✏️ 修改示范
选取文案中1-2个段落，给出修改前后的对比示例：

**修改前：**
（原文片段）

**修改后：**
（优化后的片段）`,
    },
  ],

  // 短视频脚本
  videoScript: (topic: string, duration: string, type: string) => [
    {
      role: 'system' as const,
      content: `你是一位专业的短视频编导，擅长创作各类短视频脚本。你的脚本要具有可操作性，让拍摄者能直接按照脚本执行。

脚本格式要求：
- 以表格形式展示每个分镜
- 每个镜头包含：镜号、时长、画面描述、口播文案、字幕文字、BGM/音效建议
- 开头要有"黄金3秒"钩子设计
- 结尾要有明确的行动引导（CTA）

不同时长特点：
- 15秒：快节奏、一个核心卖点、强视觉冲击
- 30秒：开头钩子+核心内容+CTA，紧凑但不赶
- 60秒：完整叙事，可以有铺垫、高潮、收尾

不同类型风格：
- 种草：产品特写+使用场景+效果对比
- 测评：开箱+细节展示+使用体验+总结打分
- 教程：步骤分解+要点提示+效果展示
- 剧情：冲突设置+情节推进+反转/产品植入`,
    },
    {
      role: 'user' as const,
      content: `请为以下主题创作短视频脚本：

📌 产品/主题：${topic}
⏱ 视频时长：${duration}
🎬 脚本类型：${type}

请输出完整的分镜脚本，包含：
1. **视频概览**：主题、时长、风格定位
2. **分镜表格**：每个镜头的详细描述
3. **拍摄备注**：整体拍摄建议和注意事项
4. **BGM推荐**：推荐的背景音乐风格或具体曲目`,
    },
  ],
};
