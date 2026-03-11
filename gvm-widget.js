(function () {
  var target = document.getElementById('gvm-widget');
  if (!target) return;

  if (!document.getElementById('gvm-widget-style')) {
    var style = document.createElement('style');
    style.id = 'gvm-widget-style';
    style.textContent =
      '#gvm-widget { display: flex; flex-direction: column; min-height: 100%; }' +
      '#gvm-widget .gvm-card { display: flex; flex-direction: column; flex: 1; background-color: #fff; border-radius: 3px; box-shadow: 0 0 10px 0 rgba(0,0,0,.15); overflow: hidden; text-decoration: none; color: inherit; transition: box-shadow .25s; width: 100%; }' +
      '#gvm-widget .gvm-card:hover { box-shadow: 0 0 20px 0 rgba(0,0,0,.25); }' +
      '#gvm-widget .gvm-img-wrap { position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; }' +
      '#gvm-widget .gvm-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }' +
      '#gvm-widget .gvm-caption { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,.45); color: #fff; font-size: 11px; padding: 4px 8px; font-family: "Barlow", sans-serif; }' +
      '#gvm-widget .gvm-info { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 8px; flex: 1; }' +
      '#gvm-widget .gvm-title { margin: 0; font-family: "Barlow Semi Condensed", sans-serif; font-size: 27px; font-weight: 600; line-height: 34px; letter-spacing: -0.9px; color: #009fe3; }' +
      '#gvm-widget .gvm-excerpt { margin: 0; font-family: "Barlow", sans-serif; font-size: 25px; font-weight: 400; letter-spacing: -0.9px; color: #333; }' +
      '#gvm-widget .gvm-read-more { font-family: "Barlow", sans-serif; font-size: 14px; font-weight: 600; color: #009fe3; text-decoration: none; margin-top: auto; padding-top: 8px; display: inline-block; }' +
      '@media (max-width: 800px) {' +
      '#gvm-widget .gvm-title { font-size: 18px; line-height: 1.35; letter-spacing: -0.5px; }' +
      '#gvm-widget .gvm-excerpt { font-size: 14px; letter-spacing: 0; }' +
      '}';
    document.head.appendChild(style);
  }

  function esc(str) {
    var d = document.createElement('div');
    d.textContent = str || '';
    return d.innerHTML;
  }

  function safeUrl(str) {
    return typeof str === 'string' && str.indexOf('https://') === 0 ? str : '#';
  }

  fetch('https://kaialisa.github.io/gvm-embed/article.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      target.innerHTML =
        '<a class="gvm-card" href="' + safeUrl(data.url) + '" target="_blank" rel="noopener">' +
          '<div class="gvm-img-wrap">' +
            '<img src="' + safeUrl(data.image) + '" alt="' + esc(data.title) + '">' +
            '<span class="gvm-caption">' + esc(data.caption) + '</span>' +
          '</div>' +
          '<div class="gvm-info">' +
            '<p class="gvm-title">' + esc(data.title) + '</p>' +
            '<p class="gvm-excerpt">' + esc(data.excerpt) + '</p>' +
            '<span class="gvm-read-more">weiterlesen »</span>' +
          '</div>' +
        '</a>';
    })
    .catch(function () {
      target.innerHTML = '<p style="font-family:\'Barlow\',sans-serif;color:#555;">Inhalt konnte nicht geladen werden.</p>';
    });
})();