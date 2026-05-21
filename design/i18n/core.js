// design/i18n/core.js — i18n 核心，必須在 dict-zh.js / dict-en.js 之後，babel jsx 之前載入
// (但實際上 window.LANG / window.t 在 dict 前定義也沒問題，
//  因為 t() 被呼叫時 dict 已透過 DOMContentLoaded 之前的同步 script 載入)

window.LANG = localStorage.getItem('design-lang') || 'zh';

window.t = function(key) {
  var d = (window.LANG === 'en') ? window.DICT_EN : window.DICT_ZH;
  return (d && d[key] !== undefined) ? d[key] : key;
};

window.setDesignLang = function(lang) {
  localStorage.setItem('design-lang', lang);
  location.reload();
};

document.addEventListener('DOMContentLoaded', function() {
  // (a) 設定 html[lang]
  document.documentElement.lang = (window.LANG === 'en') ? 'en' : 'zh-Hant';

  // (a2) vs-switcher 語言切換鈕：顯示「要切去的語言」
  var langBtn = document.querySelector('.vs-switcher .vs-lang');
  if (langBtn) langBtn.textContent = (window.LANG === 'en') ? '中文' : 'EN';

  // (b) 掃 data-i18n 屬性，把 textContent 換成翻譯值
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = window.t(key);
    if (val !== key) {
      // 若翻譯值含 HTML（允許 <strong> 等），用 innerHTML；否則用 textContent
      if (val.indexOf('<') !== -1) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // (c) EN 時更新 <meta> / og / twitter / <title>
  if (window.LANG === 'en') {
    var d = window.DICT_EN;
    if (!d) return;

    // title
    if (d['meta.title']) document.title = d['meta.title'];

    // description
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && d['meta.description']) metaDesc.setAttribute('content', d['meta.description']);

    // og:title
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && d['og.title']) ogTitle.setAttribute('content', d['og.title']);

    // og:description
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && d['og.description']) ogDesc.setAttribute('content', d['og.description']);

    // og:locale
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', 'en_US');

    // twitter:title
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle && d['twitter.title']) twTitle.setAttribute('content', d['twitter.title']);

    // twitter:description
    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && d['twitter.description']) twDesc.setAttribute('content', d['twitter.description']);

    // (d) 把 FAQPage JSON-LD 換成英文
    var faqScript = null;
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function(s) {
      try {
        var obj = JSON.parse(s.textContent);
        if (obj['@type'] === 'FAQPage') faqScript = s;
      } catch(e) {}
    });
    if (faqScript && d) {
      var faqKeys = [
        ['faq.01.q', 'faq.01.a'],
        ['faq.02.q', 'faq.02.a'],
        ['faq.03.q', 'faq.03.a'],
        ['faq.04.q', 'faq.04.a'],
        ['faq.05.q', 'faq.05.a'],
        ['faq.06.q', 'faq.06.a'],
        ['faq.07.q', 'faq.07.a'],
      ];
      var entities = faqKeys.map(function(pair) {
        return {
          '@type': 'Question',
          'name': d[pair[0]] || pair[0],
          'acceptedAnswer': { '@type': 'Answer', 'text': d[pair[1]] || pair[1] }
        };
      });
      var newFaq = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': entities
      };
      faqScript.textContent = JSON.stringify(newFaq, null, 2);
    }
  }
});
