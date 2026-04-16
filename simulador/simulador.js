//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    ingresos=recuperarNumero("txtIngresos")
    egresos=recuperarNumero("txtEgresos")
    disponible=calcularDisponible(ingresos,egresos)
    mostrarRedondeado("spnDisponible",disponible)
    capacidadPago=calcularCapacidadPago(disponible)
    mostrarRedondeado("spnCapacidadPago",capacidadPago)
    monto=recuperarNumeroEntero("txtMonto")
    plazo=recuperarNumeroEntero("txtPlazo")
    interes=recuperarNumeroEntero("txtTasaInteres")
    interesSimple=calcularInteresSimple(monto,interes,plazo)
    mostrarRedondeado("spnInteresPagar",interesSimple)
    totalPagar=calcularTotalPagar(monto,interesSimple)
    mostrarRedondeado("spnTotalPrestamo",totalPagar)
    cuotaMensual=calcularCuotaMensual(totalPagar,plazo)
    mostrarRedondeado("spnCuotaMensual",cuotaMensual)
}