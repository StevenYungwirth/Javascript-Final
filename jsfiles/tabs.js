$('#tabList').each(function(){
  var $this = $(this);
  var $tab = $this.find('li.activeTab');
  var $link = $tab.find('a');
  var $panel = $($link.attr('href'));

  $this.on('click', '.tabLink', function(e) {
    e.preventDefault();

    var $link = $(this);
    var id = this.hash;

    if (id && !$link.parent().is('.activeTab')) {
      $panel.removeClass('activeTab');
      $tab.removeClass('activeTab');

      $panel = $(id).addClass('activeTab');
      $tab = $link.parent().addClass('activeTab');
    }
  });
});
