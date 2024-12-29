let gas = true
let tenemosComida = true
let hambre = true
let comida = 5

function cocinar () {
    if (comida >= 1) {
    tenemosComida = true
}else{ tenemosComida=false}
    if (tenemosComida && gas && hambre ) {
          comida = comida - 1
          hambre = false
        return (`cocinaste, ahora te quedan ${comida} de comida y ya no tienes hambre`)
}else {return "no tenes comida gil"}
}

function comprarComida (cantidad = 1) {
    comida = comida + cantidad
    return `*compraste comida* ahora tienes ${comida} de comida`
}
