import Vue from "vue";
import VueI18n from "vue-i18n";
import VueLocalStorage from "vue-localstorage";

Vue.use(VueLocalStorage);

const LANG_KEY = "language";

const initLang = () => {
  let lang = Vue.localStorage.get(LANG_KEY);
  return lang || "vi";
};

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const i18n = new VueI18n({
  locale: initLang(), // set locale
  messages: loadLocaleMessages(),
  fallbackLocale: "en"
});

export default i18n;
