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
function calcularTotalPagar(monto,interes){
    return monto+interes+100
}
function calcularCuotaMensual(total,años){
    meses=años*12
    return total/meses
}
function aprobarCredito(capacidad,cuota){
    if(capacidad>cuota){
        return true
    }else{
        return false
    }
}
function sumarGastos(a1,a2,a3){
    return a1+a2+a3
}
function validarNumero(input){
    let valor = input.value;
    let error = input.nextElementSibling; // el <small> debajo

    // limpiar mensaje
    error.textContent = "";

    if(valor === ""){
        error.textContent = "El campo no puede estar vacío";
        return false;
    }

    if(isNaN(valor)){
        error.textContent = "Solo se permiten números";
        return false;
    }

    if(Number(valor) < 0){
        error.textContent = "No se permiten negativos";
        return false;
    }

    if(valor.length > 5){
        error.textContent = "Máximo 5 caracteres";
        return false;
    }

    return true;
}