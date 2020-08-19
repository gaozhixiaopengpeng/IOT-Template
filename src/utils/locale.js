import Cookies from "js-cookie";
import Config from "../settings";

const locale = Config.locale;
const systemLocales = Config.systemLocales;

/**
 * 获取本地的语言
 *
 */
export const getLocale = () => {
  let language = Cookies.get("locale");
  console.log(typeof language);
  if (language) {
    return language;
  } else {
    let language = (
      navigator.language || navigator.browserLanguage
    ).toLowerCase();
    console.log(language);
    for (const lang of systemLocales) {
      if (language.indexOf(lang) > -1) {
        return lang;
      }
    }
    return locale;
  }
};

/**
 * 设置本地的语言
 *
 */
export const setLocale = locale => {
  return Cookies.set("locale", locale);
};
