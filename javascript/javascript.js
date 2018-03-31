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
  var bc_height = document.getElementById("bc_height").value.replace(/\s/g,'');
  var bc_width = document.getElementById("bc_width").value.replace(/\s/g,'');
  // https://github.com/lindell/JsBarcode
  JsBarcode("#barcode", output, {format: "ITF", displayValue:false, width:bc_width, height:bc_height});
  var dataURL = document.getElementById('barcode').toDataURL();
  document.getElementById('canvasImg').src = dataURL;
  document.getElementById('imageLink').href= dataURL;  
  document.getElementById('imageLink').download = "barcode_itf_" + output +	".png" ;
}
