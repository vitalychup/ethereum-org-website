const translations = {
  'en-US': {
    path: '/',
    language: 'English',
    'language-english': 'English',
    ethereum: 'Ethereum',
    'page-home': 'Ethereum',
    'page-home-title':
      'Ethereum is a global, open-source platform for decentralized applications.',
    'page-home-subtitle':
      'On Ethereum, you can write code that controls digital value, runs exactly as programmed, and is accessible anywhere in the world.',
    'page-home-section-beginners-title': 'Beginners',
    'page-home-section-beginners-item-one': 'Completely new to Ethereum?',
    'page-home-section-beginners-item-two': 'What is Ethereum?',
    'page-home-section-beginners-item-three': 'Why should I care?',
    'page-home-section-use-title': 'Use',
    'page-home-section-use-item-one': 'What can I do with Ethereum today?',
    'page-home-section-use-item-two': 'How do I get Ether?',
    'page-home-section-use-item-three': "What's a wallet?",
    'page-home-section-learn-title': 'Learn',
    'page-home-section-learn-item-one': 'Beginner resources',
    'page-home-section-learn-item-two': 'How Ethereum works',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-developers-title': 'Developers',
    'page-home-section-developers-item-one': 'Getting started guides',
    'page-home-section-developers-item-two': 'Learn to program smart contracts',
    'page-home-section-developers-item-three':
      'Find the latest developer tools',
    'page-home-section-enterprise-title': 'Enterprise',
    'page-home-section-enterprise-item-one': 'Why Enterprise Ethereum?',
    'page-home-section-enterprise-item-two': 'Enterprise Features',
    'page-home-section-enterprise-item-three': 'Enterprise Developer Community',
    'page-beginners': 'Beginners',
    'page-use': 'Use',
    'page-learn': 'Learn',
    'page-developers': 'Developers'
  },
  de: {
    path: '/de/',
    language: 'Deutsch',
    'language-english': 'German',
    ethereum: 'Ethereum',
    'page-home': 'Startseite',
    'page-home-title':
      'Ethereum ist eine globale Open-Source-Plattform f??r dezentralisierte Anwendungen.',
    'page-home-subtitle':
      'Auf Ethereum kannst du Code schreiben, der digitale Werte verwaltet, der exakt wie programmiert ausgef??hrt wird und der von ??berall auf der Welt zug??nglich ist.',
    'page-home-section-beginners-title': 'Anf??nger',
    'page-home-section-beginners-item-one': 'Neu bei Ethereum?',
    'page-home-section-beginners-item-two': 'Was ist Ethereum?',
    'page-home-section-beginners-item-three': 'Welchen Nutzen bringt es mir?',
    'page-home-section-use-title': 'Anwendung',
    'page-home-section-use-item-one':
      'Was kann ich schon heute mit Ethereum tun?',
    'page-home-section-use-item-two': 'Wie komme ich an Ether?',
    'page-home-section-use-item-three': 'Was ist eine Wallet?',
    'page-home-section-learn-title': 'Lernen',
    'page-home-section-learn-item-one': 'Die Ethereum-Grundlagen',
    'page-home-section-learn-item-two': 'Wie Ethereum funktioniert',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-developers-title': 'Entwickler',
    'page-home-section-developers-item-one': 'Erste Schritte',
    'page-home-section-developers-item-two':
      'Lerne Smart Contracts zu programmieren',
    'page-home-section-developers-item-three':
      'Finde die neuesten Entwickler-Tools',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-three': '',
    'page-beginners': 'Anf??nger',
    'page-use': 'Anwendung',
    'page-learn': 'Lernen',
    'page-developers': 'Entwickler'
  },
  'zh-CN': {
    path: '/zh/',
    language: '????????????',
    'language-english': 'Simplified Chinese',
    ethereum: '?????????',
    'page-home': '??????',
    'page-home-title': '??????????????????????????????????????????Dapp?????????????????????????????????',
    'page-home-subtitle':
      '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    'page-home-section-beginners-title': '?????????',
    'page-home-section-beginners-item-one': '???????????????',
    'page-home-section-beginners-item-two': '???????????????',
    'page-home-section-beginners-item-three': '??????????????????',
    'page-home-section-use-title': '??????',
    'page-home-section-use-item-one': '???????????????????????????',
    'page-home-section-use-item-two': '???????????? ETH',
    'page-home-section-use-item-three': '??????????????????',
    'page-home-section-learn-title': '??????',
    'page-home-section-learn-item-one': '???????????????',
    'page-home-section-learn-item-two': '?????????????????????',
    'page-home-section-learn-item-three': 'ETH 2.0',
    'page-home-section-developers-title': '?????????',
    'page-home-section-developers-item-one': '????????????',
    'page-home-section-developers-item-two': '??????????????????',
    'page-home-section-developers-item-three': '????????????????????????',
    'page-home-section-enterprise-title': '',
    'page-home-section-enterprise-item-one': '',
    'page-home-section-enterprise-item-two': '',
    'page-home-section-enterprise-item-three': '',
    'page-beginners': '?????????',
    'page-use': '??????',
    'page-learn': '??????',
    'page-developers': '?????????'
  }
}

const translate = (lookup, lang = 'en-US') => {
  const translation = translations[lang][lookup]
  if (translation === undefined) {
    console.warn(`No translation for: "${lookup}" on lang: "${lang}"`)
  }
  return translation || ''
}

module.exports = {
  translations,
  translate
}
