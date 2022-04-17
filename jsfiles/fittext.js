$(function() {
  $('h1').fitText(2);

  var elSlider = $('#fitSlider');
  var elValue = $('#slideValue');

  elSlider.on('input', function() {
    elValue.text("Compresser Value: " + this.value);
    $('h1').fitText(this.value);
  });
})
