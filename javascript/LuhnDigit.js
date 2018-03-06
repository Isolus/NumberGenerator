<!-- Luhn -->
function getLuhnCheckDigit (number) {   
  var lastIndex = number.toString().length - 1 ;
  var isOdd = true;  
  var sum = 0;
  var curChar = '0';
  var addValue = 0;
  var multipliedDigit = 0;
  
  number += "";
  
  for (var n = lastIndex; n>=0; n--) {    
    curChar = number.charAt(n);     
    
    if (isOdd) {
      multipliedDigit = curChar * 2;
      
      if (multipliedDigit > 9) {
        addValue = multipliedDigit - 9;
      } else {
        addValue = multipliedDigit;
      }      
    } else {
      addValue = curChar;
    }        
    isOdd = !isOdd;
    sum += parseInt(addValue);
  }    
  return ((10 - (sum % 10)) % 10);  
}
