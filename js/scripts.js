// business Logic
function ccvVal(number) {
  
  let numberArray = Array.from(String(number), Number);
  // Array.from(elechange(parameter to change), current element)
  
  numberArray.forEach(function (element) {
  const vcc = numberArray.map(function(element) {
  });
  });
}



// UI Logic

$(document).ready(function() {
  $("form#ccv").submit(function(event){
    event.preventDefault();
    let number1 = parseInt($("#ccn").val());
    ccvVal(number1);
    // $("#valid").html();
  });
});