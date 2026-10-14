// ============================================
// MODAL MANAGER
// ============================================
const ModalManager = {

  open(modalId, onOpen = null) {
    const modal = Utils.getElement(modalId);
    const modalContent = modal ? modal.querySelector('.modal-content') : null;
    
    if (!modal || !modalContent) {
      console.error(`Modal ${modalId} not found`);
      return;
    }

    modalContent.classList.remove('animate-out');
    modalContent.classList.add('animate-in');
    modal.classList.remove('hidden');
    modal.classList.add('modal-open');
    document.body.classList.add('modal-open');

    if (onOpen) onOpen();
  },

  close(modalId) {
    const modal = Utils.getElement(modalId);
    const modalContent = modal ? modal.querySelector('.modal-content') : null;
    
    if (!modal || !modalContent) {
      console.error(`Modal ${modalId} not found`);
      return;
    }

    modalContent.classList.remove('animate-in');
    modalContent.classList.add('animate-out');

    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      modalContent.classList.remove('animate-out');
    }, CONFIG.ANIMATION_DURATION);
  },

  setupBackgroundClose(modalId, closeFunction) {
    const modal = Utils.getElement(modalId);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeFunction();
      });
    }
  },

  setupEscapeClose(closeFunction) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeFunction();
    });
  },

  // Step 1: Open preview modal with GIF
  openPreview(videoId) {
    const videoData = CONFIG.getVideoData(videoId, LanguageManager.currentLang);
    if (!videoData) return;

    const modal = Utils.getElement('videoPreviewModal');
    const gif = Utils.getElement('previewGif');
    const title = Utils.getElement('previewTitle');
    const description = Utils.getElement('previewDescription');
    const watchBtn = Utils.getElement('watchFullButton');

    if (modal && gif && title && description && watchBtn) {
      gif.src = videoData.gif;
      title.textContent = videoData.title;
      description.textContent = videoData.description;
      
      watchBtn.setAttribute('data-video-id', videoId);
      
      modal.classList.remove('hidden');
      modal.classList.add('modal-open');
      document.body.classList.add('modal-open');
    }
  },

  closePreview() {
    const modal = Utils.getElement('videoPreviewModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
    }
  },

  // Step 2: Open fullscreen YouTube embed
  openYoutubeFullscreen(videoId) {
    const modal = Utils.getElement('youtubeModal');
    const iframe = Utils.getElement('youtubeIframe');

    if (iframe && modal) {
      iframe.src = CONFIG.YOUTUBE_EMBED + videoId + CONFIG.YOUTUBE_PARAMS;
      modal.classList.remove('hidden');
      modal.classList.add('modal-open');
      document.body.classList.add('modal-open');
      
      setTimeout(() => {
        this.requestFullscreen(modal);
      }, 300);
    }
  },

  closeYoutube() {
    const modal = Utils.getElement('youtubeModal');
    const iframe = Utils.getElement('youtubeIframe');

    if (modal) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.debug('Exit fullscreen error:', err));
      }
      
      modal.classList.add('hidden');
      modal.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      if (iframe) iframe.src = '';
    }
  },

  requestFullscreen(element) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (element.requestFullscreen) {
      element.requestFullscreen().then(() => {
        // Lock orientation to landscape on mobile
        if (isMobile && screen.orientation && screen.orientation.lock) {
          screen.orientation.lock('landscape').catch(err => {
            console.debug('Orientation lock failed:', err);
          });
        }
      }).catch(err => console.debug('Fullscreen request failed:', err));
    }
  }
};
