document.querySelector("#nav-btn").addEventListener("click", function () {
  document.querySelector("html").classList.toggle("show-menu");
});

document.querySelector(".header-links-left").innerHTML = `
  <a href="index" class="nav-link nav1"></a>
  <a href="ytube-converter" class="nav-link nav2"></a>
  <a href="ytube-to-mp3" class="nav-link nav3"></a>
`;

document.querySelector(".languageSwitcher").innerHTML = `
<select class="language-select languageSelect">
  <option value="en">English</option>
  <option value="de">Deutsch</option>
  <option value="es">Español</option>
  <option value="hi">Hindi</option>
  <option value="fr">Français</option>
  <option value="in">Indonesian</option>
  <option value="ja">日本語</option>
  <option value="ko">한국어</option>
  <option value="ma">Malay</option>
  <option value="fi">Filipino</option>
  <option value="po">Português</option>
  <option value="ru">Русский</option>
  <option value="th">ไทย</option>
  <option value="tur">Türkçe</option>
  <option value="ar">العربية</option>
  <option value="vi">Tiếng Việt</option>
</select>
`;
let downloadHeading = `
<h1 class="downloadHead">
                    <span class="down-span download-span">Download</span>
                    <span class="down-head">High-Quality video From YouTube</span>
                </h1>
`;
let converterHeading = `
  <h1 class="converter-download">
                    <span class="down-span  yConverter ">Youtube Converter-</span>
                    <span class="converterHead">YouTube to MP3, MP4, AVI, FLV, ...
                    </span>
                </h1>
`;
let MP3Heading = `
  <h1 class="converter-download">
                    <span class="down-mp3">YouTube to</span>
                    <span class="down-span  mpHead">MP3 Converter
                    </span>
                </h1>
`;
let termsTemplate = `
 <p class="text term-text">By using our service You are accepting our
                        <span class="terms-span"> <a href="service.html" class="pointer">Terms of Use</a></span>
                    </p>
`;
let CommonContent = `
<div class=" youtube">
  <h1 class="youtubeText">Youtube Video <span class="ytube-down">Downloader</span> </h1>
  <p class="text description">common-detail</p>
  <div class="m-[48px] line">
  </div>
</div>
<div class="pt-[48px] pb-[48px] flex gap-[16px] flex-wrap justify-center items-center">
  <div class="instruction-card flex flex-col items-center gap-[16px] max-w-[320px]">
    <img src="./assets/images/instruction.svg" alt="">
      <h1 class="instruction-head">Instructions</h1>
      <p class="instruction-text">Instructions-detail</p>
    </div>
    <div class="vertical-line screen1024:!hidden"></div>
    <div class="instruction-card flex flex-col items-center gap-[16px]  max-w-[320px]">
      <img src="./assets/images/ytube-2d.svg" alt="">
      <h1 class="why-head">Why ytube2d.com</h1>
      <p class="why-text">Why-detail</p>
      </div>
      <div class="vertical-line screen1024:!hidden"></div>
      <div class=" instruction-card flex flex-col items-center gap-[16px]  max-w-[320px]">
        <img src="./assets/images/features.svg" alt="">
        <h1 class="features-head">Features</h1>
        <p class="features-text">Features-detail</p>
      </div>
    </div>
    <div class="pt-[49px] pb-[32px] p-[16px] flex  gap-[24px] justify-center items-center flex-wrap ">
      <div class="instruction-card flex flex-col items-center gap-[16px]  max-w-[299px]">
      <img src="./assets/images/free-download.svg" alt="">
      <h1 class="free-head">Free Download</h1>
      <p class="free-text">Unlimited conversion and free download.</p>
    </div>
    <div class="vertical-line screen991:!hidden"></div>
    <div class="instruction-card flex flex-col items-center gap-[16px] max-w-[299px]">
      <img src="./assets/images/video-n-audio.svg" alt="">
        <h1 class="video-head">Video & Audio</h1>
        <p class="video-text">Directly Download Video & Music.</p>
    </div>
    <div class="vertical-line screen991:!hidden "></div>
    <div class="instruction-card flex flex-col items-center gap-[16px] max-w-[299px]">
      <img src="./assets/images/easy-download.svg" alt="">
        <h1 class="easy-head">Easy Download</h1>
        <p class="easy-text">Fully compatible with all browsers.</p>
    </div>
    </div>
`;
const footerContentTemplate = `
  <div class="container mx-auto">
    <div class="flex flex-col gap-[32px] ">
      <a href="index.html" class="footer-img flex items-start screen575:!justify-center">
        <img src="assets/images/footer-logo.svg" alt="">
      </a>
      <div class="flex justify-center gap-[70px] screen575:!flex-wrap screen575:!items-center screen575:!gap-[16px]">
        <div class="flex flex-col gap-[16px] screen575:!w-full screen575:!items-center">
          <a href="index.html" class="footer-downloader">__FOOTER_DOWNLOAD__</a>
          <a href="ytube-converter.html" class="footer-converter">__FOOTER_CONVERTER__</a>
          <a href="ytube-to-mp3.html" class="footer-mp">__FOOTER_MP__</a>
        </div>
        <div class="flex flex-col gap-[16px] pl-[50px] screen575:!w-full screen575:!items-center screen767:!pl-[0px]">
          <a href="About.html" class="footer-about">__FOOTER_ABOUT__</a>
          <a href="FAQ.html" class="footer-faq">__FOOTER_FAQ__</a>
          <a href="contact.html" class="footer-contact">__FOOTER_CONTACT__</a>
          <a href="service.html" class="footer-service">__FOOTER_SERVICE__</a>
          <a href="privacy.html" class="footer-privacy">__FOOTER_PRIVACY__</a>
        </div>  
      </div>
      <div class="horizontal-line"></div>
    </div>
    <div class="pt-[20px] pb-[20px] flex gap-[4px] justify-center">
      <span class="footer-com">Design and Develop By </span>
      <span>
        <a href="https://www.delemontstudio.com/" class="footer-com underline" target="_blank">Delemont Studio</a>
      </span>
    </div>
  </div>
`;

