$(document).ready(function() {
  $('form#form-group').submit(function(event) {
    event.preventDefault();
    var karmaTotal = 0;
    $("input:checkbox:checked").each(function(){
      karmaTotal += parseInt($(this).val());
    });
    if (karmaTotal <= 10) {
      $(".positiveResponse").show();
    } else if (karmaTotal > 10 && karmaTotal <= 20) {
      $(".neutralResponse").show();
    } else {
      $(".negativeResponse").show();
    }
  });
});
