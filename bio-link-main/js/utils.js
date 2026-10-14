// ============================================
// UTILITY FUNCTIONS
// ============================================
const Utils = {

  preloadImage(imgEl, src) {
    if (!imgEl) return;
    try {
      const img = new Image();
      img.onload = () => { imgEl.src = src; };
      img.onerror = () => { imgEl.src = src; };
      img.src = src;
    } catch (e) {
      try { imgEl.src = src; } catch (_) {}
    }
  },

  getElement(id) {
    return document.getElementById(id);
  },

  querySelector(selector) {
    return document.querySelector(selector);
  },

  querySelectorAll(selector) {
    return document.querySelectorAll(selector);
  },

  getLocalStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn(`LocalStorage access failed for key "${key}":`, error);
      return null;
    }
  },

  setLocalStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn(`LocalStorage set failed for key "${key}":`, error);
    }
  },

  formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  }
};
