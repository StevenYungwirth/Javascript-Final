var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if (xhr.status === 200) {
    var jsonContent = JSON.parse(xhr.responseText);

    var jsonToSiteContent = '';

    // Get the nav bar
    for (var i = 0; i < jsonContent.nav.length; i++) {
      jsonToSiteContent = '<a href="';
      jsonToSiteContent += jsonContent.nav[i].href;
      jsonToSiteContent += '">'
      jsonToSiteContent += jsonContent.nav[i].text;
      jsonToSiteContent += '</a>';

      var $nav = $('nav');
      $nav.append(jsonToSiteContent);
    }

    // Get the page's content
    jsonToSiteContent = '';
    for (var i = 0; i < jsonContent.content.length; i++) {
      jsonToSiteContent += jsonContent.content[i].tagStart;
      jsonToSiteContent += jsonContent.content[i].sentence;
      jsonToSiteContent += jsonContent.content[i].tagEnd;
    }

    var $main = $('#main-content');
    $main.append(jsonToSiteContent);

    // Get the footer
    for (var i = 0; i < jsonContent.footer.length; i++) {
      jsonToSiteContent = '<a href="';
      jsonToSiteContent += jsonContent.footer[i].href;
      jsonToSiteContent += '">'
      jsonToSiteContent += jsonContent.footer[i].text;
      jsonToSiteContent += '</a>';

      var $footer = $('footer p');
      $footer.append(jsonToSiteContent);
    }
  }
}

xhr.open('GET', 'jsfiles/data/json-data.json', true);
xhr.send(null);
