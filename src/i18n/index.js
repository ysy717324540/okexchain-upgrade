import Vue from 'vue';
import VueI18n from 'vue-i18n';
import _ from 'lodash';
import zh from './lang/zh';
import en from './lang/en';

Vue.use(VueI18n);

let availableLocale = ['zh', 'en'];

let defaultLangStr = navigator.language;
let defaultLang = 'en';
window.document.title = 'Upgrade of OKExChain Wallet'

if (defaultLangStr.indexOf('zh') >= 0) {
  defaultLang = 'zh';
}
let query = location.search.substr(1);
let queryObj = {};

if (query) {
  _.forEach(query.split('&'), item => {
    let tempArr = item.split('=');
    queryObj[tempArr[0]] = tempArr[1];
  });
}

let locale = _.includes(availableLocale, queryObj['locale']) ? queryObj['locale'] : defaultLang;

locale = localStorage.getItem('locale') || locale;

if(locale === 'zh'){
  window.document.title = 'OKExChain钱包升级'
}

let i18n = new VueI18n({
  locale,
  messages: {
    'en': en,
    'zh': zh
  }
});

export default i18n;
