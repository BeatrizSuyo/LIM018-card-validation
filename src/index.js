
import validator from './validator.js';
  
  const creditCardNumber = document.getElementById("numero");
                 //console.log(creditCardNumber);
  const btnVal = document.getElementById("btnVal");
  const result = document.getElementById("result");
                   
                //console.log(validator.isValid('4083952015263'))

  btnVal.addEventListener("click", (event) => {
    event.preventDefault(); //previniendo que el navegador realice otra acción//
                   //console.log("hola", creditCardNumber.value);
                    //console.log("hola");
       if(validator.isValid(creditCardNumber.value)){
        result.innerHTML = `TU TARJETA  ${validator.maskify(creditCardNumber.value)} ES VALIDA`;
        } else {
        result.innerHTML = `TU VERIFICACIÓN FALLÓ ${validator.maskify(creditCardNumber.value)}, VUELVE A INTENTARLO`;
        }    //invoca a las funciones isvalid y maskify para actualizar el resultado//
         
  //numeroEnmascarado =maskify(creditCardNumber);
  //creditCardNumber.innerHTML = `su tarjeta + numeroEnmascarado `  
  creditCardNumber.innerHTML = `numeroEnmascarado `
   }
   );


//=== son iguales

 

 //console.log(validator.isValid);
