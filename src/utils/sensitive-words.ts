// 违禁词库 - 广告法违禁词 + 各平台敏感词

export interface SensitiveWord {
  word: string;
  category: string;
  severity: 'high' | 'medium' | 'low';
  suggestion: string;
  platforms: string[]; // 适用的平台，'all' 表示所有平台
}

export const sensitiveWords: SensitiveWord[] = [
  // ===== 广告法 - 极限词（高严重度）=====
  { word: '最', category: '极限词', severity: 'high', suggestion: '使用"非常""很""特别"等替代', platforms: ['all'] },
  { word: '最佳', category: '极限词', severity: 'high', suggestion: '使用"优质""出色""卓越"等替代', platforms: ['all'] },
  { word: '最好', category: '极限词', severity: 'high', suggestion: '使用"非常好""很棒""优质"等替代', platforms: ['all'] },
  { word: '最优', category: '极限词', severity: 'high', suggestion: '使用"优秀""出色"等替代', platforms: ['all'] },
  { word: '最多', category: '极限词', severity: 'high', suggestion: '使用"很多""丰富""大量"等替代', platforms: ['all'] },
  { word: '最便宜', category: '极限词', severity: 'high', suggestion: '使用"实惠""性价比高""价格优惠"等替代', platforms: ['all'] },
  { word: '最低', category: '极限词', severity: 'high', suggestion: '使用"优惠""实惠""低至"等替代', platforms: ['all'] },
  { word: '最低价', category: '极限词', severity: 'high', suggestion: '使用"超值价""优惠价""活动价"等替代', platforms: ['all'] },
  { word: '最大', category: '极限词', severity: 'high', suggestion: '使用"超大""巨大""很大的"等替代', platforms: ['all'] },
  { word: '最高', category: '极限词', severity: 'high', suggestion: '使用"高端""顶级品质"等替代', platforms: ['all'] },
  { word: '最新', category: '极限词', severity: 'medium', suggestion: '使用"近期""当前""新推出"等替代', platforms: ['all'] },
  { word: '最新技术', category: '极限词', severity: 'high', suggestion: '使用"先进技术""前沿技术"等替代', platforms: ['all'] },
  { word: '最先进', category: '极限词', severity: 'high', suggestion: '使用"领先""前沿"等替代', platforms: ['all'] },
  { word: '第一', category: '极限词', severity: 'high', suggestion: '使用"领先""前列""头部"等替代', platforms: ['all'] },
  { word: '唯一', category: '极限词', severity: 'high', suggestion: '使用"独特""专属""独有"等替代', platforms: ['all'] },
  { word: '首个', category: '极限词', severity: 'high', suggestion: '使用"创新""领先推出"等替代', platforms: ['all'] },
  { word: '首选', category: '极限词', severity: 'high', suggestion: '使用"推荐""优选""热门选择"等替代', platforms: ['all'] },
  { word: '独家', category: '极限词', severity: 'medium', suggestion: '使用"专属""特别定制"等替代', platforms: ['all'] },
  { word: '全网最低', category: '极限词', severity: 'high', suggestion: '使用"超值""高性价比"等替代', platforms: ['all'] },
  { word: '全国最低', category: '极限词', severity: 'high', suggestion: '使用"优惠价格""活动价"等替代', platforms: ['all'] },
  { word: '史上最低', category: '极限词', severity: 'high', suggestion: '使用"超值低价""活动特惠"等替代', platforms: ['all'] },

  // ===== 广告法 - 权威性词汇 =====
  { word: '国家级', category: '权威词', severity: 'high', suggestion: '避免使用，除非有官方认证', platforms: ['all'] },
  { word: '世界级', category: '权威词', severity: 'high', suggestion: '使用"国际水准""全球化品质"等替代', platforms: ['all'] },
  { word: '全球领先', category: '权威词', severity: 'high', suggestion: '使用"行业前沿""技术先进"等替代', platforms: ['all'] },
  { word: '行业领先', category: '权威词', severity: 'medium', suggestion: '使用"行业前列""专业水准"等替代', platforms: ['all'] },
  { word: '遥遥领先', category: '权威词', severity: 'high', suggestion: '使用"领先""先进"等替代', platforms: ['all'] },
  { word: '领先上市', category: '权威词', severity: 'medium', suggestion: '使用"率先推出""新品上市"等替代', platforms: ['all'] },
  { word: '同类产品销量第一', category: '权威词', severity: 'high', suggestion: '使用"热销""人气产品"等替代', platforms: ['all'] },
  { word: '排名第一', category: '权威词', severity: 'high', suggestion: '使用"名列前茅""位居前列"等替代', platforms: ['all'] },
  { word: '销量第一', category: '权威词', severity: 'high', suggestion: '使用"热销""畅销"等替代', platforms: ['all'] },
  { word: '市场占有率第一', category: '权威词', severity: 'high', suggestion: '使用"高市场占有率"等替代', platforms: ['all'] },

  // ===== 广告法 - 绝对化用语 =====
  { word: '绝对', category: '绝对化', severity: 'high', suggestion: '使用"非常""特别""很大程度上"等替代', platforms: ['all'] },
  { word: '100%', category: '绝对化', severity: 'high', suggestion: '使用"高度""充分""很大程度上"等替代', platforms: ['all'] },
  { word: '百分百', category: '绝对化', severity: 'high', suggestion: '使用"高度""充分"等替代', platforms: ['all'] },
  { word: '万能', category: '绝对化', severity: 'high', suggestion: '使用"多功能""多用途"等替代', platforms: ['all'] },
  { word: '永久', category: '绝对化', severity: 'high', suggestion: '使用"持久""长效""经久耐用"等替代', platforms: ['all'] },
  { word: '无敌', category: '绝对化', severity: 'high', suggestion: '使用"出色""优秀""卓越"等替代', platforms: ['all'] },
  { word: '极致', category: '绝对化', severity: 'medium', suggestion: '使用"精心""用心""高品质"等替代', platforms: ['all'] },
  { word: '完美', category: '绝对化', severity: 'medium', suggestion: '使用"精致""出色""优质"等替代', platforms: ['all'] },
  { word: '零缺陷', category: '绝对化', severity: 'high', suggestion: '使用"品控严格""质量可靠"等替代', platforms: ['all'] },
  { word: '无副作用', category: '绝对化', severity: 'high', suggestion: '使用"温和""亲肤""低刺激"等替代', platforms: ['all'] },
  { word: '零风险', category: '绝对化', severity: 'high', suggestion: '使用"风险较低""安全可靠"等替代', platforms: ['all'] },
  { word: '无风险', category: '绝对化', severity: 'high', suggestion: '使用"安全可靠""放心使用"等替代', platforms: ['all'] },
  { word: '纯天然', category: '绝对化', severity: 'high', suggestion: '使用"天然成分""植物萃取"等替代', platforms: ['all'] },
  { word: '100%天然', category: '绝对化', severity: 'high', suggestion: '使用"含天然成分""植物配方"等替代', platforms: ['all'] },
  { word: '特效', category: '绝对化', severity: 'high', suggestion: '使用"效果好""有效"等替代', platforms: ['all'] },
  { word: '强效', category: '绝对化', severity: 'high', suggestion: '使用"高效""效果好"等替代', platforms: ['all'] },
  { word: '速效', category: '绝对化', severity: 'high', suggestion: '使用"快速""见效快"等替代', platforms: ['all'] },
  { word: '立即见效', category: '绝对化', severity: 'high', suggestion: '使用"快速改善""帮助缓解"等替代', platforms: ['all'] },
  { word: '一次见效', category: '绝对化', severity: 'high', suggestion: '使用"效果明显""改善明显"等替代', platforms: ['all'] },
  { word: '一天见效', category: '绝对化', severity: 'high', suggestion: '使用"持续使用效果好"等替代', platforms: ['all'] },

  // ===== 广告法 - 虚假承诺 =====
  { word: '保证效果', category: '虚假承诺', severity: 'high', suggestion: '使用"帮助改善""助力提升"等替代', platforms: ['all'] },
  { word: '保证', category: '虚假承诺', severity: 'medium', suggestion: '使用"致力于""努力"等替代', platforms: ['all'] },
  { word: '无效退款', category: '虚假承诺', severity: 'medium', suggestion: '谨慎使用，需有实际退款政策', platforms: ['all'] },
  { word: '包治', category: '虚假承诺', severity: 'high', suggestion: '医疗类禁止使用，使用"辅助改善"等', platforms: ['all'] },
  { word: '根治', category: '虚假承诺', severity: 'high', suggestion: '使用"帮助缓解""辅助改善"等替代', platforms: ['all'] },
  { word: '药到病除', category: '虚假承诺', severity: 'high', suggestion: '使用"帮助改善症状"等替代', platforms: ['all'] },
  { word: '立竿见影', category: '虚假承诺', severity: 'high', suggestion: '使用"效果明显""改善显著"等替代', platforms: ['all'] },
  { word: '永不反弹', category: '虚假承诺', severity: 'high', suggestion: '使用"持久效果""持续改善"等替代', platforms: ['all'] },
  { word: '终身', category: '虚假承诺', severity: 'high', suggestion: '使用"长效""持久"等替代', platforms: ['all'] },

  // ===== 金融相关 =====
  { word: '稳赚', category: '金融违规', severity: 'high', suggestion: '投资有风险，禁止承诺收益', platforms: ['all'] },
  { word: '保本', category: '金融违规', severity: 'high', suggestion: '禁止使用保本承诺', platforms: ['all'] },
  { word: '保收益', category: '金融违规', severity: 'high', suggestion: '禁止使用收益承诺', platforms: ['all'] },
  { word: '躺赚', category: '金融违规', severity: 'high', suggestion: '禁止使用此类表述', platforms: ['all'] },
  { word: '日赚', category: '金融违规', severity: 'high', suggestion: '禁止使用此类表述', platforms: ['all'] },
  { word: '月入过万', category: '金融违规', severity: 'high', suggestion: '使用"收入可观""有收益空间"等替代', platforms: ['all'] },
  { word: '零投入', category: '金融违规', severity: 'high', suggestion: '使用"低门槛""轻松启动"等替代', platforms: ['all'] },
  { word: '高额回报', category: '金融违规', severity: 'high', suggestion: '禁止使用此类表述', platforms: ['all'] },
  { word: '翻倍', category: '金融违规', severity: 'medium', suggestion: '使用"增长""提升"等替代', platforms: ['all'] },
  { word: '暴富', category: '金融违规', severity: 'high', suggestion: '禁止使用此类表述', platforms: ['all'] },

  // ===== 医疗健康类 =====
  { word: '祖传秘方', category: '医疗违规', severity: 'high', suggestion: '使用"传统配方""经典配方"等替代', platforms: ['all'] },
  { word: '秘制', category: '医疗违规', severity: 'high', suggestion: '使用"独特配方""精心研制"等替代', platforms: ['all'] },
  { word: '神药', category: '医疗违规', severity: 'high', suggestion: '使用"好用产品""热门产品"等替代', platforms: ['all'] },
  { word: '包治百病', category: '医疗违规', severity: 'high', suggestion: '禁止使用此类表述', platforms: ['all'] },
  { word: '抗癌', category: '医疗违规', severity: 'high', suggestion: '非药品禁止使用此类表述', platforms: ['all'] },
  { word: '治疗', category: '医疗违规', severity: 'medium', suggestion: '非药品使用"改善""缓解""调理"等', platforms: ['all'] },
  { word: '治愈率', category: '医疗违规', severity: 'high', suggestion: '使用"改善率""有效率"等替代', platforms: ['all'] },
  { word: '无副作用', category: '医疗违规', severity: 'high', suggestion: '使用"温和配方""低刺激"等替代', platforms: ['all'] },
  { word: '安全无毒', category: '医疗违规', severity: 'high', suggestion: '使用"安全可靠""品质保障"等替代', platforms: ['all'] },

  // ===== 权威性/资质虚假宣称 =====
  { word: '央视推荐', category: '虚假宣称', severity: 'high', suggestion: '无授权禁止使用', platforms: ['all'] },
  { word: '国家推荐', category: '虚假宣称', severity: 'high', suggestion: '无授权禁止使用', platforms: ['all'] },
  { word: '政府推荐', category: '虚假宣称', severity: 'high', suggestion: '无授权禁止使用', platforms: ['all'] },
  { word: '驰名商标', category: '虚假宣称', severity: 'high', suggestion: '广告法禁止使用', platforms: ['all'] },
  { word: '免检', category: '虚假宣称', severity: 'high', suggestion: '禁止使用免检宣称', platforms: ['all'] },
  { word: '老字号', category: '虚假宣称', severity: 'medium', suggestion: '需有实际认证才可使用', platforms: ['all'] },
  { word: '中国名牌', category: '虚假宣称', severity: 'high', suggestion: '禁止使用此类称号', platforms: ['all'] },
  { word: '特供', category: '虚假宣称', severity: 'high', suggestion: '禁止使用此类表述', platforms: ['all'] },
  { word: '专供', category: '虚假宣称', severity: 'high', suggestion: '禁止使用此类表述', platforms: ['all'] },
  { word: '军用', category: '虚假宣称', severity: 'high', suggestion: '禁止使用此类表述', platforms: ['all'] },

  // ===== 诱导性用语 =====
  { word: '秒杀', category: '诱导词', severity: 'low', suggestion: '使用"限时优惠""抢手好价"等替代', platforms: ['all'] },
  { word: '抢购', category: '诱导词', severity: 'low', suggestion: '使用"热卖""人气好物"等替代', platforms: ['all'] },
  { word: '再不买就没了', category: '诱导词', severity: 'medium', suggestion: '使用"限时优惠""库存有限"等替代', platforms: ['all'] },
  { word: '最后一天', category: '诱导词', severity: 'medium', suggestion: '使用"限时特惠""活动期间"等替代', platforms: ['all'] },
  { word: '错过等一年', category: '诱导词', severity: 'medium', suggestion: '使用"限时优惠""活动价格"等替代', platforms: ['all'] },
  { word: '史上最强', category: '极限词', severity: 'high', suggestion: '使用"实力强劲""表现出色"等替代', platforms: ['all'] },
  { word: '全网独家', category: '极限词', severity: 'high', suggestion: '使用"独家定制""专属设计"等替代', platforms: ['all'] },
  { word: '仅此一次', category: '诱导词', severity: 'medium', suggestion: '使用"限时活动""特别优惠"等替代', platforms: ['all'] },

  // ===== 小红书特有敏感词 =====
  { word: '买它', category: '平台敏感词', severity: 'medium', suggestion: '使用"推荐给大家""可以试试"等替代', platforms: ['xiaohongshu'] },
  { word: '必买', category: '平台敏感词', severity: 'medium', suggestion: '使用"值得入手""推荐入手"等替代', platforms: ['xiaohongshu'] },
  { word: '一定要买', category: '平台敏感词', severity: 'medium', suggestion: '使用"建议尝试""值得尝试"等替代', platforms: ['xiaohongshu'] },
  { word: '安利', category: '平台敏感词', severity: 'low', suggestion: '使用"分享""推荐"等替代', platforms: ['xiaohongshu'] },
  { word: '种草', category: '平台敏感词', severity: 'low', suggestion: '可使用但勿过度', platforms: ['xiaohongshu'] },
  { word: '拔草', category: '平台敏感词', severity: 'low', suggestion: '可使用但勿过度', platforms: ['xiaohongshu'] },
  { word: '平替', category: '平台敏感词', severity: 'low', suggestion: '谨慎对比品牌', platforms: ['xiaohongshu'] },
  { word: '天花板', category: '平台敏感词', severity: 'medium', suggestion: '使用"优秀""出色""高品质"等替代', platforms: ['xiaohongshu'] },
  { word: '绝绝子', category: '平台敏感词', severity: 'low', suggestion: '过度使用可能限流，建议换用表达', platforms: ['xiaohongshu'] },
  { word: 'yyds', category: '平台敏感词', severity: 'low', suggestion: '过度使用可能限流', platforms: ['xiaohongshu'] },
  { word: '瘦了', category: '平台敏感词', severity: 'medium', suggestion: '涉及身材焦虑，使用"体态管理""健康生活"等', platforms: ['xiaohongshu'] },
  { word: '减肥', category: '平台敏感词', severity: 'medium', suggestion: '使用"体态管理""健康饮食""运动打卡"等替代', platforms: ['xiaohongshu'] },
  { word: '美白', category: '平台敏感词', severity: 'medium', suggestion: '使用"提亮""焕亮""均匀肤色"等替代', platforms: ['xiaohongshu'] },
  { word: '祛痘', category: '平台敏感词', severity: 'medium', suggestion: '使用"改善肌肤""皮肤管理"等替代', platforms: ['xiaohongshu'] },
  { word: '抗老', category: '平台敏感词', severity: 'medium', suggestion: '使用"护肤""保养""皮肤管理"等替代', platforms: ['xiaohongshu'] },

  // ===== 抖音特有敏感词 =====
  { word: '赚钱', category: '平台敏感词', severity: 'high', suggestion: '使用"创收""有收益""副业"等替代', platforms: ['douyin'] },
  { word: '微信', category: '平台敏感词', severity: 'high', suggestion: '使用"VX""绿色软件"或避免直接提及', platforms: ['douyin'] },
  { word: '淘宝', category: '平台敏感词', severity: 'high', suggestion: '使用"某宝""电商平台"等替代', platforms: ['douyin'] },
  { word: '京东', category: '平台敏感词', severity: 'medium', suggestion: '使用"某东""电商平台"等替代', platforms: ['douyin'] },
  { word: '拼多多', category: '平台敏感词', severity: 'high', suggestion: '使用"某多多""电商平台"等替代', platforms: ['douyin'] },
  { word: '快手', category: '平台敏感词', severity: 'high', suggestion: '使用"某手""短视频平台"等替代', platforms: ['douyin'] },
  { word: '点击链接', category: '平台敏感词', severity: 'high', suggestion: '使用"主页""评论区"等替代', platforms: ['douyin'] },
  { word: '私信我', category: '平台敏感词', severity: 'medium', suggestion: '使用"评论区留言""关注了解更多"', platforms: ['douyin'] },
  { word: '加我', category: '平台敏感词', severity: 'high', suggestion: '使用"关注了解更多"等替代', platforms: ['douyin'] },
  { word: '下单', category: '平台敏感词', severity: 'low', suggestion: '使用"入手""带回家"等替代', platforms: ['douyin'] },
  { word: '直播', category: '平台敏感词', severity: 'low', suggestion: '需合规开播，注意用词', platforms: ['douyin'] },
  { word: '秒杀', category: '平台敏感词', severity: 'medium', suggestion: '使用"限时优惠""福利价"等替代', platforms: ['douyin'] },
  { word: '最便宜', category: '平台敏感词', severity: 'high', suggestion: '使用"超值""性价比高"等替代', platforms: ['douyin'] },
  { word: '全网最低', category: '平台敏感词', severity: 'high', suggestion: '使用"超值价格""活动价"等替代', platforms: ['douyin'] },

  // ===== 公众号特有敏感词 =====
  { word: '转发有奖', category: '平台敏感词', severity: 'medium', suggestion: '使用"感谢分享""欢迎传播"等替代', platforms: ['gongzhonghao'] },
  { word: '关注送', category: '平台敏感词', severity: 'medium', suggestion: '使用"关注有礼"需注意合规', platforms: ['gongzhonghao'] },
  { word: '震惊', category: '平台敏感词', severity: 'medium', suggestion: '标题党会被降权，使用正常标题', platforms: ['gongzhonghao'] },
  { word: '不转不是中国人', category: '平台敏感词', severity: 'high', suggestion: '禁止使用道德绑架式文案', platforms: ['gongzhonghao'] },

  // ===== 通用营销敏感词 =====
  { word: '免费领', category: '诱导词', severity: 'medium', suggestion: '使用"0元体验""免费试用"需有真实活动', platforms: ['all'] },
  { word: '0元购', category: '诱导词', severity: 'high', suggestion: '谨慎使用，需有真实活动支撑', platforms: ['all'] },
  { word: '原价', category: '诱导词', severity: 'low', suggestion: '使用"日常售价""指导价"等替代', platforms: ['all'] },
  { word: '跳楼价', category: '诱导词', severity: 'medium', suggestion: '使用"优惠价""特惠价"等替代', platforms: ['all'] },
  { word: '白菜价', category: '诱导词', severity: 'low', suggestion: '使用"实惠价""高性价比"等替代', platforms: ['all'] },
  { word: '亏本', category: '诱导词', severity: 'medium', suggestion: '使用"活动价""优惠价"等替代', platforms: ['all'] },
  { word: '赔本', category: '诱导词', severity: 'medium', suggestion: '使用"优惠""特价"等替代', platforms: ['all'] },

  // ===== 额外补充常见违禁词 =====
  { word: '顶流', category: '平台敏感词', severity: 'low', suggestion: '谨慎使用', platforms: ['xiaohongshu'] },
  { word: '明星同款', category: '虚假宣称', severity: 'medium', suggestion: '无授权禁止使用', platforms: ['all'] },
  { word: '医生推荐', category: '虚假宣称', severity: 'high', suggestion: '无资质禁止使用', platforms: ['all'] },
  { word: '专家推荐', category: '虚假宣称', severity: 'high', suggestion: '无资质禁止使用', platforms: ['all'] },
  { word: '用户反馈', category: '虚假宣称', severity: 'low', suggestion: '需真实反馈，注意隐私保护', platforms: ['all'] },
  { word: '三天瘦十斤', category: '虚假承诺', severity: 'high', suggestion: '禁止使用此类夸大表述', platforms: ['all'] },
  { word: '一周白三度', category: '虚假承诺', severity: 'high', suggestion: '禁止使用此类夸大表述', platforms: ['all'] },
  { word: '去皱纹', category: '平台敏感词', severity: 'medium', suggestion: '使用"淡化细纹""改善肤质"等替代', platforms: ['all'] },
  { word: '祛斑', category: '平台敏感词', severity: 'medium', suggestion: '使用"淡化色斑""均匀肤色"等替代', platforms: ['all'] },
  { word: '防脱发', category: '平台敏感词', severity: 'medium', suggestion: '使用"头皮护理""秀发养护"等替代', platforms: ['all'] },
  { word: '生发', category: '平台敏感词', severity: 'high', suggestion: '使用"头皮护理""发量显多"等替代', platforms: ['all'] },
  { word: '丰胸', category: '平台敏感词', severity: 'high', suggestion: '使用"体态管理""自信曲线"等替代', platforms: ['all'] },
  { word: '增高', category: '平台敏感词', severity: 'high', suggestion: '使用"体态优化""视觉显高"等替代', platforms: ['all'] },
  { word: '消炎', category: '医疗违规', severity: 'high', suggestion: '非药品禁止使用', platforms: ['all'] },
  { word: '杀菌', category: '医疗违规', severity: 'medium', suggestion: '使用"清洁""洁净"等替代', platforms: ['all'] },
  { word: '抑菌', category: '医疗违规', severity: 'medium', suggestion: '需有检测报告才可使用', platforms: ['all'] },
  { word: '处方', category: '医疗违规', severity: 'high', suggestion: '非药品禁止使用', platforms: ['all'] },
  { word: '无激素', category: '绝对化', severity: 'medium', suggestion: '使用"温和配方""亲肤成分"等替代', platforms: ['all'] },
  { word: '食品级', category: '绝对化', severity: 'high', suggestion: '使用"安全成分""放心配方"等替代', platforms: ['all'] },
  { word: '孕妇可用', category: '绝对化', severity: 'high', suggestion: '需有检测报告才可使用', platforms: ['all'] },
  { word: '儿童可用', category: '绝对化', severity: 'high', suggestion: '需有相关检测认证', platforms: ['all'] },
  { word: '过敏体质可用', category: '绝对化', severity: 'high', suggestion: '使用"温和配方"等替代', platforms: ['all'] },
  { word: '无添加', category: '绝对化', severity: 'medium', suggestion: '使用"少添加""精简配方"等替代', platforms: ['all'] },
  { word: '0添加', category: '绝对化', severity: 'high', suggestion: '使用"精简成分""纯净配方"等替代', platforms: ['all'] },
  { word: '无防腐剂', category: '绝对化', severity: 'medium', suggestion: '需有检测报告才可使用', platforms: ['all'] },
  { word: '有机', category: '虚假宣称', severity: 'medium', suggestion: '需有有机认证才可标注', platforms: ['all'] },
  { word: '绿色', category: '虚假宣称', severity: 'low', suggestion: '需有相关认证才可使用', platforms: ['all'] },
  { word: '环保', category: '虚假宣称', severity: 'low', suggestion: '使用"可回收""可持续"等具体描述', platforms: ['all'] },
  { word: '黑科技', category: '平台敏感词', severity: 'low', suggestion: '使用"新技术""创新设计"等替代', platforms: ['xiaohongshu', 'douyin'] },
  { word: '网红', category: '平台敏感词', severity: 'low', suggestion: '使用"热门""人气""受欢迎"等替代', platforms: ['xiaohongshu'] },
  { word: '爆款', category: '平台敏感词', severity: 'low', suggestion: '使用"人气好物""热卖款"等替代', platforms: ['xiaohongshu'] },
];

// 检测函数
export function detectSensitiveWords(
  text: string,
  platform: string = 'all'
): { word: string; index: number; category: string; severity: string; suggestion: string }[] {
  const results: { word: string; index: number; category: string; severity: string; suggestion: string }[] = [];
  const lowerText = text.toLowerCase();

  for (const item of sensitiveWords) {
    // 检查平台匹配
    const matchPlatform = item.platforms.includes('all') || item.platforms.includes(platform);
    if (!matchPlatform) continue;

    // 在文本中查找所有出现位置
    const wordLower = item.word.toLowerCase();
    let startIndex = 0;
    while (true) {
      const index = lowerText.indexOf(wordLower, startIndex);
      if (index === -1) break;
      results.push({
        word: text.substring(index, index + item.word.length),
        index,
        category: item.category,
        severity: item.severity,
        suggestion: item.suggestion,
      });
      startIndex = index + 1;
    }
  }

  // 按位置排序
  results.sort((a, b) => a.index - b.index);
  return results;
}
