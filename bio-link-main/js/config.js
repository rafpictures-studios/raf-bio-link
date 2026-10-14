// ============================================
// CONFIGURATION & CONSTANTS
// ============================================
const CONFIG = {
  ANIMATION_DURATION: 300,
  YOUTUBE_EMBED: 'https://www.youtube.com/embed/',
  YOUTUBE_PARAMS: '?autoplay=1&rel=0&showinfo=0&modestbranding=1',
  WHATSAPP_PHONE: '6289513170863',
  STORE_URL: 'https://academy.devatastudio.com/blender3d/procedural-environment/',
  DISCOUNT_CODE: 'DEVATA',
  
  // Language translations
  TRANSLATIONS: {
    en: {
      // Profile
      profile_subtitle: '3D Render & Animation',
      
      // Section titles
      section_addon: 'Addon',
      section_course: 'Course',
      section_services: 'Services',
      section_works: 'Showcase',
      section_portfolio: 'Creative Portfolio',
      section_assets: 'Assets',
      
      // Switch labels
      switch_links: 'Links',
      switch_assets: 'Assets',
      
      // Card descriptions
      addon_release: 'New Release v1.2.2 (FREE)',
      course_platform: 'Devata Academy',
      commission_title: 'Open Commission/Work',
      renderfarm_title: 'Renderfarm Services',
      portfolio_title: 'Portfolio Web',
      
      // Modal titles
      modal_subscribe_title: 'Subscribe to rafpictures',
      modal_subscribe_desc: 'Stay up to date with everything important.',
      modal_subscribe_btn: 'Subscribe',
      modal_commission_title: 'Open Commission',
      modal_commission_desc: 'Send me a message for work inquiries.',
      modal_commission_btn: 'Send',
      modal_course_title: 'Procedural Environment Course Discount',
      modal_course_desc: 'Copy the code and visit the store to claim your discount',
      modal_store_btn: 'Go to store',
      modal_asset_title: 'Blender Asset Management Addon',
      modal_asset_desc: 'Organize and manage your 3D assets efficiently in Blender.',
      modal_download_btn: 'Free Download',
      modal_doc_btn: 'Documentation',
      
      // Form labels
      form_name: 'Name',
      form_email: 'Email',
      form_phone: 'Phone',
      form_message: 'Describe your project here...',
      
      // Video modal
      video_watch_full: 'Watch Full Video',
      
      // Greeting modal
      greeting_thanks: 'Thank You!',
      greeting_subscribe: 'Thank you for subscribing!',
      greeting_commission: 'Your message has been sent successfully!',
      greeting_close: 'Close',
      
      // Footer
      footer_rights: 'All rights reserved.',
      
      // Card titles and descriptions
      card_addon_title: 'Blender Asset Management Addon',
      card_addon_desc: 'New Release v1.2.2 (FREE)',
      card_course_title: 'Procedural Environment Course',
      card_course_desc: 'Devata Academy',
      card_commission_title: 'Open Commission/Work',
      card_renderfarm_title: 'Renderfarm Services',
      card_portfolio_title: 'Portfolio Web',
      card_jumbo_trailer: 'OFFICIAL TRAILER 1 JUMBO',
      card_jumbo_teaser: 'OFFICIAL TEASER TRAILER JUMBO',
      card_nussa_mooi: 'EPISODE SPESIAL NUSSA x MOOI',
      card_nussa_movie: 'NUSSA SHORT MOVIE SPECIAL EDITION',
      card_baraju_ep6: 'EP06 - BoBoiBoy Galaxy Baraju',
      card_baraju_ep5: 'EP05 - BoBoiBoy Galaxy Baraju',
      card_youtube_desc: 'YouTube',
      portfolio_loading: 'Loading portfolio...',
      
      // Video preview modal titles and descriptions
      video_jumbo_trailer_title: 'JUMBO - Official Trailer 1',
      video_jumbo_trailer_desc: 'Watch the thrilling official trailer of JUMBO from Visinema Pictures. Experience the excitement and drama in stunning visuals.',
      video_jumbo_teaser_title: 'JUMBO - Official Teaser Trailer',
      video_jumbo_teaser_desc: 'Get a first glimpse of JUMBO with this exciting teaser trailer from Visinema Pictures.',
      video_nussa_mooi_title: 'EPISODE SPESIAL NUSSA x MOOI : RAYAKAN KEBAIKAN',
      video_nussa_mooi_desc: 'A heartwarming special collaboration between Nussa and Mooi that celebrates kindness, compassion, and the beauty of doing good deeds. Join them on an inspiring journey of spreading positivity and making the world a better place through simple acts of kindness.',
      video_nussa_title: 'NUSSA - Short Movie Special Edition',
      video_nussa_desc: 'Join Nussa and friends in this heartwarming special edition short movie filled with valuable life lessons.',
      video_baraju_ep6_title: 'EP06 - BoBoiBoy Galaxy Baraju | Baraju Bersatu',
      video_baraju_ep6_desc: 'Watch Episode 6 of BoBoiBoy Galaxy Baraju as Baraju unites! Witness the epic transformation and powerful teamwork in this thrilling episode.',
      video_baraju_ep5_title: 'EP05 - BoBoiBoy Galaxy Baraju | Musuh Dalam Selimut',
      video_baraju_ep5_desc: 'Experience Episode 5 of BoBoiBoy Galaxy Baraju - Musuh Dalam Selimut! Discover hidden threats and unexpected betrayals in this intense episode.',
      card_asset_pack_title: 'Asset Course Pack',
      card_asset_pack_desc: 'Free Gobos Sequence, Trees & Plants assets (366MB)',
      card_lineart_title: 'LineArt Assets Pack',
      card_lineart_desc: 'Free Dot-Highlight & Shadow-Line (100KB)',
      card_kitbash_title: 'Kitbash Cyberpunk Jakarta City',
      card_kitbash_desc: 'Free 8 Cyberpunk Cityscapes Asset Jakarta Series (229MB)',
      
      // Renderfarm page
      render_title: 'Render Price Calculator',
      render_subtitle: 'Calculate your rendering costs',
      render_engine: 'Render Engine',
      render_resolution: 'Resolution',
      render_custom: 'Custom Resolution',
      render_width: 'Width (px)',
      render_height: 'Height (px)',
      render_frames: 'Total Frames',
      render_frame_warning: 'Frame count must be at least 1',
      render_calculate: 'Calculate Price',
      render_result_title: 'Calculation Result',
      render_total_price: 'Total Price',
      render_total_time: 'Estimated Time',
      render_order: 'Order via WhatsApp',
      render_loading: 'Calculating...',
      render_note_title: 'Important Notes',
      render_note_1: 'Recommended file size is under 2GB for optimal render time.',
      render_note_2: 'Files over 2GB may require slightly longer rendering times.',
      render_note_3: 'Available render formats: MP4, PNG, EXR.',
      
      // WhatsApp order template
      whatsapp_greeting: 'Hello, I would like to order a 3D render project:',
      whatsapp_engine: 'Render Engine',
      whatsapp_blender: 'Blender Version',
      whatsapp_resolution: 'Resolution',
      whatsapp_frames: 'Frame Count',
      whatsapp_custom: 'Custom'
    },
    id: {
      // Profile
      profile_subtitle: 'Render 3D & Animasi',
      
      // Section titles
      section_addon: 'Addon',
      section_course: 'Kursus',
      section_services: 'Layanan',
      section_works: 'Showcase',
      section_portfolio: 'Portfolio Kreatif',
      section_assets: 'Aset',
      
      // Switch labels
      switch_links: 'Tautan',
      switch_assets: 'Aset',
      
      // Card descriptions
      addon_release: 'Rilis Baru v1.2.2 (GRATIS)',
      course_platform: 'Akademi Devata',
      commission_title: 'Buka Komisi/Proyek',
      renderfarm_title: 'Layanan Renderfarm',
      portfolio_title: 'Web Portfolio',
      
      // Modal titles
      modal_subscribe_title: 'Berlangganan rafpictures',
      modal_subscribe_desc: 'Tetap update dengan semua yang penting.',
      modal_subscribe_btn: 'Berlangganan',
      modal_commission_title: 'Buka Komisi',
      modal_commission_desc: 'Kirim saya pesan untuk pertanyaan pekerjaan.',
      modal_commission_btn: 'Kirim',
      modal_course_title: 'Diskon Kursus Procedural Environment',
      modal_course_desc: 'Salin kode dan kunjungi toko untuk klaim diskon Anda',
      modal_store_btn: 'Ke toko',
      modal_asset_title: 'Addon Manajemen Aset Blender',
      modal_asset_desc: 'Atur dan kelola aset 3D Anda secara efisien di Blender.',
      modal_download_btn: 'Unduh Gratis',
      modal_doc_btn: 'Dokumentasi',
      
      // Form labels
      form_name: 'Nama',
      form_email: 'Email',
      form_phone: 'Telepon',
      form_message: 'Deskripsikan proyek Anda di sini...',
      
      // Video modal
      video_watch_full: 'Tonton Video Lengkap',
      
      // Greeting modal
      greeting_thanks: 'Terima Kasih!',
      greeting_subscribe: 'Terima kasih telah berlangganan!',
      greeting_commission: 'Pesan Anda telah terkirim dengan sukses!',
      greeting_close: 'Tutup',
      
      // Footer
      footer_rights: 'Hak cipta dilindungi.',
      
      // Card titles and descriptions
      card_addon_title: 'Addon Manajemen Aset Blender',
      card_addon_desc: 'Rilis Baru v1.2.2 (GRATIS)',
      card_course_title: 'Kursus Procedural Environment',
      card_course_desc: 'Akademi Devata',
      card_commission_title: 'Buka Komisi/Proyek',
      card_renderfarm_title: 'Layanan Renderfarm',
      card_portfolio_title: 'Web Portfolio',
      portfolio_loading: 'Memuat portofolio...',
      card_jumbo_trailer: 'TRAILER RESMI 1 JUMBO',
      card_jumbo_teaser: 'TEASER TRAILER RESMI JUMBO',
      card_nussa_movie: 'FILM PENDEK NUSSA EDISI SPESIAL',
      card_baraju_ep6: 'EP06 - BoBoiBoy Galaxy Baraju',
      card_baraju_ep5: 'EP05 - BoBoiBoy Galaxy Baraju',
      card_youtube_desc: 'YouTube',
      
      // Video preview modal titles and descriptions
      video_jumbo_trailer_title: 'JUMBO - Trailer Resmi 1',
      video_jumbo_trailer_desc: 'Saksikan trailer resmi yang mendebarkan dari film JUMBO karya Visinema Pictures. Rasakan keseruan dan drama dalam visual yang memukau.',
      video_jumbo_teaser_title: 'JUMBO - Teaser Trailer Resmi',
      video_jumbo_teaser_desc: 'Dapatkan gambaran pertama film JUMBO dengan teaser trailer yang menarik dari Visinema Pictures.',      video_nussa_mooi_title: 'EPISODE SPESIAL NUSSA x MOOI : RAYAKAN KEBAIKAN',
      video_nussa_mooi_desc: 'Kolaborasi spesial yang menghangatkan hati antara Nussa dan Mooi yang merayakan kebaikan, kasih sayang, dan keindahan berbuat baik. Ikuti perjalanan inspiratif mereka dalam menyebarkan energi positif dan menjadikan dunia tempat yang lebih baik melalui aksi kebaikan sederhana.',      video_nussa_title: 'NUSSA - Film Pendek Edisi Spesial',
      video_nussa_desc: 'Bergabunglah dengan Nussa dan teman-teman dalam film pendek edisi spesial yang menghangatkan hati penuh dengan pelajaran hidup yang berharga.',
      video_baraju_ep6_title: 'EP06 - BoBoiBoy Galaxy Baraju | Baraju Bersatu',
      video_baraju_ep6_desc: 'Saksikan Episode 6 BoBoiBoy Galaxy Baraju saat Baraju bersatu! Saksikan transformasi epik dan kerja sama tim yang kuat dalam episode yang mendebarkan ini.',
      video_baraju_ep5_title: 'EP05 - BoBoiBoy Galaxy Baraju | Musuh Dalam Selimut',
      video_baraju_ep5_desc: 'Rasakan Episode 5 BoBoiBoy Galaxy Baraju - Musuh Dalam Selimut! Temukan ancaman tersembunyi dan pengkhianatan tak terduga dalam episode yang intens ini.',
      card_asset_pack_title: 'Paket Aset Kursus',
      card_asset_pack_desc: 'Gratis Gobos Sequence, Pohon & Tanaman (366MB)',
      card_lineart_title: 'Paket Aset LineArt',
      card_lineart_desc: 'Gratis Dot-Highlight & Shadow-Line (100KB)',
      card_kitbash_title: 'Kitbash Cyberpunk Jakarta City',
      card_kitbash_desc: 'Gratis 8 Aset Cityscapes Cyberpunk Jakarta (229MB)',
      
      // Renderfarm page
      render_title: 'Kalkulator Harga Render',
      render_subtitle: 'Hitung biaya rendering Anda',
      render_engine: 'Mesin Render',
      render_resolution: 'Resolusi',
      render_custom: 'Resolusi Kustom',
      render_width: 'Lebar (px)',
      render_height: 'Tinggi (px)',
      render_frames: 'Total Frame',
      render_frame_warning: 'Jumlah frame minimal 1',
      render_calculate: 'Hitung Harga',
      render_result_title: 'Hasil Perhitungan',
      render_total_price: 'Total Harga',
      render_total_time: 'Estimasi Waktu',
      render_order: 'Pesan via WhatsApp',
      render_loading: 'Menghitung...',
      render_note_title: 'Catatan Penting',
      render_note_1: 'Ukuran file yang direkomendasikan di bawah 2GB untuk waktu render optimal.',
      render_note_2: 'File lebih dari 2GB mungkin memerlukan waktu rendering sedikit lebih lama.',
      render_note_3: 'Format render yang tersedia: MP4, PNG, EXR.',
      
      // WhatsApp order template
      whatsapp_greeting: 'Halo, saya ingin memesan proyek render 3D:',
      whatsapp_engine: 'Mesin Render',
      whatsapp_blender: 'Versi Blender',
      whatsapp_resolution: 'Resolusi',
      whatsapp_frames: 'Jumlah Frame',
      whatsapp_custom: 'Kustom'
    }
  },
  
  // Function to get video data based on current language
  getVideoData(videoId, lang = 'en') {
    const t = this.TRANSLATIONS[lang];
    const videos = {
      '6sbUuHw0Y-4': {
        gif: 'assets/images/previews/jumbo-trailer.webp',
        title: t.video_jumbo_trailer_title,
        description: t.video_jumbo_trailer_desc
      },
      '7a1wSjZyi5I': {
        gif: 'assets/images/previews/nussa-mooi.webp',
        title: t.video_nussa_mooi_title,
        description: t.video_nussa_mooi_desc
      },
      'YW3sQ16oksY': {
        gif: 'assets/images/previews/jumbo-teaser.webp',
        title: t.video_jumbo_teaser_title,
        description: t.video_jumbo_teaser_desc
      },
      'PfIuJwcl60E': {
        gif: 'assets/images/previews/nussa-movie.webp',
        title: t.video_nussa_title,
        description: t.video_nussa_desc
      },
      'wuZnM5o-zMM': {
        gif: 'assets/images/previews/baraju-ep6.webp',
        title: t.video_baraju_ep6_title,
        description: t.video_baraju_ep6_desc
      },
      'OTQDuKtemzc': {
        gif: 'assets/images/previews/baraju-ep5.webp',
        title: t.video_baraju_ep5_title,
        description: t.video_baraju_ep5_desc
      }
    };
    return videos[videoId];
  }
};

const FRAME_PRICES = {
  'Cycles': {
    'HD (1280x720)': 380,
    'Full HD (1920x1080)': 480, 
    '2K (2048x1080)': 580, 
    '4K (3840x2160)': 680  
  },
  'Eevee': {
    'HD (1280x720)': 300,
    'Full HD (1920x1080)': 400, 
    '2K (2048x1080)': 500, 
    '4K (3840x2160)': 600  
  }
};
