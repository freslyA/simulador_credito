//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    ingresos=recuperarNumero("txtIngresos")
    arriendo=recuperarNumero("txtArriendo")
    comida=recuperarNumero("txtAlimentacion")
    varios=recuperarNumero("txtVarios")
    gastos=sumarGastos(arriendo,arriendo,varios)
    mostrarRedondeado("gastos",gastos)
    disponible=calcularDisponible(ingresos,gastos)
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
    credito=aprobarCredito(capacidadPago,cuotaMensual)
    if(credito==true){
        mostrarTexto("spnEstadoCredito","APROBADO")
    }
    else{
        mostrarTexto("spnEstadoCredito","NO APROBADO")
    }
}
function reiniciar(){
    borrarTexto("txtIngresos","")
    borrarTexto("txtEgresos","")
    mostrarTexto("spnDisponible","")
    mostrarTexto("spnCapacidadPago","")
    borrarTexto("txtMonto","")
    borrarTexto("txtPlazo","")
    borrarTexto("txtTasaInteres","")
    mostrarTexto("spnInteresPagar","")
    mostrarTexto("spnTotalPrestamo","")
    mostrarTexto("spnCuotaMensual","")
    mostrarTexto("spnEstadoCredito","ANALIZANDO...")
}