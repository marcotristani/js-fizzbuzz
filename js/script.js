// FizzBuzz
//Fin quando non arrivo a 100 scrivo i numeri uno alla volta incrementandoli di uno
let number;
const print = document.getElementById("number");
let output = '';
for (let i = 1; i <= 100; i++) {
    // se il numero è divisibile per 3 e allo stesso tempo è divisibile per 5 allora scrivo fizzbuzz al posto del numero
    
    if ( i % 3 === 0 && i % 5 === 0) {
        number = "FizzBuzz";
        output += `<li class="green"> ${number} </li>`;
    }else if( i % 5 === 0 ){// se il numero è divisibile per 5 scrivo il buzz al posto del numero( ma non deve essere divisibile per 3 anche)
        number = "Buzz";
        output += `<li class="blue"> ${number} </li>`;
    }else if( i % 3 === 0 ){// se il numero è divisibile per 3 scrivo fizz al posto del numero( ma non deve essere divisibile per 5 anche)
        number = "Fizz";
        output += `<li class="yellow"> ${number} </li>`;
    }else {
        number = i;
        output += `<li> ${number} </li>`;
    }
    console.log(number)
}
  
print.innerHTML = output;
  
  