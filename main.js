var form = document.querySelector()
// const resultElement = document.getElementById("result");

function genPrimes() {
    
    var n1 = document.inputs.num1.value;
    var n2 = document.inputs.num2.value;
    var primes = new Array();

    if (n1 < n2) {
        var start = n1;
        var end = n2;

    } else if (n2< n1){
        var start = n2;
        var end = n1;
    
    }

    while (start <= end) {
        if (checkPrime(start) === true) {
            primes[primes.length] = start;
        }
        start = start + 1;   
    }

    if (primes.length === 0) {
        document.getElementById('result2').innerHTML = "Invalid input, please try again";
    } else {
        listPrimes(primes);
    }
}

function checkPrime(num) {
    let check = true;
    for (let i = 2; i <= Math.ceil(num / 2); i++) {
        if ((num % i) === 0) {
            check = false;
            break;
        }
    }
    return check;
}

function listPrimes(vals) {
    let text = "<h2>Prime Numbers</h2>";
    for (i = 0; i < vals.length; i++) {
        text += vals[i] + ",";
    }
    document.getElementById('result1').innerHTML = text;
}
    
//     //clear the result div
//     document.getElementById("result").innerHTML = '';

//     //loop till i equals to end
//     for (i = start; i <= end; i++) {
//         c = 0;
//         for (j = 1; j <= i; j++) {
//             // % modules will give the reminder value, so if the reminder is 0 then it is divisible
//             if (i % j === 0) {
//                 //increment the value of c
//                 c++;
//             }
//         }

//         //if the value of c is 2 then it is a prime number
//         //because a prime number should be exactly divisible by 2 times only (itself and 1)
//         if (c == 2) {
//             document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
//         }
//     }
// }
    
// /* function calcPrimeNumber() {

//     
//  */

// //check if inputs are prime
// /* function primes() {
//     const num1 = document.getElementById("num1");
//     const num2 = document.getElementById("num2");

//     //find start and end 
//     if (num1 < num2) {
//         let start = num1;
//         let end = num2;
//         //check 
//     }
//     else {
//         let start = num2;
//         let end = num1;

//     }

//     if (start >= 2 && end >= 2) {
//         if (start < 100 && end < 100) {
//             if (start % 2 === 0)
//         }
//     } 
//     else {
//         result1 = "Invalid input, please try again";
//     } 
//     else if ()
//     for(start=)
//         result1 = "Invalid input, please try again";
// } */