//Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
//Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function somma(...numbers) {
    return numbers.reduce((i, number) => i + number,0)
}

const mySum = somma(6,7,4,4,2,45,67)
console.log(mySum)