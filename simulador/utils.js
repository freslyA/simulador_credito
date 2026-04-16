function recuperarNumero(texto){
    let numero=document.getElementById(texto)
    numeroFloat=parseFloat(numero.value)
    redondeado=numeroFloat.toFixed(2)
    return redondeado
}
function mostrarTexto(texto,mensaje){
    let mostrar=document.getElementById(texto)
    mostrar.innerHTML=mensaje
}
function mostrarRedondeado(texto,numero){
    let mostrar=document.getElementById(texto)
    numeroRedondeado=numero.toFixed(2)
    mostrar.innerHTML=numeroRedondeado
}
function recuperarNumeroEntero(texto){
    let numero=document.getElementById(texto)
    numeroEntero=parseInt(numero.value)
    return numeroEntero
}