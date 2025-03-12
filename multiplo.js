const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1) => {
    rl.question('Ingrese el segundo número: ', (num2) => {
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (num1 % num2 === 0) {
            console.log(`${num1} es múltiplo de ${num2}`);
        } else if (num2 % num1 === 0) {
            console.log(`${num2} es múltiplo de ${num1}`);
        } else {
            console.log("Ninguno es múltiplo del otro");
        }
        
        rl.close();
    });
});