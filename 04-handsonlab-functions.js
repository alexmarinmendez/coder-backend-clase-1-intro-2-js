function mostrarLista(array) {
    if (array.length === 0) return 'Lista vacía'
    array.forEach(item => console.log(item))
    return array.length
}

console.log(mostrarLista([]))
console.log(mostrarLista(['Juan', 1, 'b']))