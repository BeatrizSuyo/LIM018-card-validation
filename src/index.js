
import validator from './validator.js';

  const creditCardNumber = document.getElementById("numero");
  const btnVal = document.getElementById("btnVal");
  const result = document.getElementById("result");
  const volver = document.getElementById("btnRetun");
  btnVal.addEventListener("click", (event) => {
    event.preventDefault()
    //console.log("hola", creditCardNumber.value);
      console.log("hola");
     if(validator.isValid(creditCardNumber.value)){
       result.innerHTML = `tu tarjeta ${validator.maskify(creditCardNumber.value)} es valida`;
       } else {
        result.innerHTML = `tu verificacion fallo ${validator.maskify(creditCardNumber.value)}, vuelve a intentarlo`;
       }
  
   }
   );


//=== son iguales

 

// console.log(validator.isValid);
