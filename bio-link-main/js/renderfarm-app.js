// ============================================
// RENDERFARM PAGE INITIALIZATION
// ============================================

const RenderfarmApp = {
  init() {
    // Initialize preloader on load
    window.addEventListener('load', () => {
      ThemeManager.initPreloader();
    });

    // Initialize components when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeComponents();
      this.setupSubscribeModal();
    });
  },

  initializeComponents() {
    LanguageManager.init();
    ThemeManager.initToggle();
    RenderCalculator.updateFrameCountDisplay();
  },

  setupSubscribeModal() {
    const subscribeBtn = Utils.getElement('subscribeBtn');
    const subscribeModal = Utils.getElement('subscribeModal');
    const closeModal = Utils.getElement('closeModal');

    if (subscribeBtn && subscribeModal) {
      subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        ThemeManager.syncModalImage();
        ModalManager.open('subscribeModal');
      });
    }

    if (closeModal && subscribeModal) {
      closeModal.addEventListener('click', () => {
        ModalManager.close('subscribeModal');
      });
    }

    ModalManager.setupBackgroundClose('subscribeModal', () => ModalManager.close('subscribeModal'));
    ModalManager.setupEscapeClose(() => {
      if (subscribeModal && subscribeModal.classList.contains('modal-open')) {
        ModalManager.close('subscribeModal');
      }
    });
  }
};

// Initialize app
RenderfarmApp.init();
