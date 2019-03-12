const escola = "Cod3r"
// começa com o indice 0

//pega o valor de indice 4
console.log(escola.charAt(4))

console.log(escola.charCodeAt(3))

//retorna através do que deseja o index do item
console.log(escola.indexOf('d'))

//percorre do index requerido até o final da string
console.log(escola.substring(1))

//percorre do index requerido até o final do index requerido
console.log(escola.substring(0, 3))

//concatenacao
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola '.concat(escola, '!').concat('!'))
console.log('Escola ' + escola + '!')

//alterar o conteudo
console.log(escola.replace(3, 'e')) //pode ser usado expressões não regulares

//alterando string para array dado um separador
console.log('Ana,Maria,Pedro'.split(','))