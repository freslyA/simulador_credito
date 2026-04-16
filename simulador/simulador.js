//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    ingresos=recuperarNumero("txtIngresos")
    egresos=recuperarNumero("txtEgresos")
    disponible=calcularDisponible(ingresos,egresos)
    mostrarTexto("spnDisponible",disponible)
}