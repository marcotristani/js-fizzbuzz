// FizzBuzz
//Fin quando non arrivo a 100 scrivo i numeri uno alla volta incrementandoli di uno
let fizz = "";
let buzz = "";
let print = "";
let bool = false;
for (let i = 1; i <= 100; i++) {
    // se il numero è divisibile per 3 salvo valore fizz e imposto bool vera
    if ( i % 3 === 0 ) {
        fizz = "Fizz";
        bool = true;
    }
    if( i % 5 === 0 ){// se il numero è divisibile per 5 salvo valore buzz imposto bool vera
        buzz = "Buzz";
        bool = true;
    } 
    if( bool !== true ){// se bool è falsa e quindi il numero non è divisibile nè per 3 e nè per 5 allora salvo valore uguale al contatore
        print = i;
    }
    console.log(`${print}${fizz}${buzz}`)// stampo i valori concatenati ( se non sono stati salvati valori  non stamperò niente)
    //resetto i valori
    print = "";
    fizz = "";
    buzz = "";
    bool = false;
}
  
  
  // se il numero è divisibile per 3 e allo stesso tempo è divisibile per 5 allora scrivo fizzbuzz al posto del numero