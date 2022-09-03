function fibonacci(num) {
    if (num === 1) return [1]
    let lista = [1, 1]
    for (i=1; i<=num-2; i++) {
        lista.push(lista[i] + lista[i-1])
        
    }
    return lista
}

console.log(fibonacci(6))

