import { globalEmitter } from '../share/emitter';
import enUS from './lang/en-US';

type LangItem = { [x: string]: string };
type Langs = { [x: string]: LangItem };

class I18n {
  private langs: Langs = { enUS };
  private current: string = 'enUS';

  constructor() {
    this.setUp();
  }

  setUp() {
    if (typeof window === 'undefined') {
      return;
    }
    let locale = 'enUS';
    this.current = locale;
    globalEmitter.emit(globalEmitter.EVENT_LANG_CHANGE, this, locale, this.langs[locale]);
  }

  isAvailable(langName: string) {
    return typeof this.langs[langName] !== 'undefined';
  }

  add(langName: string, lang: LangItem) {
    this.langs[langName] = lang;
  }

  setCurrent(langName: string) {
    if (!this.isAvailable(langName)) {
      throw new Error(`Language ${langName} does not exist`);
    }
    if (this.current !== langName) {
      this.current = langName;
      globalEmitter.emit(globalEmitter.EVENT_LANG_CHANGE, this, langName, this.langs[langName]);
    }
  }

  get(key: string, placeholders?: { [x: string]: string }) {
    let str = this.langs[this.current][key] || '';
    if (placeholders) {
      Object.keys(placeholders).forEach((k) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), placeholders[k]);
      });
    }
    return str;
  }

  getCurrent() {
    return this.current;
  }
}

const i18n = new I18n();
export default i18n;
