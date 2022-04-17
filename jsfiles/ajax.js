function loadAJAX(location, url) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (xhr.status === 200) {
      var el = $(location);
      el.append(xhr.responseText);
    }
  };

  xhr.open('GET', url, true);
  xhr.send(null);
};

$(function() {
  loadAJAX('nav', 'jsfiles/data/ajax-nav.html');
  loadAJAX('#main-content', 'jsfiles/data/ajax-content.html');
  loadAJAX('footer', 'jsfiles/data/ajax-footer.html');
});
