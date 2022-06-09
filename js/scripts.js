function ccvVal(number) {
  
  let numberArray = Array.from(String(number), Number);
  
  numberArray.forEach(element => {
  const vcc = numberArray.map(function(element) {
  
  });
  });
}



//UI Logic

$(document).ready(function(){
  $("form#ccv").submit(function(event){
    event.preventDefault();
    let number1 = parseInt($("#ccn").val());

    $("#valid").html(ccvVal(number1));
  });
});