let translations = {
  de: {
    nav1: "YouTube Downloader",
    nav2: "Youtube Umwandler",
    nav3: "YouTube zu mp3",
    downSpan: "herunterladen",
    headline: "Hochwertige Videos Von YouTube",
    inputPlaceholder: "Videolink hier einfügen...",
    downloadBtn: "Start",
    termsText: "Durch die Nutzung unseres Dienstes akzeptieren Sie unsere",
    termsSpan: "Nutzungsbedingungen",
    youtubeText: "Youtube-Video ",
    youtubeSpan: "Downloader",
    descriptions:
      "Mit ytube2d können Sie Videos von YouTube, Facebook, Video, Dailymotion, Youku usw. in MP3, MP4 konvertieren und herunterladen HD-Qualität. ytube2d unterstützt das Herunterladen aller Videoformate wie MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM usw. Sie können ganz einfach und kostenlos Tausende von Videos von YouTube und anderen Websites herunterladen.",
    instructionHead: "Anweisungen",
    instructionText:
      "Suchen Sie nach Namen oder fügen Sie direkt den Link des Videos ein, das Sie konvertieren möchten. Klicken Sie auf die Schaltfläche „Start“, um den Konvertierungsvorgang zu starten. Wählen Sie das Video-/Audioformat aus, das Sie herunterladen möchten, und klicken Sie dann auf die Schaltfläche „Herunterladen“.",
    whyHead: "Warum ytube2d.com",
    whyText: `Suchen Sie nach Namen oder fügen Sie direkt den Link des Videos ein, das Sie konvertieren möchten. Klicken Sie auf die Schaltfläche „Start“, um den Konvertierungsvorgang zu starten. Wählen Sie das Video-/Audioformat aus, das Sie herunterladen möchten, und klicken Sie dann auf die Schaltfläche „Herunterladen“.`,
    featuresHead: "Merkmale",
    featuresText: `Unbegrenzte Downloads und immer kostenloser Hochgeschwindigkeits-Videokonverter
Keine Registrierung erforderlich. Unterstützt das Herunterladen aller Formate. Unbegrenzte Downloads und immer kostenloser Hochgeschwindigkeits-Videokonverter`,
    freeHead: "Kostenfreier Download",
    freeText: "Unbegrenzte Konvertierung und kostenloser Download.",
    videoHead: "Video und Audio",
    videoText: "Video und Audio. Laden Sie Videos und Musik direkt herunter.",
    easyHead: "Einfacher Download",
    easyText: "Vollständig kompatibel mit allen Browsern.",
    footerDownload: "YouTube Downloader",
    footerConverter: "Youtube Umwandler",
    footerMp: "YouTube zu mp3",
    footerAbout: "Um",
    footerFaq: "FAQ",
    footerContact: "Kontakt",
    footerService: "Nutzungsbedingungen",
    footerPrivacy: "Datenschutzrichtlinie",
    yconverterHead: "Youtube Umwandler -",
    yconverterDetail: "YouTube zu MP3, MP4, AVI, FLV, ...",
    MpText: "Youtube zu",
    MpHead: "MP3 Konverter",
    termsparam: "Durch die Nutzung unseres Dienstes akzeptieren Sie unsere",
  },
  es: {
    nav1: "descargador de youtube",
    nav2: "Convertidor de youtube",
    nav3: "Youtube a mp3",
    downSpan: "descargar",
    headline: "Vídeos de alta calidad de YouTube",
    inputPlaceholder: "Pega el enlace del vídeo aquí...",
    downloadBtn: "Comenzar",
    termsText: "Al usar nuestro servicio, aceptas nuestros",
    termsSpan: "Términos de Uso",
    youtubeText: "Video de Youtube ",
    youtubeSpan: "Descargador",
    descriptions:
      "ytube2d le permite convertir y descargar videos de YouTube, Facebook, Video, Dailymotion, Youku, etc. a Mp3, Mp4 en Calidad HD. ytube2d admite la descarga de todos los formatos de video como: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. Puede descargar fácilmente y de forma gratuita miles de vídeos de YouTube y otros sitios web.",
    instructionHead: "Instrucciones",
    instructionText:
      "Busque por nombre o pegue directamente el enlace del video que desea convertir. Haga clic en el botón 'Iniciar' para comenzar el proceso de conversión. Seleccione el formato de video/audio que desea descargar, luego haga clic en el botón 'Descargar'",
    whyHead: "Por qué ytube2d.com",
    whyText: `Busque por nombre o pegue directamente el enlace del video que desea convertir. Haga clic en el botón "Inicio" para comenzar el proceso de conversión. Seleccione el formato de video/audio que desea descargar, luego haga clic en el botón "Descargar".`,
    featuresHead: "Características",
    featuresText: `Descargas ilimitadas y conversor de vídeo de alta velocidad siempre gratuito
No es necesario registrarse Admite descargas con todos los formatos Descargas ilimitadas y siempre gratis Conversor de video de alta velocidad`,
    freeHead: "Descarga gratis",
    freeText: "Conversión ilimitada y descarga gratuita.",
    videoHead: "Audio video",
    videoText: "Vídeo y audioDescarga directa de vídeo y música.",
    easyHead: "Descarga fácil",
    easyText: "Totalmente compatible con todos los navegadores.",
    footerDownload: "descargador de youtube",
    footerConverter: "Convertidor de youtube",
    footerMp: "Youtube a mp3",
    footerAbout: "Acerca de",
    footerFaq: "Preguntas más frecuentes",
    footerContact: "Contacto",
    footerService: "Términos de servicio",
    footerPrivacy: "política de privacidad",
    yconverterHead: "Convertidora de youtube -",
    yconverterDetail: "YouTube a MP3, MP4, AVI, FLV, ...",
    MpText: "youtube a",
    MpHead: "Convertidor MP3",
    termsparam: "Al utilizar nuestro servicio usted acepta nuestra",
  },
  en: {
    nav1: "Youtube Downloader",
    nav2: "Youtube Converter",
    nav3: "Youtube to MP3",
    downSpan: "Download",
    headline: "High-Quality videos From YouTube",
    inputPlaceholder: "Paste video link here...",
    downloadBtn: "Start",
    termsText: "By using our service you are accepting our",
    termsSpan: "Terms of Use",
    youtubeText: "Youtube Video ",
    youtubeSpan: "Downloader",
    descriptions:
      "ytube2d allows you to convert & download video from YouTube, Facebook, Video, Dailymotion, Youku, etc. to Mp3, Mp4 in HD quality. ytube2d supports downloading all video formats such as: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can easily download for free thousands of videos from YouTube and other websites.",
    instructionHead: "Instructions",
    instructionText:
      "Search by name or directly paste the link of video you want to convertClick 'Start' button to begin converting process Select the video/audio format you want to download, then click 'Download' button",
    whyHead: "Why ytube2d.com",
    whyText: `Search by name or directly paste the link of video you want to convert Click "Start" button to begin converting process Select the video/audio format you want to download, then click "Download" button`,
    featuresHead: "Features",
    featuresText: `Unlimited downloads and always free High-speed video converter
No registration required Support downloading with all formats Unlimited downloads and always free High-speed video converter`,
    freeHead: "Free Download",
    freeText: "Unlimited conversion and free download.",
    videoHead: "Video & Audio",
    videoText: "Directly Download Video & Music.",
    easyHead: "Easy Download",
    easyText: "Fully compatible with all browsers.",
    footerDownload: "Youtube Downloader",
    footerConverter: "Youtube Converter",
    footerMp: "Youtube to MP3",
    footerAbout: "About",
    footerFaq: "FAQ",
    footerContact: "Contact",
    footerService: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    yconverterHead: "Youtube Converter-",
    yconverterDetail: "YouTube to MP3, MP4, AVI, FLV, ...",
    MpText: "Youtube to",
    MpHead: "MP3 Converter",
    termsparam: "By using our service You are accepting our",
  },
  hi: {
    nav1: "यूट्यूब डाउनलोडर",
    nav2: "यूट्यूब परिवर्तक",
    nav3: "एमपी 3 के लिए यूट्यूब",
    downSpan: "डाउनलोड करना",
    headline: "यूट्यूब से उच्च गुणवत्ता वाले वीडियो",
    inputPlaceholder: "वीडियो लिंक यहां पेस्ट करें...",
    downloadBtn: "शुरू",
    termsText: "हमारी सेवा का उपयोग करके आप हमारी सेवा स्वीकार कर रहे हैं",
    termsSpan: "उपयोग की शर्तें",
    youtubeText: "यूट्यूब वीडियो ",
    youtubeSpan: "डाउनलोडर",
    descriptions:
      "ytube2d आपको यूट्यूब, फेसबुक, वीडियो, डेलीमोशन, यूकू आदि से वीडियो को एमपी3, एमपी4 में बदलने और डाउनलोड करने की सुविधा देता है। एचडी गुणवत्ता। ytube2d सभी वीडियो प्रारूपों को डाउनलोड करने का समर्थन करता है जैसे: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, आदि। आप यूट्यूब और अन्य वेबसाइटों से हजारों वीडियो आसानी से मुफ्त में डाउनलोड कर सकते हैं।",
    instructionHead: "निर्देश",
    instructionText:
      "नाम से खोजें या सीधे उस वीडियो का लिंक पेस्ट करें जिसे आप कनवर्ट करना चाहते हैं। कनवर्ट करने की प्रक्रिया शुरू करने के लिए 'प्रारंभ' बटन पर क्लिक करें। उस वीडियो/ऑडियो प्रारूप का चयन करें जिसे आप डाउनलोड करना चाहते हैं, फिर 'डाउनलोड' बटन पर क्लिक करें।",
    whyHead: "ytube2d.com क्यों",
    whyText: `नाम से खोजें या सीधे उस वीडियो का लिंक पेस्ट करें जिसे आप कनवर्ट करना चाहते हैं कनवर्ट करने की प्रक्रिया शुरू करने के लिए "प्रारंभ" बटन पर क्लिक करें उस वीडियो/ऑडियो प्रारूप का चयन करें जिसे आप डाउनलोड करना चाहते हैं, फिर "डाउनलोड" बटन पर क्लिक करें।`,
    featuresHead: "विशेषताएँ",
    featuresText: `असीमित डाउनलोड और हमेशा निःशुल्क हाई-स्पीड वीडियो कनवर्टर
किसी पंजीकरण की आवश्यकता नहीं है, सभी प्रारूपों के साथ डाउनलोडिंग का समर्थन करें, असीमित डाउनलोड और हमेशा मुफ्त हाई-स्पीड वीडियो कनवर्टर`,
    freeHead: "मुफ्त डाउनलोड",
    freeText: "असीमित रूपांतरण और मुफ्त डाउनलोड.",
    videoHead: "वीडियो और ऑडियो",
    videoText: "वीडियो और ऑडियोसीधे वीडियो और संगीत डाउनलोड करें।",
    easyHead: "आसान डाउनलोड",
    easyText: "सभी ब्राउज़रों के साथ पूर्णतः संगत.",
    footerDownload: "यूट्यूब डाउनलोडर",
    footerConverter: "यूट्यूब परिवर्तक",
    footerMp: "एमपी 3 के लिए यूट्यूब",
    footerAbout: "के बारे में",
    footerFaq: "सामान्य प्रश्न",
    footerContact: "संपर्क",
    footerService: "सेवा की शर्तें",
    footerPrivacy: "गोपनीयता नीति",
    yconverterHead: "यूट्यूब परिवर्तक -",
    yconverterDetail: "यूट्यूब से MP3, MP4, AVI, FLV, ...",
    MpText: "यूट्यूब पर",
    MpHead: "एमपी 3 परिवर्तक",
    termsparam: "हमारी सेवा का उपयोग करके आप हमारी सेवा स्वीकार कर रहे हैं",
  },
  fr: {
    nav1: "Téléchargeur YouTube",
    nav2: "Convertisseur youtube",
    nav3: "Youtube en mp3",
    downSpan: "Télécharger",
    headline: "Vidéos de haute qualité de YouTube",
    inputPlaceholder: "Collez le lien vidéo ici...",
    downloadBtn: "Commencer",
    termsText: "En utilisant notre service, vous acceptez notre",
    termsSpan: "Conditions d'utilisation",
    youtubeText: "Vidéo Youtube ",
    youtubeSpan: "Téléchargeur",
    descriptions:
      "ytube2d vous permet de convertir et de télécharger des vidéos de YouTube, Facebook, Video, Dailymotion, Youku, etc. en Mp3, Mp4 en Qualité HD. ytube2d prend en charge le téléchargement de tous les formats vidéo tels que : MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc.",
    instructionHead: "Instructions",
    instructionText:
      "Recherchez par nom ou collez directement le lien de la vidéo que vous souhaitez convertir. Cliquez sur le bouton « Démarrer » pour commencer le processus de conversion. Sélectionnez le format vidéo/audio que vous souhaitez télécharger, puis cliquez sur le bouton « Télécharger ».",
    whyHead: "Pourquoi ytube2d.com",
    whyText: `Recherchez par nom ou collez directement le lien de la vidéo que vous souhaitez convertir. Cliquez sur le bouton « Démarrer » pour commencer le processus de conversion. Sélectionnez le format vidéo/audio que vous souhaitez télécharger, puis cliquez sur le bouton « Télécharger ».`,
    featuresHead: "Caractéristiques",
    featuresText: `Téléchargements illimités et convertisseur vidéo haute vitesse toujours gratuit
Aucune inscription requise Prise en charge du téléchargement avec tous les formats Téléchargements illimités et convertisseur vidéo haute vitesse toujours gratuit`,
    freeHead: "Téléchargement Gratuit",
    freeText: "Conversion illimitée et téléchargement gratuit.",
    videoHead: "Vidéo et audio",
    videoText:
      "Vidéo et audio Téléchargez directement des vidéos et de la musique.",
    easyHead: "Téléchargement facile",
    easyText: "Entièrement compatible avec tous les navigateurs.",
    footerDownload: "Téléchargeur Youtube",
    footerConverter: "Convertisseur youtube",
    footerMp: "Youtube en mp3",
    footerAbout: "À propos",
    footerFaq: "FAQ",
    footerContact: "Contact",
    footerService: "Conditions d'utilisation",
    footerPrivacy: "politique de confidentialité",
    yconverterHead: "Convertisseur youtube -",
    yconverterDetail: "YouTube en MP3, MP4, AVI, FLV, ...",
    MpText: "Youtube pour",
    MpHead: "Convertisseur mp3",
    termsparam: "En utilisant notre service, vous acceptez notre",
  },
  in: {
    nav1: "pengunduh Youtube",
    nav2: "Konverter Youtube",
    nav3: "Youtube ke mp3",
    downSpan: "Unduh",
    headline: "Video Berkualitas Tinggi Dari YouTube",
    inputPlaceholder: "Tempel tautan video di sini...",
    downloadBtn: "Awal",
    termsText: "Dengan menggunakan layanan kami, Anda menerima layanan kami",
    termsSpan: "Syarat Penggunaan",
    youtubeText: "Video Youtube",
    youtubeSpan: "Pengunduh",
    descriptions:
      "ytube2d memungkinkan Anda mengonversi & mengunduh video dari YouTube, Facebook, Video, Dailymotion, Youku, dll. ke Mp3, Mp4 di kualitas HD. ytube2d mendukung pengunduhan semua format video seperti: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, dll. Anda dapat dengan mudah mengunduh ribuan video gratis dari YouTube dan situs web lainnya.",
    instructionHead: "instruksi",
    instructionText:
      "Cari berdasarkan nama atau langsung paste link video yang ingin Anda konversiKlik tombol 'Start' untuk memulai proses konversi Pilih format video/audio yang ingin Anda download, lalu klik tombol 'Download'",
    whyHead: "Mengapa ytube2d.com",
    whyText: `Cari berdasarkan nama atau langsung paste link video yang ingin Anda konversi. Klik tombol "Start" untuk memulai proses konversi. Pilih format video/audio yang ingin Anda download, lalu klik tombol "Download"`,
    featuresHead: "Fitur",
    featuresText: `Unduhan tanpa batas dan selalu gratis Konverter video berkecepatan tinggi
Tidak perlu registrasi Mendukung pengunduhan dengan semua format Unduhan tanpa batas dan selalu gratis Konverter video berkecepatan tinggi`,
    freeHead: "Download Gratis",
    freeText: "Konversi tanpa batas dan unduhan gratis.",
    videoHead: "Video & Audio",
    videoText: "Video & AudioLangsung Unduh Video & Musik.",
    easyHead: "Unduhan Mudah",
    easyText: "Sepenuhnya kompatibel dengan semua browser.",
    footerDownload: "pengunduh Youtube",
    footerConverter: "Konverter Youtube",
    footerMp: "Youtube ke mp3",
    footerAbout: "Tentang",
    footerFaq: "Pertanyaan Umum",
    footerContact: "Kontak",
    footerService: "Ketentuan Layanan",
    footerPrivacy: "Kebijakan pribadi",
    yconverterHead: "Konverter Youtube -",
    yconverterDetail: "YouTube ke MP3, MP4, AVI, FLV, ...",
    MpText: "Youtube ke",
    MpHead: "Konverter MP3",
    termsparam: "Dengan menggunakan layanan kami, Anda menerima layanan kami",
  },
  ja: {
    nav1: "ユーチューブのダウンローダ",
    nav2: "ユーチューブコンバータ",
    nav3: "YoutubeからMP3へ",
    downSpan: "ダウンロード",
    headline: "ユーチューブからの高品質ビデオ",
    inputPlaceholder: "ここにビデオリンクを貼り付けます...",
    downloadBtn: "始める",
    termsText:
      "当社のサービスを使用することにより、当社のサービスに同意したことになります。",
    termsSpan: "利用規約",
    youtubeText: "ユーチューブビデオ ",
    youtubeSpan: "ダウンローダー",
    descriptions:
      "ytube2d を使用すると、YouTube、Facebook、Video、Dailymotion、Youku などからビデオを Mp3、Mp4 に変換してダウンロードできます。 HD品質。 ytube2d は、MP4、M4V、3GP、WMV、FLV、MO、MP3、WEBM などのすべてのビデオ形式のダウンロードをサポートします。 YouTube やその他の Web サイトから何千もの動画を無料で簡単にダウンロードできます。",
    instructionHead: "説明書",
    instructionText:
      "名前で検索するか、変換したいビデオのリンクを直接貼り付けます。「開始」ボタンをクリックして変換プロセスを開始します。ダウンロードするビデオ/オーディオ形式を選択し、「ダウンロード」ボタンをクリックします。",
    whyHead: "なぜ ytube2d.com なのか",
    whyText: `名前で検索するか、変換したいビデオのリンクを直接貼り付けます 「開始」ボタンをクリックして変換プロセスを開始します ダウンロードしたいビデオ/オーディオ形式を選択し、「ダウンロード」ボタンをクリックします`,
    featuresHead: "特徴",
    featuresText: `無制限のダウンロードと常に無料の高速ビデオコンバータ
登録は必要ありません すべての形式でのダウンロードをサポート 無制限のダウンロードと常に無料 高速ビデオコンバータ`,
    freeHead: "無料ダウンロード",
    freeText: "無制限の変換と無料ダウンロード。",
    videoHead: "ビデオとオーディオ",
    videoText: "ビデオとオーディオビデオと音楽を直接ダウンロードします。",
    easyHead: "簡単ダウンロード",
    easyText: "すべてのブラウザと完全に互換性があります。",
    footerDownload: "ユーチューブのダウンローダ",
    footerConverter: "ユーチューブコンバータ",
    footerMp: "ユーチューブからMP3へ",
    footerAbout: "について",
    footerFaq: "よくある質問",
    footerContact: "接触",
    footerService: "利用規約",
    footerPrivacy: "プライバシーポリシー",
    yconverterHead: "ユーチューブコンバータ -",
    yconverterDetail: "ユーチューブ を MP3、MP4、AVI、FLV などに変換",
    MpText: "Youtube toYoutubeから",
    MpHead: "MP3コンバータ",
    termsparam: "当社のサービスをご利用いただくことで、お客様は当社の",
  },
  ko: {
    nav1: "유튜브 다운로더",
    nav2: "유튜브 변환기",
    nav3: "유튜브에서 MP3로",
    downSpan: "다운로드",
    headline: "YouTube의 고품질 비디오",
    inputPlaceholder: "여기에 동영상 링크를 붙여넣으세요...",
    downloadBtn: "시작",
    termsText:
      "당사 서비스를 이용함으로써 귀하는 당사의 서비스에 동의하는 것입니다.",
    termsSpan: "이용약관",
    youtubeText: "유튜브 영상 ",
    youtubeSpan: "다운로더",
    descriptions:
      "ytube2d를 사용하면 YouTube, Facebook, Video, Dailymotion, Youku 등의 비디오를 Mp3, Mp4로 변환하고 다운로드할 수 있습니다. HD 품질. ytube2d는 MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM 등과 같은 모든 비디오 형식 다운로드를 지원합니다. YouTube 및 기타 웹사이트에서 수천 개의 비디오를 무료로 쉽게 다운로드할 수 있습니다.",
    instructionHead: "지침",
    instructionText:
      "이름으로 검색하거나 변환하려는 비디오 링크를 직접 붙여넣기 변환 프로세스를 시작하려면 '시작' 버튼을 클릭하세요. 다운로드하려는 비디오/오디오 형식을 선택한 다음 '다운로드' 버튼을 클릭하세요.",
    whyHead: "왜 ytube2d.com인가?",
    whyText: `이름으로 검색하거나 변환하려는 비디오 링크를 직접 붙여넣기 변환 프로세스를 시작하려면 "시작" 버튼을 클릭하십시오. 다운로드하려는 비디오/오디오 형식을 선택한 다음 "다운로드" 버튼을 클릭하십시오.`,
    featuresHead: "특징",
    featuresText: `무제한 다운로드 및 항상 무료 고속 비디오 변환기
등록이 필요하지 않습니다. 모든 형식의 다운로드 지원 무제한 다운로드 및 항상 무료 고속 비디오 변환기`,
    freeHead: "무료 다운로드",
    freeText: "무제한 변환 및 무료 다운로드.",
    videoHead: "비디오 및 오디오",
    videoText: "비디오 및 오디오비디오 및 음악을 직접 다운로드하세요.",
    easyHead: "쉬운 다운로드",
    easyText: "모든 브라우저와 완벽하게 호환됩니다.",
    footerDownload: "유튜브 다운로더",
    footerConverter: "유튜브 변환기",
    footerMp: "유튜브에서 MP3로",
    footerAbout: "에 대한",
    footerFaq: "자주하는 질문",
    footerContact: "연락하다",
    footerService: "서비스 약관",
    footerPrivacy: "개인 정보 정책",
    yconverterHead: "유튜브 변환기 -",
    yconverterDetail: "YouTube를 MP3, MP4, AVI, FLV로 변환...",
    MpText: "유튜브에",
    MpHead: "MP3 변환기",
    termsparam:
      "당사 서비스를 이용함으로써 귀하는 당사의 서비스에 동의하게 됩니다.",
  },
  ma: {
    nav1: "Youtube Downloader",
    nav2: "Youtube Converter",
    nav3: "Youtube ke MP3",
    downSpan: "Muat turun",
    headline: "Video Berkualiti Tinggi Daripada YouTube",
    inputPlaceholder: "Tampal pautan video di sini...",
    downloadBtn: "Mulakan",
    termsText:
      "Dengan menggunakan perkhidmatan kami, anda menerima perkhidmatan kami",
    termsSpan: "Syarat Penggunaan",
    youtubeText: "Video Youtube ",
    youtubeSpan: "Pemuat turun",
    descriptions:
      "ytube2d membolehkan anda menukar & memuat turun video dari YouTube, Facebook, Video, Dailymotion, Youku, dll. kepada Mp3, Mp4 dalam kualiti HD. ytube2d menyokong memuat turun semua format video seperti: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, dll. Anda boleh memuat turun ribuan video percuma dari YouTube dan tapak web lain dengan mudah.",
    instructionHead: "Arahan",
    instructionText:
      "Cari mengikut nama atau tampal terus pautan video yang ingin anda tukarKlik butang 'Mula' untuk memulakan proses penukaran Pilih format video/audio yang anda ingin muat turun, kemudian klik butang 'Muat turun'",
    whyHead: "Mengapa ytube2d.com",
    whyText: `Cari mengikut nama atau tampal terus pautan video yang ingin anda tukar Klik butang "Mula" untuk memulakan proses penukaran Pilih format video/audio yang anda ingin muat turun, kemudian klik butang "Muat turun"`,
    featuresHead: "ciri-ciri",
    featuresText: `Muat turun tanpa had dan sentiasa percuma Penukar video berkelajuan tinggi
Tiada pendaftaran diperlukan Menyokong muat turun dengan semua format Muat turun tanpa had dan sentiasa percuma Penukar video berkelajuan tinggi`,
    freeHead: "Muat turun percuma",
    freeText: "Penukaran tanpa had dan muat turun percuma.",
    videoHead: "Video & Audio",
    videoText: "Video & Audio Muat Turun Terus Video & Muzik.",
    easyHead: "Muat Turun Mudah",
    easyText: "Serasi sepenuhnya dengan semua pelayar.",
    footerDownload: "Youtube Downloader",
    footerConverter: "Youtube Converter",
    footerMp: "Youtube ke MP3",
    footerAbout: "Tentang",
    footerFaq: "Soalan Lazim",
    footerContact: "Kenalan",
    footerService: "Syarat Perkhidmatan",
    footerPrivacy: "Dasar Privasi",
    yconverterHead: "Youtube Converter -",
    yconverterDetail: "YouTube ke MP3, MP4, AVI, FLV, ...",
    MpText: "Youtube ke",
    MpHead: "Penukar MP3",
    termsparam:
      "Dengan menggunakan perkhidmatan kami Anda menerima perkhidmatan kami",
  },
  fi: {
    nav1: "Youtube Downloader",
    nav2: "Youtube Converter",
    nav3: "Youtube sa MP3",
    downSpan: "I-download",
    headline: "De-kalidad na mga video Mula sa YouTube",
    inputPlaceholder: "Idikit ang link ng video dito...",
    downloadBtn: "Magsimula",
    termsText:
      "Sa pamamagitan ng paggamit ng aming serbisyo ay tinatanggap mo ang aming",
    termsSpan: "Mga Tuntunin ng Paggamit",
    youtubeText: "Youtube video",
    youtubeSpan: "Downloader",
    descriptions:
      "Binibigyang-daan ka ng ytube2d na mag-convert at mag-download ng video mula sa YouTube, Facebook, Video, Dailymotion, Youku, atbp. sa Mp3, Mp4 sa HD na kalidad. Sinusuportahan ng ytube2d ang pag-download ng lahat ng mga format ng video gaya ng: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, atbp. Madali kang makakapag-download nang libre ng libu-libong video mula sa YouTube at iba pang mga website.",
    instructionHead: "Mga tagubilin",
    instructionText:
      "Maghanap ayon sa pangalan o direktang i-paste ang link ng video na gusto mong i-convertI-click ang 'Start' na button para simulan ang proseso ng pag-convert Piliin ang video/audio format na gusto mong i-download, pagkatapos ay i-click ang 'Download' na button",
    whyHead: "Bakit ang ytube2d.com",
    whyText: `Maghanap ayon sa pangalan o direktang i-paste ang link ng video na gusto mong i-convert I-click ang "Start" na button para simulan ang proseso ng pag-convert Piliin ang video/audio format na gusto mong i-download, pagkatapos ay i-click ang "Download" na button`,
    featuresHead: "Mga tampok",
    featuresText: `Walang limitasyong pag-download at palaging libreng High-speed video converter
Walang kinakailangang pagpaparehistro Suportahan ang pag-download sa lahat ng mga format Walang limitasyong pag-download at palaging libreng High-speed video converter`,
    freeHead: "Libreng pag-download",
    freeText: "Walang limitasyong conversion at libreng pag-download.",
    videoHead: "Video at Audio",
    videoText: "Video at AudioDirektang I-download ang Video at Musika.",
    easyHead: "Madaling Pag-download",
    easyText: "Ganap na katugma sa lahat ng mga browser.",
    footerDownload: "Youtube Downloader",
    footerConverter: "Youtube Converter",
    footerMp: "Youtube sa MP3",
    footerAbout: "Tungkol sa",
    footerFaq: "FAQ",
    footerContact: "Makipag-ugnayan",
    footerService: "Mga Tuntunin ng Serbisyo",
    footerPrivacy: "Patakaran sa Privacy",
    yconverterHead: "Youtube Converter -",
    yconverterDetail: "YouTube sa MP3, MP4, AVI, FLV, ...",
    MpText: "Youtube sa",
    MpHead: "MP3 Converter",
    termsparam:
      "Sa pamamagitan ng paggamit ng aming serbisyo tinatanggap Mo ang aming",
  },
  po: {
    nav1: "Baixador do YouTube",
    nav2: "Conversor do YouTube",
    nav3: "Youtube para mp3",
    downSpan: "Download",
    headline: "Vídeos de alta qualidade do YouTube",
    inputPlaceholder: "Cole o link do vídeo aqui...",
    downloadBtn: "Começar",
    termsText: "Ao utilizar nosso serviço você está aceitando nossos",
    termsSpan: "Termos de uso",
    youtubeText: "Vídeo do youtube ",
    youtubeSpan: "Baixador",
    descriptions:
      "ytube2d permite converter e baixar vídeos do YouTube, Facebook, Video, Dailymotion, Youku, etc. para Mp3, Mp4 em Qualidade HD. ytube2d suporta o download de todos os formatos de vídeo, como: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. Você pode baixar facilmente milhares de vídeos gratuitos do YouTube e de outros sites.",
    instructionHead: "Instruções",
    instructionText:
      "Pesquise por nome ou cole diretamente o link do vídeo que deseja converter. Clique no botão 'Iniciar' para iniciar o processo de conversão. Selecione o formato de vídeo/áudio que deseja baixar e clique no botão 'Download'",
    whyHead: "Por que ytube2d.com",
    whyText: `Pesquise por nome ou cole diretamente o link do vídeo que deseja converter Clique no botão "Iniciar" para iniciar o processo de conversão Selecione o formato de vídeo/áudio que deseja baixar e clique no botão "Baixar"`,
    featuresHead: "Características",
    featuresText: `Downloads ilimitados e conversor de vídeo de alta velocidade sempre gratuito
Não é necessário registro Suporte para download em todos os formatos Downloads ilimitados e sempre gratuito Conversor de vídeo de alta velocidade`,
    freeHead: "Download grátis",
    freeText: "Conversão ilimitada e download gratuito.",
    videoHead: "Vídeo e áudio",
    videoText: "Vídeo e áudio Baixe vídeos e músicas diretamente.",
    easyHead: "Download fácil",
    easyText: "Totalmente compatível com todos os navegadores.",
    footerDownload: "Baixador do YouTube",
    footerConverter: "Conversor do YouTube",
    footerMp: "Youtube para mp3",
    footerAbout: "Sobre",
    footerFaq: "Perguntas frequentes",
    footerContact: "Contact",
    footerService: "Termos de serviço",
    footerPrivacy: "política de Privacidade",
    yconverterHead: "Conversor do Youtube -",
    yconverterDetail: "YouTube para MP3, MP4, AVI, FLV, ...",
    MpText: "YouTube para",
    MpHead: "Conversor de mp3",
    termsparam: "Ao utilizar nosso serviço você está aceitando nossos",
  },
  ru: {
    nav1: "Загрузчик YouTube",
    nav2: "Ютуб конвертер",
    nav3: "YouTube в mp3",
    downSpan: "Скачать",
    headline: "Качественные видео с YouTube",
    inputPlaceholder: "Вставьте ссылку на видео сюда...",
    downloadBtn: "Начинать",
    termsText: "Используя наш сервис, вы принимаете наши",
    termsSpan: "Условия эксплуатации",
    youtubeText: "YouTube видео ",
    youtubeSpan: "Загрузчик",
    descriptions:
      "ytube2d позволяет конвертировать и загружать видео с YouTube, Facebook, Video, Dailymotion, Youku и т. д. в Mp3, Mp4 в HD-качество. ytube2d поддерживает загрузку всех форматов видео, таких как: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM и т. д. Вы можете легко скачать бесплатно тысячи видеороликов с YouTube и других сайтов.",
    instructionHead: "инструкции",
    instructionText:
      "Выполните поиск по имени или вставьте ссылку на видео, которое хотите конвертировать. Нажмите кнопку «Пуск», чтобы начать процесс конвертации. Выберите формат видео/аудио, который вы хотите загрузить, затем нажмите кнопку «Загрузить».",
    whyHead: "Почему ytube2d.com",
    whyText: `Выполните поиск по имени или вставьте ссылку на видео, которое хотите конвертировать. Нажмите кнопку «Пуск», чтобы начать процесс конвертации. Выберите формат видео/аудио, который вы хотите загрузить, затем нажмите кнопку «Загрузить».`,
    featuresHead: "Функции",
    featuresText: `Неограниченное количество загрузок и всегда бесплатный Высокоскоростной видеоконвертер
Регистрация не требуется. Поддержка загрузки всех форматов. Неограниченное количество загрузок и всегда бесплатно. Высокоскоростной видеоконвертер.`,
    freeHead: "Бесплатная загрузка",
    freeText: "Неограниченное преобразование и бесплатная загрузка.",
    videoHead: "Видео и аудио",
    videoText: "Видео и аудиоСкачивайте видео и музыку напрямую.",
    easyHead: "Простая загрузка",
    easyText: "Полностью совместим со всеми браузерами.",
    footerDownload: "Загрузчик YouTube",
    footerConverter: "Ютуб конвертер",
    footerMp: "YouTube в mp3",
    footerAbout: "О",
    footerFaq: "Часто задаваемые вопросы",
    footerContact: "Contato",
    footerService: "Условия использования",
    footerPrivacy: "политика конфиденциальности",
    yconverterHead: "Конвертер YouTube —",
    yconverterDetail: "YouTube в MP3, MP4, AVI, FLV,...",
    MpText: "Youtube для",
    MpHead: "Mp3 преобразователь",
    termsparam: "Используя наш сервис, вы принимаете наши",
  },
  th: {
    nav1: "โปรแกรมดาวน์โหลดยูทูป",
    nav2: "โปรแกรมแปลงยูทูป",
    nav3: "ยูทูปเป็น MP3",
    downSpan: "ดาวน์โหลด",
    headline: "วิดีโอคุณภาพสูงจาก ยูทูบ",
    inputPlaceholder: "วางลิงก์วิดีโอที่นี่...",
    downloadBtn: "เริ่ม",
    termsText: "โดยการใช้บริการของเราถือว่าคุณยอมรับเรา",
    termsSpan: "ข้อกำหนดการใช้งาน",
    youtubeText: "วิดีโอยูทูป ",
    youtubeSpan: "ดาวน์โหลด",
    descriptions:
      "ytube2d ช่วยให้คุณสามารถแปลงและดาวน์โหลดวิดีโอจาก YouTube, Facebook, Video, Dailymotion, Youku ฯลฯ เป็น MP3, Mp4 ใน คุณภาพระดับ HD ytube2d รองรับการดาวน์โหลดรูปแบบวิดีโอทั้งหมด เช่น: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM เป็นต้น คุณสามารถดาวน์โหลดวิดีโอนับพันฟรีจาก YouTube และเว็บไซต์อื่น ๆ ได้อย่างง่ายดาย",
    instructionHead: "คำแนะนำ",
    instructionText:
      "ค้นหาตามชื่อหรือวางลิงก์ของวิดีโอที่คุณต้องการแปลงโดยตรง คลิกปุ่ม 'เริ่ม' เพื่อเริ่มกระบวนการแปลง เลือกรูปแบบวิดีโอ/เสียงที่คุณต้องการดาวน์โหลด จากนั้นคลิกปุ่ม 'ดาวน์โหลด'",
    whyHead: "ทำไมต้อง ytube2d.com",
    whyText: `ค้นหาตามชื่อหรือวางลิงก์ของวิดีโอที่คุณต้องการแปลงโดยตรง คลิกปุ่ม "เริ่ม" เพื่อเริ่มกระบวนการแปลง เลือกรูปแบบวิดีโอ/เสียงที่คุณต้องการดาวน์โหลด จากนั้นคลิกปุ่ม "ดาวน์โหลด"`,
    featuresHead: "คุณสมบัติ",
    featuresText: `ดาวน์โหลดได้ไม่จำกัดและแปลงวิดีโอความเร็วสูงฟรีตลอดเวลา
ไม่ต้องลงทะเบียน รองรับการดาวน์โหลดทุกรูปแบบ ดาวน์โหลดได้ไม่จำกัดและแปลงวิดีโอความเร็วสูงฟรีตลอดเวลา`,
    freeHead: "ดาวน์โหลดฟรี",
    freeText: "การแปลงไม่จำกัดและดาวน์โหลดฟรี",
    videoHead: "วิดีโอและเสียง",
    videoText: "วิดีโอและเสียงดาวน์โหลดวิดีโอและเพลงโดยตรง",
    easyHead: "ดาวน์โหลดง่าย",
    easyText: "เข้ากันได้อย่างสมบูรณ์กับเบราว์เซอร์ทั้งหมด",
    footerDownload: "โปรแกรมดาวน์โหลดยูทูป",
    footerConverter: "โปรแกรมแปลงยูทูป",
    footerMp: "ยูทูปเป็น MP3",
    footerAbout: "เกี่ยวกับ",
    footerFaq: "คำถามที่พบบ่อย",
    footerContact: "ติดต่อ",
    footerService: "เงื่อนไขการให้บริการ",
    footerPrivacy: "นโยบายความเป็นส่วนตัว",
    yconverterHead: "แปลงยูทูป -",
    yconverterDetail: "YouTube เป็น MP3, MP4, AVI, FLV, ...",
    MpText: "ยูทูปไป",
    MpHead: "ตัวแปลง MP3",
    termsparam: "โดยการใช้บริการของเรา ถือว่าคุณยอมรับเรา",
  },
  tur: {
    nav1: "Youtube indirici",
    nav2: "Youtube çevirici",
    nav3: "Youtube 'dan mp3' e",
    downSpan: "İndirmek",
    headline: "YouTube'dan Yüksek Kaliteli videolar",
    inputPlaceholder: "Video bağlantısını buraya yapıştırın...",
    downloadBtn: "Başlangıç",
    termsText: "Hizmetimizi kullanarak şunları kabul etmiş oluyorsunuz:",
    termsSpan: "Kullanım Şartları",
    youtubeText: "Youtube videosu ",
    youtubeSpan: "İndirici",
    descriptions:
      "ytube2d, YouTube, Facebook, Video, Dailymotion, Youku vb. kaynaklardan Mp3, Mp4'e video dönüştürmenize ve indirmenize olanak tanır HD kalitesi. ytube2d, MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM vb. gibi tüm video formatlarının indirilmesini destekler. YouTube ve diğer web sitelerinden binlerce videoyu ücretsiz olarak kolayca indirebilirsiniz.",
    instructionHead: "Talimatlar",
    instructionText:
      "Ada göre arayın veya dönüştürmek istediğiniz videonun bağlantısını doğrudan yapıştırın Dönüştürme işlemine başlamak için 'Başlat' düğmesine tıklayın İndirmek istediğiniz video/ses formatını seçin ve ardından 'İndir' düğmesine tıklayın",
    whyHead: "Neden ytube2d.com",
    whyText: `Ada göre arayın veya dönüştürmek istediğiniz videonun bağlantısını doğrudan yapıştırın Dönüştürme işlemine başlamak için "Başlat" düğmesine tıklayın İndirmek istediğiniz video/ses formatını seçin ve ardından "İndir" düğmesine tıklayın`,
    featuresHead: "Özellikler",
    featuresText: `Sınırsız indirme ve her zaman ücretsiz Yüksek hızlı video dönüştürücü
Kayıt gerekli değildir Tüm formatlarda indirme desteği Sınırsız indirme ve her zaman ücretsiz Yüksek hızlı video dönüştürücü`,
    freeHead: "Ücretsiz indirin",
    freeText: "Sınırsız dönüşüm ve ücretsiz indirme.",
    videoHead: "Video ve Ses",
    videoText: "Video ve Ses Video ve Müziği Doğrudan İndirin.",
    easyHead: "Kolay İndirme",
    easyText: "Tüm tarayıcılarla tam uyumludur.",
    footerDownload: "Youtube indirici",
    footerConverter: "Youtube çevirici",
    footerMp: "Youtube 'dan mp3' e",
    footerAbout: "Hakkında",
    footerFaq: "SSS",
    footerContact: "Temas etmek",
    footerService: "seKullanım Şartlarırvice",
    footerPrivacy: "Gizlilik Politikası",
    yconverterHead: "Youtube çevirici -",
    yconverterDetail: "YouTube'dan MP3, MP4, AVI, FLV'ye...",
    MpText: "Youtube'a",
    MpHead: "Mp3 dönüştürücü",
    termsparam: "Hizmetimizi kullanarak şunları kabul etmiş oluyorsunuz:",
  },
  ar: {
    nav1: "برنامج تنزيل يوتيوب",
    nav2: "محول يوتيوب",
    nav3: "يوتيوب الى mp3",
    downSpan: "تحميل",
    headline: "مقاطع فيديو عالية الجودة من اليوتيوب",
    inputPlaceholder: "الصق رابط الفيديو هنا...",
    downloadBtn: "يبدأ",
    termsText: "باستخدام خدمتنا فإنك تقبل لدينا",
    termsSpan: "شروط الاستخدام",
    youtubeText: "فيديو يوتيوب ",
    youtubeSpan: "أداة التنزيل",
    descriptions:
      "يتيح لك ytube2d تحويل وتنزيل الفيديو من YouTube وFacebook وVideo وDailymotion وYouku وما إلى ذلك إلى Mp3 وMp4 في جودة عالية الدقة. يدعم ytube2d تنزيل جميع صيغ الفيديو مثل: MP4، M4V، 3GP، WMV، FLV، MO، MP3، WEBM، إلخ.مكن بسهولة تنزيل آلاف مقاطع الفيديو مجانًا من YouTube ومواقع الويب الأخرى.",
    instructionHead: "تعليمات",
    instructionText:
      'ابحث بالاسم أو قم بلصق رابط الفيديو الذي تريد تحويله مباشرةً، انقر فوق الزر "ابدأ" لبدء عملية التحويل، حدد تنسيق الفيديو/الصوت الذي تريد تنزيله، ثم انقر فوق الزر "تنزيل"',
    whyHead: "لماذا ytube2d.com",
    whyText: `ابحث بالاسم أو قم بلصق رابط الفيديو الذي تريد تحويله مباشرةً، انقر فوق الزر "ابدأ" لبدء عملية التحويل، حدد تنسيق الفيديو/الصوت الذي تريد تنزيله، ثم انقر فوق الزر "تنزيل"`,
    featuresHead: "سمات",
    featuresText: `تنزيلات غير محدودة ومحول فيديو عالي السرعة مجاني دائمًا
لا يلزم التسجيل. دعم التنزيل بجميع التنسيقات. تنزيلات غير محدودة ومحول فيديو عالي السرعة مجاني دائمًا`,
    freeHead: "تحميل مجاني",
    freeText: "تحويل غير محدود وتنزيل مجاني.",
    videoHead: "فيديو سمعي",
    videoText: "الفيديو والصوت تنزيل الفيديو والموسيقى مباشرة.",
    easyHead: "تحميل سهل",
    easyText: "متوافق تماما مع جميع المتصفحات.",
    footerDownload: "برنامج تنزيل يوتيوب",
    footerConverter: "محول يوتيوب",
    footerMp: "يوتيوب الى mp3",
    footerAbout: "عن",
    footerFaq: "التعليمات",
    footerContact: "اتصال",
    footerService: "شروط الخدمة",
    footerPrivacy: "سياسة الخصوصية",
    yconverterHead: "محول يوتيوب -",
    yconverterDetail: "يوتيوب إلى MP3، MP4، AVI، FLV، ...",
    MpText: "يوتيوب الى",
    MpHead: "محول ام بي 3",
    termsparam: "باستخدام خدمتنا فإنك تقبل لدينا",
  },
  vi: {
    nav1: "Trình tải xuống Youtube",
    nav2: "Trình chuyển đổi Youtube",
    nav3: "Youtube sang MP3",
    downSpan: "Tải xuống",
    headline: "Video chất lượng cao từ YouTube",
    inputPlaceholder: "Dán liên kết video vào đây...",
    downloadBtn: "Bắt đầu",
    termsText: "Bằng cách sử dụng dịch vụ của chúng tôi, bạn chấp nhận",
    termsSpan: "Điều khoản sử dụng",
    youtubeText: "Video Youtube ",
    youtubeSpan: "Trình tải xuống",
    descriptions:
      "ytube2d cho phép bạn chuyển đổi và tải video từ YouTube, Facebook, Video, Dailymotion, Youku, v.v. sang Mp3, Mp4 ở Chất lượng HD. ytube2d hỗ trợ tải tất cả các định dạng video như: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, v.v. Bạn có thể dễ dàng tải xuống miễn phí hàng nghìn video từ YouTube và các trang web khác.",
    instructionHead: "Hướng dẫn",
    instructionText:
      "Tìm kiếm theo tên hoặc dán trực tiếp liên kết video bạn muốn chuyển đổi Nhấp vào nút 'Bắt đầu' để bắt đầu quá trình chuyển đổi Chọn định dạng video/âm thanh bạn muốn tải xuống, sau đó nhấp vào nút 'Tải xuống'",
    whyHead: "Tại sao lại là ytube2d.com",
    whyText: `Tìm kiếm theo tên hoặc dán trực tiếp liên kết video bạn muốn chuyển đổi Nhấp vào nút "Bắt đầu" để bắt đầu quá trình chuyển đổi Chọn định dạng video/âm thanh bạn muốn tải xuống, sau đó nhấp vào nút "Tải xuống"`,
    featuresHead: "Đặc trưng",
    featuresText: `Tải xuống không giới hạn và luôn miễn phí Trình chuyển đổi video tốc độ cao
Không cần đăng ký Hỗ trợ tải xuống với mọi định dạng Tải xuống không giới hạn và luôn miễn phí Trình chuyển đổi video tốc độ cao`,
    freeHead: "Tải xuống miễn phí",
    freeText: "Chuyển đổi không giới hạn và tải xuống miễn phí.",
    videoHead: "Video & Âm thanh",
    videoText: "Video & Âm thanh Tải xuống trực tiếp Video và Âm nhạc.",
    easyHead: "Tải xuống dễ dàng",
    easyText: "Hoàn toàn tương thích với mọi trình duyệt.",
    footerDownload: "Trình tải xuống Youtube",
    footerConverter: "Trình chuyển đổi Youtube",
    footerMp: "Youtube sang MP3",
    footerAbout: "Về",
    footerFaq: "Câu hỏi thường gặp",
    footerContact: "Liên hệ",
    footerService: "Điều khoản dịch vụ",
    footerPrivacy: "Chính sách bảo mật",
    yconverterHead: "Trình chuyển đổi Youtube -",
    yconverterDetail: "YouTube sang MP3, MP4, AVI, FLV, ...",
    MpText: "Youtube tới",
    MpHead: "Trình chuyển đổi MP3",
    termsparam:
      "By using our service You are accepting ourBằng việc sử dụng dịch vụ của chúng tôi Bạn đang chấp nhận",
  },
};

