// the lang (e.g. 'en-US') is globally accessible in components via `this.$lang`
// it should be specified in the front matter of every markdown page:
// https://vuepress.vuejs.org/guide/markdown.html#front-matter
const translations = {
  'en-US': {
    path: '/',
    language: 'English',
    ethereum: 'Ethereum',
    'link-text-artwork': 'Read about the new artwork!',
    'link-text-more': '→  More',
    'page-home': 'Ethereum',
    'page-home-title': 'Ethereum is a global, open-source platform for decentralized applications.',
    'page-home-subtitle': 'On Ethereum, you can write code that controls digital value, runs exactly as programmed, and is accessible anywhere in the world.',
    'page-home-section-beginners-title': 'Beginners',
    'page-home-section-beginners-item-one': 'Completely new to Ethereum?',
    'page-home-section-beginners-item-two': 'What is Ethereum?',
    'page-home-section-beginners-item-three': 'Why should I care?',
    'page-home-section-use-title': 'Use',
    'page-home-section-use-item-one': 'What can I do with Ethereum today?',
    'page-home-section-use-item-one-link': '/use/#_1-use-an-application-built-on-ethereum',
    'page-home-section-use-item-two': 'How do I get Ether?',
    'page-home-section-use-item-two-link': '/use/#_2-what-is-eth-and-how-do-i-get-it',
    'page-home-section-use-item-three': 'What\'s a wallet?',
    'page-home-section-use-item-three-link': '/use/#_3-what-is-a-wallet-and-which-one-should-i-use',
    'page-home-section-learn-title': 'Learn',
    'page-home-section-learn-item-one': 'Beginner resources',
    'page-home-section-learn-item-one-link': '/learn/#ethereum-basics',
    'page-home-section-learn-item-two': 'How Ethereum works',
    'page-home-section-learn-item-two-link': '/learn/#how-ethereum-works',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/learn/#eth-2-0',
    'page-home-section-developers-title': 'Developers',
    'page-home-section-developers-item-one': 'Getting started guides',
    'page-home-section-developers-item-one-link': '/developers/#getting-started',
    'page-home-section-developers-item-two': 'Learn to program smart contracts',
    'page-home-section-developers-item-two-link': '/developers/#smart-contract-languages',
    'page-home-section-developers-item-three': 'Find the latest developer tools',
    'page-home-section-developers-item-three-link': '/developers/#developer-tools',
    'page-home-section-enterprise-title': 'Enterprise',
    'page-home-section-enterprise-item-one': 'Why Enterprise Ethereum?',
    'page-home-section-enterprise-item-one-link': '/enterprise/#why-enterprise-ethereum',
    'page-home-section-enterprise-item-two': 'Enterprise Features',
    'page-home-section-enterprise-item-two-link': '/enterprise/#enterprise-features',
    'page-home-section-enterprise-item-three': 'Enterprise Developer Community',
    'page-home-section-enterprise-item-three-link': '/enterprise/#enterprise-developer-community',
    'page-beginners': 'Beginners',
    'page-use': 'Use',
    'page-learn': 'Learn',
    'page-developers': 'Developers'
  },
  'ko-KR': {
    path: '/ko/',
    language: '한국어',
    ethereum: '이더리움',
    'link-text-artwork': '새로운 미디어 아트에 대해 읽어보세요!',
    'link-text-more': '→  더 알아보기',
    'page-home': '이더리움이란',
    'page-home-title': '이더리움은 탈중앙화된 애플리케이션을 위한 글로벌 오픈 소스 플랫폼입니다.',
    'page-home-subtitle': '여러분은 이더리움을 통해 디지털화된 가치를 제어하고, 프로그래밍한 대로 작동되며, 전 세계 어디에서든 동일하게 이용할 수 있는 코드를 작성할 수 있습니다.',
    'page-home-section-beginners-title': '입문자',
    'page-home-section-beginners-item-one': '이더리움을 처음 접하시나요?',
    'page-home-section-beginners-item-two': '이더리움이란?',
    'page-home-section-beginners-item-three': '왜 중요한가요?',
    'page-home-section-use-title': '사용하기',
    'page-home-section-use-item-one': '오늘날 이더리움으로 어떤 것을 할 수 있을까요?',
    'page-home-section-use-item-one-link': '/ko/use/#_1-이더리움-디앱-사용하기',
    'page-home-section-use-item-two': '어떻게 이더를 얻을 수 있나요?',
    'page-home-section-use-item-two-link': '/ko/use/#_2-이더-eth-는-무엇이며-어떻게-획득할-수-있을까요',
    'page-home-section-use-item-three': '지갑이란 무엇인가요?',
    'page-home-section-use-item-three-link': '/ko/use/#_3-지갑은-무엇이며-어떠한-지갑을-사용해야-할까요',
    'page-home-section-learn-title': '배우기',
    'page-home-section-learn-item-one': '입문자를 위한 참고자료',
    'page-home-section-learn-item-one-link': '/ko/learn/#이더리움-기초',
    'page-home-section-learn-item-two': '이더리움은 어떻게 작동하나요?',
    'page-home-section-learn-item-two-link': '/ko/learn/#이더리움-작동방식',
    'page-home-section-learn-item-three': '이더리움 2.0',
    'page-home-section-learn-item-three-link': '/ko/learn/#이더리움-2-0',
    'page-home-section-developers-title': '개발자',
    'page-home-section-developers-item-one': '시작하기',
    'page-home-section-developers-item-one-link': '/ko/developers/#시작하면서',
    'page-home-section-developers-item-two': '스마트 컨트랙트 프로그래밍 배우기',
    'page-home-section-developers-item-two-link': '/ko/developers/#스마트-컨트랙트-언어들',
    'page-home-section-developers-item-three': '최신 개발자 도구 알아보기',
    'page-home-section-developers-item-three-link': '/ko/developers/#개발자-도구',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': '입문자',
    'page-use': '사용법',
    'page-learn': '배우기',
    'page-developers': '개발자 가이드'
  },
  'zh-CN': {
    path: '/zh/',
    language: '简体中文',
    ethereum: '以太坊',
    'link-text-artwork': '阅读有关新艺术品的信息',
    'link-text-more': '→  更多',
    'page-home': '首页',
    'page-home-title': '以太坊是一个为去中心化应用（DApp）而生的全球开源平台。',
    'page-home-subtitle': '在以太坊上，你可以通过编写代码管理数字资产、运行程序，更重要的是，这一切都不受地域限制。',
    'page-home-section-beginners-title': '初学者',
    'page-home-section-beginners-item-one': '初识以太坊',
    'page-home-section-beginners-item-two': '以太坊简介',
    'page-home-section-beginners-item-three': '以太坊的意义',
    'page-home-section-use-title': '使用',
    'page-home-section-use-item-one': '我能用以太坊做什么',
    'page-home-section-use-item-one-link': '/zh/use/#_1-이더리움-디앱-사용하기',
    'page-home-section-use-item-two': '如何获得 ETH',
    'page-home-section-use-item-two-link': '/zh/use/#_2-什么是-eth，以及如何获得？',
    'page-home-section-use-item-three': '什么是钱包？',
    'page-home-section-use-item-three-link': '/zh/use/#_3-什么是钱包，我应该如何选择合适的钱包？',
    'page-home-section-learn-title': '学习',
    'page-home-section-learn-item-one': '初学者资源',
    'page-home-section-learn-item-one-link': '/zh/learn/#以太坊入门',
    'page-home-section-learn-item-two': '以太坊如何工作',
    'page-home-section-learn-item-two-link': '/zh/learn/#以太坊如何运作',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/zh/learn/#eth-2-0',
    'page-home-section-developers-title': '开发者',
    'page-home-section-developers-item-one': '入门指南',
    'page-home-section-developers-item-one-link': '/zh/developers/#入门指南',
    'page-home-section-developers-item-two': '编写智能合约',
    'page-home-section-developers-item-two-link': '/zh/developers/#智能合约语言',
    'page-home-section-developers-item-three': '最新的开发者工具',
    'page-home-section-developers-item-three-link': '/zh/developers/#开发者工具',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-one-link': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-two-link': '',
    'page-home-section-enterprise-item-three': '',
    'page-home-section-enterprise-item-three-link': '',
    'page-beginners': '初学者',
    'page-use': '使用',
    'page-learn': '学习',
    'page-developers': '开发者'
  },
  'fa-IR': {
    path: '/fa/',
    ethereum: 'اتریوم',
    language: 'فارسی',
    'link-text-artwork': 'در مورد این اثر هنری بیشتر بدانید',
    'link-text-more': '→  اطلاعات بیشتر',
    'page-home': 'اتریوم',
    'page-home-title': 'اتریوم یک پلتفرم متن باز جهانی٫ برای برنامه های غیر متمرکز است.',
    'page-home-subtitle': 'در اتریوم٫ شما میتوانید برنامه‌ای بنویسید که ارزش دیجیتالی داشته باشد٫ دقیقا همان کدی که نوشته‌اید را اجرا میکند٫ و در تمامی نقاط جهان قابل دسترسی است.',
    'page-home-section-beginners-title': 'مبتدیان',
    'page-home-section-beginners-item-one': 'آیا هیچ ایده‌ای درباره‌ اتریوم ندارید؟',
    'page-home-section-beginners-item-two': 'اتریوم چیست؟',
    'page-home-section-beginners-item-three': 'چرا باید اهمیت بدهم؟',
    'page-home-section-use-title': 'استفاده',
    'page-home-section-use-item-one': 'از یک برنامه کاربردی ساخته‌شده روی اتریوم استفاده کنید',
    'page-home-section-use-item-one-link': '/fa/use/#_1-از-یک-برنامه-کاربردی-ساخته‌شده-روی-اتریوم-استفاده-کنید',
    'page-home-section-use-item-two': 'چگونه اتریوم بدست بیاورید؟',
    'page-home-section-use-item-two-link': '/fa/use/#_2-eth-چیست-و-چگونه-می‌توان-آن-را-به‌دست-آورد؟',
    'page-home-section-use-item-three': 'کیف پول (والت) چیست؟',
    'page-home-section-use-item-three-link': '/fa/use/#_3-کیف-پول-چیست-و-از-کدام-کیف-پول-باید-استفاده-کنم؟',
    'page-home-section-learn-title': 'آموزش',
    'page-home-section-learn-item-one': 'مراجع برای مبتدیان',
    'page-home-section-learn-item-one-link': '/fa/learn/#مبانی-اتریوم',
    'page-home-section-learn-item-two': 'اتریوم چگونه کار می کند؟',
    'page-home-section-learn-item-two-link': '/fa/learn/#اتریوم-چگونه-کار-می‌کند',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-learn-item-three-link': '/fa/learn/#eth-2-0',
    'page-home-section-developers-title': 'توسعه دهندگان',
    'page-home-section-developers-item-one': 'مطالبی برای شروع',
    'page-home-section-developers-item-one-link': '/fa/developers/#شروع-کنیم',
    'page-home-section-developers-item-two': 'آموزش برنامه‌نویسی قراردادهای هوشمند',
    'page-home-section-developers-item-two-link': '/fa/developers/#زبان‌های-قرارداد-هوشمند',
    'page-home-section-developers-item-three': 'جدیدترین ابزارها برای توسعه دهندگان',
    'page-home-section-developers-item-three-link': '/fa/developers/#ابزار‌های-برنامه‌نویسی',
    'page-home-section-enterprise-title': 'Enterprise',
    'page-home-section-enterprise-item-one': 'Why Enterprise Ethereum?',
    'page-home-section-enterprise-item-one-link': '/enterprise/#why-enterprise-ethereum',
    'page-home-section-enterprise-item-two': 'Enterprise Features',
    'page-home-section-enterprise-item-two-link': '/enterprise/#enterprise-features',
    'page-home-section-enterprise-item-three': 'Enterprise Developer Community',
    'page-home-section-enterprise-item-three-link': '/enterprise/#enterprise-developer-community',
    'page-beginners': 'مبتدیان',
    'page-use': 'استفاده',
    'page-learn': 'آموزش',
    'page-developers': 'توسعه دهندگان'
  }
};

const translate = (lookup, lang = 'en-US') => {
  const translation = translations[lang][lookup];
  if (translation === undefined) {
    console.error(`No translation for: ${lookup} on lang: ${lang}`);
  }
  return translation || '';
};

module.exports = {
  translate
};
