//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let disponible=ingresos-egresos
    if(disponible<0){
        return 0
    }else {
        return disponible
    }
}
function calcularCapacidadPago(montoDisponible){
    return montoDisponible/2
}
function calcularInteresSimple(monto,tasa,años){
    return (años*monto)*(tasa/100)
}