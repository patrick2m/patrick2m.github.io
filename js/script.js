import ScrollSuave from './modules/scroll-suave.js';
import LanguageSelect from './modules/language-select.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const Language = new LanguageSelect('portugues', 'english');
Language.init();