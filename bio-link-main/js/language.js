// ============================================
// LANGUAGE MANAGER
// ============================================
const LanguageManager = {
  currentLang: 'en',

  init() {
    const savedLang = Utils.getLocalStorage('language') || 'en';
    this.setLanguage(savedLang, false);
    this.setupDropdown();
  },

  setupDropdown() {
    const languageBtn = Utils.getElement('languageBtn');
    const languageDropdown = Utils.getElement('languageDropdown');
    const languageOptions = Utils.querySelectorAll('.language-option');

    if (!languageBtn || !languageDropdown) return;

    // Toggle dropdown
    languageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.remove('show');
      }
    });

    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        this.setLanguage(lang, true);
        languageDropdown.classList.remove('show');
      });
    });

    this.updateActiveOption();
  },

  setLanguage(lang, saveToStorage = true) {
    this.currentLang = lang;
    
    if (saveToStorage) {
      Utils.setLocalStorage('language', lang);
    }

    this.updateFlag();
    this.translatePage();
    this.updateActiveOption();
  },

  updateFlag() {
    const currentLangFlag = Utils.getElement('currentLangFlag');
    if (currentLangFlag) {
      currentLangFlag.src = this.currentLang === 'en' ? 'assets/icons/us.png' : 'assets/icons/id.png';
      currentLangFlag.alt = this.currentLang === 'en' ? 'English' : 'Indonesia';
    }
  },

  updateActiveOption() {
    const languageOptions = Utils.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
      if (option.getAttribute('data-lang') === this.currentLang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  },

  translatePage() {
    const translations = CONFIG.TRANSLATIONS[this.currentLang];
    if (!translations) return;

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[key];
        } else {
          element.textContent = translations[key];
        }
      }
    });

    // Special handling for input placeholders by ID
    const customWidth = Utils.getElement('customWidth');
    const customHeight = Utils.getElement('customHeight');
    if (customWidth) customWidth.placeholder = translations.render_width || 'Width (px)';
    if (customHeight) customHeight.placeholder = translations.render_height || 'Height (px)';
  },

  t(key) {
    return CONFIG.TRANSLATIONS[this.currentLang]?.[key] || key;
  }
};
