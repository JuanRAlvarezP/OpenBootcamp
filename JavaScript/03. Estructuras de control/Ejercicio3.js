// Factorial de 10 utilizando un bucle for
let factorial_for = 1;
for (let i = 1; i <=10; i++) {
    factorial_for *= i;
    console.log(factorial_for);
}

console.log(`El factorial de 10 es igual a ${factorial_for}`)

// Factorial de 10 utilizando un bucle while
i = 1;
let factorial_while =1;
while (i <= 10) {
    factorial_while *= i;
    i++;
}

console.log(`El factorial de 10 es igual a ${factorial_while}`)

// Factorial de 10 utilizando un bucle while, una bifurcacion if y una sentencia break

i = 1;
let factorial_break = 1;
while (true) {
    factorial_break *= i;
    i++
    if (i > 10) {
        break
    }
}

console.log(`El factorial de 10 es igual a ${factorial_break}`)
