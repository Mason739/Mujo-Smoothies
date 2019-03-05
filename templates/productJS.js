
let prices = {
  'Small - 8 oz':  '$ 6.99',
  'Medium - 16 oz': '$ 8.99',
  'Large - 30 oz':  '$ 10.99'
}



window.onload = function() {
  $('#select-size').change(function () {
      var selectedText = $(this).find("option:selected").text();

      $('#price-display').text(prices[selectedText]);

  });

}
