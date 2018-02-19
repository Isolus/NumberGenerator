<!-- Generator -->
function getCalculatedNumber (oldNumber) {
  var newID =  oldNumber*631 ; 
  var payload = "" + newID + getLuhnCheckDigit(newID);
  
  while (payload.length < 15) payload = "0" + payload ;

  return parseInt("3"+payload);  
}




function calculateButton() {
  var input = parseInt(document.getElementById("oldNumber").value.replace(/\s/g,''));
  var output = getCalculatedNumber(input)
  document.getElementById("newNumber").innerHTML = output;  
  // https://github.com/lindell/JsBarcode
  JsBarcode("#barcode", output, {format: "ITF", displayValue:false, width:2, height:100});
  var dataURL = document.getElementById('barcode').toDataURL();
  document.getElementById('canvasImg').src = dataURL;
  document.getElementById('imageLink').href= dataURL;  
  document.getElementById('imageLink').download = "barcode_itf_" + output +	".png" ;
}