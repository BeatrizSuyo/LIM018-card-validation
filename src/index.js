import validator from './validator.js';

//llamar al boton//
let buton = document.getElementById("validar");//llamar la buton
buton.addEventListener('click',()=>{
  creditCardNumber();
});
//empiezo con variable credicard//
function creditCardNumber() {
  let creditcard =document.getElementById("Creditcard").value;

  let arrCreditcard = Array.from(creditcard);
  let totalPares = 0;
  let totalimpares = 0;

  for(let i=0; i < arrCreditcard.length; i++){
    if(i%2 ===0 ){
        console.log(typeof(arrCreditcard[i]))
      if(arrCreditcard[i]*2 >9){
        totalPares += arrCreditcard[i]*2-9;
        }
      else{
        totalPares += arrCreditcard[i]*2;
        }
     }
      else{
        totalimpares += arrCreditcard[i]*1;
        }
    
    }
   console.log(totalPares,totalimpares)
  if((totalPares + totalimpares)%10 ===0 ){
    
    alert(" TARJETA  VALIDA")
    
  }
  else{
    alert(" TARJETA NO VALIDA")
  }
  
}

//=== son iguales

 

 console.log(validator);
