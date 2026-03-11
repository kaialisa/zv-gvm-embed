(function () {
  var target = document.getElementById('gvm-widget');
  if (!target) return;

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
      target.innerHTML = '<p style="color:#555;font-size:14px;">Inhalt konnte nicht geladen werden.</p>';
    });
})();