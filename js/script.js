import ScrollSuave from './modules/scroll-suave.js';
import LanguageSelect from './modules/language-select.js';
import DarkTheme from './modules/dark-theme.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const Language = new LanguageSelect('portugues', 'english');
Language.init();

const Dark = new DarkTheme('botaoTema');
Dark.init();