function switchLanguage(selectedLanguage) {
  localStorage.setItem("preferredLanguage", selectedLanguage);
  updateLanguage(selectedLanguage);
}

function updateLanguage(selectedLanguage) {
  const storedLanguage = selectedLanguage || "en";

  if (translations[storedLanguage]) {
    document.querySelector(".nav1").innerText =
      translations[storedLanguage].nav1;
    document.querySelector(".nav2").innerText =
      translations[storedLanguage].nav2;
    document.querySelector(".nav3").innerText =
      translations[storedLanguage].nav3;
    document.querySelector(".download-btn").innerText =
      translations[storedLanguage].downloadBtn;
    document.querySelector(".input-placeholder").placeholder =
      translations[storedLanguage].inputPlaceholder;

    const downloadHeadingHTML = downloadHeading
      .replace(
        "Download",
        `  <span class="down-span download-span">${translations[storedLanguage].downSpan}</span>`
      )
      .replace(
        "High-Quality video From YouTube",
        `<span class="down-head">${translations[storedLanguage].headline}</span>`
      );

    let commonContentHTML = CommonContent.replace(
      "Instructions",
      translations[storedLanguage].instructionHead
    )
      .replace(
        "Instructions-detail",
        translations[storedLanguage].instructionText
      )
      .replace("Why ytube2d.com", translations[storedLanguage].whyHead)
      .replace("Why-detail", translations[storedLanguage].whyText)
      .replace("Features", translations[storedLanguage].featuresHead)
      .replace("Features-detail", translations[storedLanguage].featuresText)
      .replace("Free Download", translations[storedLanguage].freeHead)
      .replace(
        "Unlimited conversion and free download.",
        translations[storedLanguage].freeText
      )
      .replace("Video & Audio", translations[storedLanguage].videoHead)
      .replace(
        "Directly Download Video & Music.",
        translations[storedLanguage].videoText
      )
      .replace("Easy Download", translations[storedLanguage].easyHead)
      .replace(
        "Fully compatible with all browsers.",
        translations[storedLanguage].easyText
      )
      .replace("common-detail", translations[storedLanguage].descriptions)
      .replace("Youtube Video", translations[storedLanguage].youtubeText)
      .replace(
        "Downloader",
        `<span class="ytube-down">${translations[storedLanguage].youtubeSpan}</span>`
      );

    const footerHTML = footerContentTemplate
      .replace(
        "__FOOTER_DOWNLOAD__",
        translations[storedLanguage].footerDownload
      )
      .replace(
        "__FOOTER_CONVERTER__",
        translations[storedLanguage].footerConverter
      )
      .replace("__FOOTER_MP__", translations[storedLanguage].footerMp)
      .replace("__FOOTER_ABOUT__", translations[storedLanguage].footerAbout)
      .replace("__FOOTER_FAQ__", translations[storedLanguage].footerFaq)
      .replace("__FOOTER_CONTACT__", translations[storedLanguage].footerContact)
      .replace("__FOOTER_SERVICE__", translations[storedLanguage].footerService)
      .replace(
        "__FOOTER_PRIVACY__",
        translations[storedLanguage].footerPrivacy
      );

    const converterHeadingHTML = converterHeading
      .replace(
        "Youtube Converter-",
        `  <span class="down-span download-span">${translations[storedLanguage].yconverterHead}</span>`
      )
      .replace(
        "YouTube to MP3, MP4, AVI, FLV, ...",
        `<span class="down-head">${translations[storedLanguage].yconverterDetail}</span>`
      );

    const MP3HeadingHTML = MP3Heading.replace(
      "YouTube to",
      `   <span class="down-mp3">${translations[storedLanguage].MpText}</span>`
    ).replace(
      "MP3 Converter",
      ` <span class="down-span  mpHead">${translations[storedLanguage].MpHead}
                    </span>`
    );

    const termsTemplateHTML = termsTemplate
      .replace(
        "By using our service You are accepting our",
        translations[storedLanguage].termsparam
      )
      .replace(
        "Terms of Use",
        `  <span class="terms-span">${translations[storedLanguage].termsSpan}</span>`
      );

    const termsTemplateElement = document.querySelector(".term-hero");
    if (termsTemplateElement) {
      termsTemplateElement.innerHTML = termsTemplateHTML;
    }

    const downloadHeadingElement = document.querySelector(".hero-download");
    if (downloadHeadingElement) {
      downloadHeadingElement.innerHTML = downloadHeadingHTML;
    }

    const commonContentElement = document.querySelector(".common-content");
    if (commonContentElement) {
      commonContentElement.innerHTML = commonContentHTML;
    }

    const footerSection = document.querySelector(".footer-sec");
    if (footerSection) {
      footerSection.innerHTML = footerHTML;
    }

    const MP3HeadingElement = document.querySelector(".youtubeMp");
    if (MP3HeadingElement) {
      MP3HeadingElement.innerHTML = MP3HeadingHTML;
    }

    const converterHeadingElement =
      document.querySelector(".converterHead-sec");
    if (converterHeadingElement) {
      converterHeadingElement.innerHTML = converterHeadingHTML;
    }

    const languageSelectElement = document.querySelector(".languageSelect");
    if (languageSelectElement) {
      languageSelectElement.value = storedLanguage;
    }
  }
}

