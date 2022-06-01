const validator = {
    isValid:(creditCardNumber) => {
        //console.log(creditCardNumber);//creditCardNumber solo vive en esta funcion
      const length = creditCardNumber.length;
      console.log(length)
      const reverse =creditCardNumber.split("").reverse();   //.split('') //Para convertir una cadena string a un array
     
      let suma = 0;                                           //.reverse() //Para invertir el orden de los numeros
                                                   //.parseInt(x)); //Para recorrer cada elemento del array y convertirlo a entero
      for ( let i = 0; i < length; i++){
        let numeroActual = parseInt(reverse[i]);

        if (i % 2 !== 0){  
          numeroActual = numeroActual * 2
          if(numeroActual < 9) 
          {
          numeroActual = numeroActual - 9;
          console.log(numeroActual);
          }       
          }   
        suma = suma + numeroActual,
        console.log(suma);
     }
    return (suma % 10) === 0;
    },

    maskify: (creditCardNumber) => {
     return creditCardNumber.replace(/.(?=.{4})/g, "*");
  
  
  }
}
export default validator
  

//console.log(validator.isValid('123')))//elemento validator(desde el const validator) y su propiedad isvalid

   




// function welcome (){
//     console.log('welcome to laboratoria'); 
//     return welcome  
// }
// welcome ();



//  let movie = {
//     title: 'Back to the Future',
//     stars : ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],

//  };
  
// console.log(movie);




