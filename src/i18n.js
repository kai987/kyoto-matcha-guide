import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Kyoto Matcha Guide',
      nav: { home: 'Home', history: 'History', types: 'Types & Quality', brewing: 'Brewing', locations: 'Locations', contact: 'Contact' },
      home: { title: 'Welcome', desc: 'Experience the rich taste woven by history and culture of Kyoto Matcha.' },
      history: { title: 'Origin of Matcha', text1: 'Matcha was introduced from China in the Kamakura period and became powdered in the Edo period. Uji in Kyoto became its center.', text2: 'Established by Sen no Rikyu, the tea ceremony embodies the spirit of wabi-sabi and is a symbol of Japanese culture.' },
      types: { title: 'Main Grades of Matcha', grades: ['Premium', 'Superior', 'Standard', 'Common'], select: 'Choose based on color, aroma, and taste. Fine powder and vivid green indicate high quality.' },
      brewing: { title: 'Brewing Steps', steps: ['Warm the whisk with hot water.', 'Put 1–2g matcha into a bowl.', 'Pour 30ml of 70°C water.', 'Whisk briskly to create foam.'], extra: 'Enjoy variations like koicha (thick tea) and usucha (thin tea).' },
      locations: { title: 'Recommended Spots', spot1: 'Ippodo Tea Co.', spot2: 'Tsujiri', spot3: 'Itohkyuemon', desc: 'Visit Uji for Byodo-in Temple and vast tea fields.' },
      contact: { title: 'Contact Us', name: 'Name', email: 'Email', message: 'Message', send: 'Send' }
    }
  },
  zh: {
    translation: {
      title: '京都抹茶指南',
      nav: { home: '首页', history: '历史', types: '种类与品质', brewing: '冲泡', locations: '推荐地点', contact: '联系我们' },
      home: { title: '欢迎', desc: '欢迎来到京都抹茶的世界。体验由历史和文化编织的丰富风味。' },
      history: { title: '抹茶的起源', text1: '抹茶于镰仓时代从中国传入，江户时代成为粉末状。京都宇治成为中心。', text2: '千利休确立了茶道，体现了侘寂精神，成为日本文化的象征。' },
      types: { title: '抹茶的主要等级', grades: ['特上', '上', '中', '普'], select: '根据颜色、香气和口感选择。细腻的粉末和鲜艳的绿色代表高品质。' },
      brewing: { title: '冲泡步骤', steps: ['用热水温热茶筅。', '茶碗中放入1–2克抹茶。', '注入30毫升70℃左右的水。', '快速搅拌至起泡。'], extra: '可享受浓茶和薄茶等多种变化。' },
      locations: { title: '推荐地点', spot1: '一保堂茶铺', spot2: '辻利', spot3: '伊藤久右卫门', desc: '前往宇治，参观平等院和广阔的茶田。' },
      contact: { title: '联系我们', name: '姓名', email: '邮箱', message: '留言', send: '发送' }
    }
  },
  ja: {
    translation: {
      title: '京の茶彩（ちゃさい）ガイド',
      nav: { home: 'ホーム', history: '歴史', types: '種類と品質', brewing: '淹れ方', locations: 'おすすめスポット', contact: 'お問い合わせ' },
      home: { title: 'ようこそ', desc: '歴史と文化が織りなす豊かな味わいの京都抹茶を体験してください。' },
      history: { title: '抹茶の起源', text1: '抹茶は鎌倉時代に中国から伝わり、江戸時代に粉末状になりました。宇治が発展の中心です。', text2: '千利休が確立した茶道はわび・さびの精神を体現し、日本文化の象徴です。' },
      types: { title: '主な抹茶の等級', grades: ['特上', '上', '中', '普'], select: '色・香り・味で選びましょう。きめ細かい粉と鮮やかな緑色が高品質の証です。' },
      brewing: { title: '淹れ方', steps: ['茶筅をお湯で温める。', '茶碗に1～2gの抹茶を入れる。', '70℃程度のお湯を30ml注ぐ。', '茶筅でよく泡立てる。'], extra: '濃茶や薄茶などのバリエーションも楽しめます。' },
      locations: { title: 'おすすめスポット', spot1: '一保堂茶舗', spot2: '辻利', spot3: '伊藤久右衛門', desc: '宇治で平等院や広大な茶畑を訪れましょう。' },
      contact: { title: 'お問い合わせ', name: 'お名前', email: 'メールアドレス', message: 'メッセージ', send: '送信' }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;