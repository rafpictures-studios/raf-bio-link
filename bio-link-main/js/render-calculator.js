// ============================================
// RENDER CALCULATOR MANAGER
// ============================================
const RenderCalculator = {

  calculate() {
    const frameCountInput = Utils.getElement('frameCount');
    const resultDiv = Utils.getElement('result');
    const loadingDiv = Utils.getElement('loading');
    const resolution = Utils.getElement('resolution')?.value || '';

    if (!frameCountInput || !resultDiv || !loadingDiv) return;

    // Validate frame count
    const frameCount = parseInt(frameCountInput.value, 10);
    const frameWarningDiv = Utils.getElement('frameCountWarning');
    
    if (!frameCount || frameCount <= 0) {
      frameWarningDiv?.classList.remove('hidden');
      return;
    } else {
      frameWarningDiv?.classList.add('hidden');
    }

    // Validate custom resolution if selected
    if (resolution === 'custom') {
      const customWidth = Utils.getElement('customWidth');
      const customHeight = Utils.getElement('customHeight');
      const warningDiv = Utils.getElement('customResolutionWarning');
      
      if (!customWidth?.value || !customHeight?.value) {
        warningDiv?.classList.remove('hidden');
        return;
      } else {
        warningDiv?.classList.add('hidden');
      }
    }

    resultDiv.classList.add('hidden');
    loadingDiv.classList.remove('hidden');

    setTimeout(() => {
      // Use validated frameCount from above
      const renderEngine = Utils.getElement('renderEngine')?.value || '';
      const totalPriceEl = Utils.getElement('totalPrice');
      const totalTimeEl = Utils.getElement('totalTime');

      let pricePerFrame = FRAME_PRICES[renderEngine]?.[resolution] || 0;
      
      // Handle custom resolution pricing based on pixel count
      if (resolution === 'custom') {
        const customWidth = parseInt(Utils.getElement('customWidth')?.value || 1920, 10);
        const customHeight = parseInt(Utils.getElement('customHeight')?.value || 1080, 10);
        const customPixels = customWidth * customHeight;

        // Reference resolutions with pixel counts
        const resolutions = {
          'HD (1280x720)': 1280 * 720,           
          'Full HD (1920x1080)': 1920 * 1080,     
          '2K (2048x1080)': 2048 * 1080,          
          '4K (3840x2160)': 3840 * 2160          
        };

        // Find closest reference resolution for pricing
        let closestKey = 'Full HD (1920x1080)';
        let minDifference = Math.abs(customPixels - resolutions['Full HD (1920x1080)']);

        for (const [key, pixels] of Object.entries(resolutions)) {
          const difference = Math.abs(customPixels - pixels);
          if (difference < minDifference) {
            minDifference = difference;
            closestKey = key;
          }
        }

        // Use pricing dari reference resolution terdekat
        pricePerFrame = FRAME_PRICES[renderEngine]?.[closestKey] || 0;
      }
      
      const totalPrice = pricePerFrame * frameCount;

      // Estimate rendering time (15s/frame for Cycles, 3s/frame for Eevee, scaled by resolution)
      let secondsPerFrame = renderEngine === 'Cycles' ? 15 : 3;
      if (resolution === '2K (2048x1080)') secondsPerFrame *= 1.3;
      else if (resolution === '4K (3840x2160)') secondsPerFrame *= 2.5;

      const totalSeconds = Math.round(secondsPerFrame * frameCount);
      let timeText = '';
      if (totalSeconds < 60) {
        timeText = `${totalSeconds}s`;
      } else if (totalSeconds < 3600) {
        timeText = `${Math.round(totalSeconds / 60)}m`;
      } else {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.round((totalSeconds % 3600) / 60);
        timeText = minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
      }

      if (totalPriceEl) totalPriceEl.textContent = Utils.formatRupiah(totalPrice);
      if (totalTimeEl) {
        const lang = LanguageManager.currentLang;
        const prefix = lang === 'id' ? 'Estimasi waktu render: ±' : 'Estimated render time: ±';
        totalTimeEl.textContent = `${prefix}${timeText}`;
      }

      loadingDiv.classList.add('hidden');
      resultDiv.classList.remove('hidden');
    }, 1000);
  },


  orderViaWhatsapp() {
    const renderEngine = Utils.getElement('renderEngine')?.value || '';
    const blenderVersion = Utils.getElement('blenderVersion')?.value || '';
    let resolution = Utils.getElement('resolution')?.value || '';
    const frameCount = Utils.getElement('frameCount')?.value || '';

    // Get current language
    const lang = LanguageManager.currentLang;
    const t = CONFIG.TRANSLATIONS[lang];

    // If custom resolution is selected, add custom dimensions
    if (resolution === 'custom') {
      const customWidth = Utils.getElement('customWidth')?.value || '';
      const customHeight = Utils.getElement('customHeight')?.value || '';
      resolution = `${t.whatsapp_custom} (${customWidth}x${customHeight})`;
    }

    const message = encodeURIComponent(
      `${t.whatsapp_greeting}\n\n*${t.whatsapp_engine}:* ${renderEngine}\n*${t.whatsapp_blender}:* ${blenderVersion}\n*${t.whatsapp_resolution}:* ${resolution}\n*${t.whatsapp_frames}:* ${frameCount}`
    );

    const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_PHONE}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  },

  updateFrameCountDisplay() {
    const slider = Utils.getElement('frameCount');
    const display = Utils.getElement('frameCountValue');

    if (slider && display) {
      slider.addEventListener('input', (e) => {
        display.textContent = e.target.value;
      });
    }
  }
};

// ============================================
// GLOBAL API (for inline handlers in HTML)
// ============================================
window.calculatePrice = () => RenderCalculator.calculate();
window.orderViaWhatsapp = () => RenderCalculator.orderViaWhatsapp();

// Custom Resolution Functions
window.toggleCustomResolution = () => {
  const resolutionSelect = document.getElementById('resolution');
  const customResolutionForm = document.getElementById('customResolutionForm');
  
  if (resolutionSelect.value === 'custom') {
    customResolutionForm.classList.remove('hidden');
  } else {
    customResolutionForm.classList.add('hidden');
  }
};
