// FizzBuzz
//Fin quando non arrivo a 100 scrivo i numeri uno alla volta incrementandoli di uno
let alternative;
for (let i = 1; i <= 100; i++) {
    // se il numero è divisibile per 3 scrivo fizz al posto del numero( ma non deve essere divisibile per 5 anche)
    if ( i % 3 === 0 && i % 5 !== 0 ) {
        alternative = "Fizz";
        console.log(alternative);
    }else if( i % 5 === 0 && i % 3 !== 0 ){
        alternative = "Buzz";
        console.log(alternative);
    }else {
        console.log(i);
        
    }
}
  
  // se il numero è divisibile per 5 scrivo il buzz al posto del numero( ma non deve essere divisibile per 3 anche)
  // se il numero è divisibile per 3 e allo stesso tempo è divisibile per 5 allora scrivo fizzbuzz al posto del numero