// FizzBuzz
//Fin quando non arrivo a 100 scrivo i numeri uno alla volta incrementandoli di uno
let number;
const print = document.getElementById("number");
for (let i = 1; i <= 100; i++) {
    // se il numero è divisibile per 3 e allo stesso tempo è divisibile per 5 allora scrivo fizzbuzz al posto del numero
    
    if ( i % 3 === 0 && i % 5 === 0) {
        number = "FizzBuzz";
        print.innerHTML += `<li class="green"> ${number} <li>`;
    }else if( i % 5 === 0 ){// se il numero è divisibile per 5 scrivo il buzz al posto del numero( ma non deve essere divisibile per 3 anche)
        number = "Buzz";
        print.innerHTML += `<li class="blue"> ${number} <li>`;
    }else if( i % 3 === 0 ){// se il numero è divisibile per 3 scrivo fizz al posto del numero( ma non deve essere divisibile per 5 anche)
        number = "Fizz";
        print.innerHTML += `<li class="yellow"> ${number} <li>`;
    }else {
        number = i;
        print.innerHTML += `<li class="black"> ${number} <li>`;
    }
    console.log(number)
}
  
  
  