function updateActiveClass() {
  const currentUrl = window.location.href;
  const originUrl = window.location.origin + "/index";

  document.querySelectorAll(".nav-link").forEach((nav, index) => {
    nav.classList.remove("active");
    if (
      (currentUrl === window.location.origin + "/" ||
        currentUrl === originUrl) &&
      index === 0
    ) {
      nav.classList.add("active");
    } else if (nav.pathname === window.location.pathname) {
      nav.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.querySelector(".languageSelect");
  const defaultValue = localStorage.getItem("preferredLanguage") || "en";

  if (selectElement) {
    selectElement.value = defaultValue;
    selectElement.addEventListener("change", function () {
      switchLanguage(this.value);
      location.reload();
    });
  }

  updateActiveClass();
  updateLanguage(defaultValue);
});

let fetchData = [];
//when put a link inside input start button is active
document.addEventListener("DOMContentLoaded", (event) => {
  const inputElement = document.querySelector(".input-placeholder");
  const downloadBtn = document.querySelector(".download-btn");
  const errorMessage = document.querySelector("#error-msg");

  inputElement.addEventListener("paste", (event) => {
    setTimeout(() => {
      const url = inputElement.value.trim();
      let regex = /^(ftp|http|https):\/\/[^ "]+$/;

      if (regex.test(url) && url.includes("youtube.com")) {
        downloadBtn.style.opacity = "1";
        errorMessage.style.visibility = "hidden";
      } else {
        downloadBtn.style.opacity = "0.5";
        errorMessage.textContent =
          "Error: Invalid link format. Please provide a YouTube link.";
        errorMessage.style.visibility = "visible";
      }
    }, 100);
  });
});

let baseUrl = "https://api.ytube2d.com";

let inputValue;
let dataFetched = false;

async function updateValue() {
  const inputElement = document.querySelector(".input-placeholder");
  const errorMsg = document.querySelector("#error-msg");
  const loader = document.querySelector("#loading");
  const downloadBtn = document.querySelector(".download-btn");
  const videoFile = document.querySelector("#video-file");

  // Clear previous data and states
  videoFile.innerHTML = "";
  errorMsg.textContent = "";
  errorMsg.style.visibility = "hidden";
  downloadBtn.style.opacity = "1";
  dataFetched = false;
  fetchData = [];

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  videoFile.appendChild(div1);
  videoFile.appendChild(div2);

  inputValue = inputElement.value;
  let url = inputValue;
  let dataInfo = { url: url };
  let regex = /^(ftp|http|https):\/\/[^ "]+$/;
  loader.classList.add("hidden");
  if (regex.test(url) && url.includes("youtube.com")) {
    loader.classList.remove("hidden");
    try {
      const response = await fetch(`${baseUrl}/api/data-info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataInfo),
      });

      const result = await response.json();
      console.log("Success:", result);
      if (result.success === true && !dataFetched) {
        dataFetched = true;
        loader.classList.add("hidden");
        div1.innerHTML = `
        <iframe src=${result.info.videoDetails.embed.iframeUrl} width="464px"  height="259.595px" class="res-image">
        </iframe>
        <p class="title">${result.info.videoDetails.title}</p>`;

        div2.innerHTML = `
        <div class="qualities">
          <div class="video-head grid grid-cols-2 ">
            <h1 class="video-title flex justify-start">Video (Mp4)</h1>
            <h1 class="video-title flex justify-end p-[16px]">Download</h1>
          </div>
          <div class="video-horizontal-line video-line"></div>
          <div class="video-quality  flex flex-col ">
          </div>
          <div class="audioFile grid grid-cols-2">
            <h1 class="video-title flex justify-start">Audio (Mp3)</h1>
            <h1 class="video-title flex justify-end p-[16px]">Download</h1>
          </div>
          <div class="video-horizontal-line"></div>
          <div class="Audio-quality">
          </div>
        </div>
        `;
        let videoTitle = result.info.videoDetails.title;
        let videoQuality = document.querySelector(".video-quality");

        let AudioQuality = document.querySelector(".Audio-quality");

        fetchData.push(result.info.formats);

        let uniqueQualities = [
          ...new Set(
            fetchData[0]
              .map((result) => result.qualityLabel)
              .filter((qualityLabel) => qualityLabel != null)
          ),
        ].sort((a, b) => {
          let numA = parseInt(a);
          let numB = parseInt(b);
          return numA - numB;
        });

        //video download- audio data and noaudio data

        let audioFormats = [];
        console.log("🚀 ~ file: custom.js:1110 ~ audioFormats:", audioFormats);
        let noAudioFormats = [];
        console.log(
          "🚀 ~ file: custom.js:1112 ~ noAudioFormats:",
          noAudioFormats
        );

        uniqueQualities.forEach((qualityLabel) => {
          fetchData[0]
            .filter(
              (format) =>
                format.qualityLabel === qualityLabel &&
                format.container === "mp4"
            )
            .forEach((format) => {
              if (format.audioBitrate != null) {
                audioFormats.push(format);
              } else {
                const exists = noAudioFormats.some(
                  (item) => item.qualityLabel === format.qualityLabel
                );
                if (!exists) {
                  noAudioFormats.push(format);
                }
              }
            });
        });

        audioFormats.sort(
          (a, b) => parseInt(a.qualityLabel) - parseInt(b.qualityLabel)
        );
        noAudioFormats.sort(
          (a, b) => parseInt(a.qualityLabel) - parseInt(b.qualityLabel)
        );

        let generateHtml = (formats) => {
          return formats
            .map((format) => {
              let videoUrl = format.url;
              let videoContainer = format.container;
              let qualityLabel = format.qualityLabel;

              let hasAudio = format.audioBitrate != null;

              let svgIcon = hasAudio
                ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M2 9.99997V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.40997C15 4.42997 12.93 3.28997 10.41 4.86997L7.49 6.69997C7.17 6.88997 6.8 6.99997 6.43 6.99997H5C3 6.99997 2 7.99997 2 9.99997Z" stroke="#292D32" stroke-width="1.5" />
                 <path d="M18 8C19.78 10.37 19.78 13.63 18 16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                 <path d="M19.8301 5.5C22.7201 9.35 22.7201 14.65 19.8301 18.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>`
                : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 8.36997V7.40997C15 4.42997 12.93 3.28997 10.41 4.86997L7.49 6.69997C7.17 6.88997 6.8 6.99997 6.43 6.99997H5C3 6.99997 2 7.99997 2 9.99997V14C2 16 3 17 5 17H7" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.4099 19.13C12.9299 20.71 14.9999 19.56 14.9999 16.59V12.95" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.81 9.41998C19.71 11.57 19.44 14.08 18 16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.1501 7.79999C22.6201 11.29 22.1801 15.37 19.8301 18.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 2L2 22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`;
              let qualityNumber = parseInt(qualityLabel);
              return `
        <div class="grid grid-cols-2">
          <div class="flex gap-[16px] items-center justify-start p-[16px]">
            <p class="video-mp">${qualityLabel}(${videoContainer})</p>
            ${svgIcon}
        ${
          qualityNumber > 1000
            ? `<svg width="29" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="39" height="40" rx="10" fill="black"/>
<path d="M18.3475 14.88V26H16.5235V21.136H11.2915V26H9.4675V14.88H11.2915V19.648H16.5235V14.88H18.3475ZM24.2208 14.88C25.4048 14.88 26.4394 15.1093 27.3248 15.568C28.2208 16.016 28.9088 16.6667 29.3888 17.52C29.8794 18.3627 30.1248 19.3493 30.1248 20.48C30.1248 21.6107 29.8794 22.592 29.3888 23.424C28.9088 24.256 28.2208 24.896 27.3248 25.344C26.4394 25.7813 25.4048 26 24.2208 26H20.5888V14.88H24.2208ZM24.2208 24.512C25.5221 24.512 26.5194 24.16 27.2128 23.456C27.9061 22.752 28.2528 21.76 28.2528 20.48C28.2528 19.1893 27.9061 18.1813 27.2128 17.456C26.5194 16.7307 25.5221 16.368 24.2208 16.368H22.4128V24.512H24.2208Z" fill="white"/>
</svg>
`
            : ``
        }
         
          </div>
          <button class="video-btn flex gap-[8px] justify-end items-center p-[16px]" onClick="videoDownload(this, '${videoUrl}', '${qualityLabel}', '${videoContainer}', '${title}', ${hasAudio})" id="down-btn2">
            <p class="video-download">Download</p>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9626 8.6678L16.9674 8.66821C18.877 8.83134 20.1692 9.41959 20.9973 10.4201C21.8342 11.4312 22.27 12.9501 22.27 15.13V15.26C22.27 17.647 21.7556 19.2345 20.7531 20.2348C19.7503 21.2354 18.1574 21.75 15.76 21.75H9.23998C6.8425 21.75 5.24996 21.2354 4.24728 20.2327C3.24461 19.23 2.72998 17.6375 2.72998 15.24V15.11C2.72998 12.9445 3.15855 11.4341 3.98232 10.425C4.79616 9.42794 6.06528 8.83643 7.94093 8.65838C8.08211 8.64984 8.21014 8.7635 8.22234 8.88858C8.2355 9.02348 8.13711 9.14824 7.99309 9.16223C6.35973 9.31321 5.12127 9.78418 4.31507 10.8052C3.52336 11.8078 3.22998 13.2422 3.22998 15.12V15.25C3.22998 17.3197 3.5908 18.8705 4.60518 19.8848C5.61955 20.8992 7.17035 21.26 9.23998 21.26H15.76C17.8296 21.26 19.3804 20.8992 20.3948 19.8848C21.4092 18.8705 21.77 17.3197 21.77 15.25V15.12C21.77 13.2318 21.4715 11.7903 20.6646 10.7867C19.8445 9.76667 18.586 9.30278 16.9261 9.16214C16.779 9.14652 16.6858 9.01993 16.6976 8.89858C16.7124 8.74671 16.833 8.65543 16.9626 8.6678Z" fill="#FF0000" stroke="#FF0000"/>
<path d="M12.5 15.63C12.09 15.63 11.75 15.29 11.75 14.88V2C11.75 1.59 12.09 1.25 12.5 1.25C12.91 1.25 13.25 1.59 13.25 2V14.88C13.25 15.3 12.91 15.63 12.5 15.63Z" fill="#FF0000"/>
<path d="M12.5001 16.75C12.3101 16.75 12.1201 16.68 11.9701 16.53L8.62009 13.18C8.33009 12.89 8.33009 12.41 8.62009 12.12C8.91009 11.83 9.39009 11.83 9.68009 12.12L12.5001 14.94L15.3201 12.12C15.6101 11.83 16.0901 11.83 16.3801 12.12C16.6701 12.41 16.6701 12.89 16.3801 13.18L13.0301 16.53C12.8801 16.68 12.6901 16.75 12.5001 16.75Z" fill="#FF0000"/>
</svg>
          </button>
        </div>
        <div class="video-horizontal-line"></div>
      `;
            })
            .join("");
        };

        let title = videoTitle;
        console.log(title);

        //Audio-download

        let audioHtml = generateHtml(audioFormats);
        let noAudioHtml = generateHtml(noAudioFormats);
        let quality_Label = audioHtml + noAudioHtml;

        let uniqueAudioFormats = fetchData[0].filter(
          (format) => format.audioCodec != "opus" && format.qualityLabel == null
        );

        let audioUrl = uniqueAudioFormats[0].url;
        let AudioContainer = uniqueAudioFormats[0].container;

        let audioQualityHTML = `
    <div class="grid grid-cols-2">
        <div class="flex gap-[16px] items-center justify-start p-[16px]">
            <p class="video-mp">MP3</p>
        </div>

        <button class="video-btn flex gap-[8px] justify-end items-center p-[16px]" onClick="audioDownload(this,'${audioUrl}','${title}','${AudioContainer}')" id="Audio-btn">
            <p class="video-download">Download</p>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9626 8.6678L16.9674 8.66821C18.877 8.83134 20.1692 9.41959 20.9973 10.4201C21.8342 11.4312 22.27 12.9501 22.27 15.13V15.26C22.27 17.647 21.7556 19.2345 20.7531 20.2348C19.7503 21.2354 18.1574 21.75 15.76 21.75H9.23998C6.8425 21.75 5.24996 21.2354 4.24728 20.2327C3.24461 19.23 2.72998 17.6375 2.72998 15.24V15.11C2.72998 12.9445 3.15855 11.4341 3.98232 10.425C4.79616 9.42794 6.06528 8.83643 7.94093 8.65838C8.08211 8.64984 8.21014 8.7635 8.22234 8.88858C8.2355 9.02348 8.13711 9.14824 7.99309 9.16223C6.35973 9.31321 5.12127 9.78418 4.31507 10.8052C3.52336 11.8078 3.22998 13.2422 3.22998 15.12V15.25C3.22998 17.3197 3.5908 18.8705 4.60518 19.8848C5.61955 20.8992 7.17035 21.26 9.23998 21.26H15.76C17.8296 21.26 19.3804 20.8992 20.3948 19.8848C21.4092 18.8705 21.77 17.3197 21.77 15.25V15.12C21.77 13.2318 21.4715 11.7903 20.6646 10.7867C19.8445 9.76667 18.586 9.30278 16.9261 9.16214C16.779 9.14652 16.6858 9.01993 16.6976 8.89858C16.7124 8.74671 16.833 8.65543 16.9626 8.6678Z" fill="#FF0000" stroke="#FF0000" />
                <path d="M12.5 15.63C12.09 15.63 11.75 15.29 11.75 14.88V2C11.75 1.59 12.09 1.25 12.5 1.25C12.91 1.25 13.25 1.59 13.25 2V14.88C13.25 15.3 12.91 15.63 12.5 15.63Z" fill="#FF0000" />
                <path d="M12.5001 16.75C12.3101 16.75 12.1201 16.68 11.9701 16.53L8.62009 13.18C8.33009 12.89 8.33009 12.41 8.62009 12.12C8.91009 11.83 9.39009 11.83 9.68009 12.12L12.5001 14.94L15.3201 12.12C15.6101 11.83 16.0901 11.83 16.3801 12.12C16.6701 12.41 16.6701 12.89 16.3801 13.18L13.0301 16.53C12.8801 16.68 12.6901 16.75 12.5001 16.75Z" fill="#FF0000" />
            </svg>
        </button>
    </div>
    <div class="video-horizontal-line"></div>
`;

        AudioQuality.innerHTML = audioQualityHTML;
        videoFile.classList.remove("hidden");

        videoQuality.innerHTML = quality_Label;
        AudioQuality.innerHTML = audioQualityHTML;
        videoFile.classList.remove("hidden");
      }
    } catch (error) {
      loader.classList.add("hidden");
      console.error("Error:", error);
      errorMsg.textContent = "Error: Invalid link provided.";
      errorMsg.style.visibility = "visible";
      downloadBtn.style.opacity = "0.5";
    } finally {
      loader.classList.add("hidden");
    }
  } else {
    loader.classList.add("hidden");
    console.log("Invalid URL Format");
    errorMsg.textContent = "Error: Invalid link format.";
    errorMsg.style.visibility = "visible";
    downloadBtn.style.opacity = "0.5";
    downloadBtn.disabled = true;
  }
  loader.classList.add("hidden");
}

//video-download
async function videoDownload(
  button,
  url,
  qualityLabel,
  videoContainer,
  title,
  hasAudio
) {
  if (hasAudio) {
    console.log(":rocket: ~ file: custom.js:1261 ~ url :grinning::clap::", url);
    const downloadText = button.querySelector(".video-download");
    button.disabled = true;
    const originalText = downloadText.textContent;
    downloadText.textContent = "downloading...";
    const proxyUrl = `${baseUrl}/proxy?url=${encodeURIComponent(url)}`;
    try {
      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${title}.${videoContainer}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      button.disabled = false;
      downloadText.textContent = originalText;
    }
  } else {
    window.open(url, "");
  }
}

//Audio-download
function audioDownload(button, audioUrl, title, AudioContainer) {
  const link = document.createElement("a");
  link.href = audioUrl;
  link.setAttribute("download", `${title}.${AudioContainer}`);
  document.body.appendChild(link);
  window.open(link, "_blank");
  document.body.removeChild(link);
}
