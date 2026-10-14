// ============================================
// THEME/DARK MODE MANAGER
// ============================================
const ThemeManager = {
  IMG_PATHS: {
    logo_light: 'assets/images/branding/logo_black.png',
    logo_dark: 'assets/images/branding/logo_white.png',
    home_light: 'assets/icons/home-day.png',
    home_dark: 'assets/icons/home-night.png',
  },

  initPreloader() {
    const preloader = Utils.getElement('preloader');
    const mainContent = Utils.getElement('main-content');
    const savedTheme = Utils.getLocalStorage('theme');

    if (preloader) {
      if (savedTheme === 'dark') preloader.classList.add('dark-mode');
      else preloader.classList.remove('dark-mode');
    }

    setTimeout(() => {
      if (preloader) preloader.classList.add('hidden');
      if (mainContent) mainContent.classList.remove('hidden');
    }, 1000);
  },

  apply(isDark) {
    const body = document.body;
    const profileImage = Utils.getElement('profileImage');
    const modalProfileImage = Utils.getElement('modalProfileImage');
    const homeIcon = Utils.getElement('homeIcon');

    try {
      if (isDark) {
        body.classList.add('dark-mode');
        if (profileImage) Utils.preloadImage(profileImage, this.IMG_PATHS.logo_dark);
        if (modalProfileImage) Utils.preloadImage(modalProfileImage, this.IMG_PATHS.logo_dark);
        if (homeIcon) homeIcon.src = this.IMG_PATHS.home_dark;
        Utils.setLocalStorage('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        if (profileImage) Utils.preloadImage(profileImage, this.IMG_PATHS.logo_light);
        if (modalProfileImage) Utils.preloadImage(modalProfileImage, this.IMG_PATHS.logo_light);
        if (homeIcon) homeIcon.src = this.IMG_PATHS.home_light;
        Utils.setLocalStorage('theme', 'light');
      }
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  },

  syncModalImage() {
    const saved = Utils.getLocalStorage('theme') || 
                  (document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    const modal = Utils.getElement('modalProfileImage');
    if (!modal) return;
    const logoPath = saved === 'dark' ? this.IMG_PATHS.logo_dark : this.IMG_PATHS.logo_light;
    Utils.preloadImage(modal, logoPath);
  },

  initToggle() {
    const toggle = Utils.getElement('darkModeToggle');
    if (!toggle) return;

    const savedTheme = Utils.getLocalStorage('theme');
    this.apply(savedTheme === 'dark');
    toggle.checked = (savedTheme === 'dark');
    toggle.addEventListener('change', (e) => this.apply(e.target.checked));
  }
};
