function suma(a, b) {
    R = a + b;
    return R
}
function resta(a, b) {
    R = a - b;
    return R
}
function division(a, b) {
    R = a / b;
    return R
}
function multiplicacion(a, b) {
    R = a * b;
    return R
}
function calculadora(a, b, c) {
    switch (c) {
        case "suma":
            resultado = (suma(a, b))
            break;
        case "resta":
            resultado = (resta(a, b))
            break;
        case "division":
            resultado = (division(a, b))
            break;
        case "multiplicacion":
            resultado = (multiplicacion(a, b))
            break;
    }
    return resultado
}



// clickea y visualiza todos los efectos
//asignacion de valor de variables desde html
document.getElementById("boton").addEventListener("click", function () {
    let a = parseFloat(document.getElementById("numero1").value);
    let b = parseFloat(document.getElementById("numero2").value);
    let c = (document.getElementById("menu").value);

    // validacion de datos ingresados

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("intrucciones").textContent = "Valor numérico ingresado inválido";
        document.getElementById("parrafo").textContent = "...esperando para procesar";
    } else if (c == "division" && b == 0) {
        document.getElementById("intrucciones").textContent = "Operación inválida, no se puede dividir por cero"
        document.getElementById("parrafo").textContent = "...esperando para procesar";
    }
    else {
        (calculadora(a, b, c));

        // validacion del resultado
        if (isNaN(resultado)) {   //funcion isnan() evalua si el resultado no es un nº - validacion de ingreso de simbolos como valores
            document.getElementById("intrucciones").textContent = "Resultado inválido, ingrese un valor correcto";
            document.getElementById("parrafo").textContent = "...esperando para procesar";
        } else if (Math.abs(resultado) >= 99999999999) {
            document.getElementById("intrucciones").textContent = "El resultado es muy grande, es mayor a cien mil millones!"; // se limita arbitrariamente a 11 digitos
            document.getElementById("parrafo").textContent = "Límite de 11 dígitos enteros superado";
        } else if ((Math.abs(resultado) <= 0.0000001) && (Math.abs(resultado) != 0)) {  // validacion inferior de nº absolutos menor a 0.0000001 excluyendo al cero
            document.getElementById("intrucciones").textContent = "El valor del resultado es muy pequeño";  // .abs valida tando positivos como negativos
            document.getElementById("parrafo").textContent = "se desprecian los resultados menores a 0.0000001";
        } else if ((Math.abs(resultado) >= 1) || (resultado == 0)) {
            document.getElementById("parrafo").textContent = "El resultado es: " + resultado.toLocaleString() ;    //.toLocaleString() lo pasa a string y lo muestra con puntuciones de miles pero redondea los decimales mal
            document.getElementById("intrucciones").textContent = "¡¡OPERACIÓN EXITOSA!!";                      /// resultado para valores absolutos mayores a 1
        } else {
            document.getElementById("parrafo").textContent = "El resultado es: " + resultado;    
            document.getElementById("intrucciones").textContent = "¡¡OPERACIÓN EXITOSA!!";                            /// modulo menor a 1 sin .toLocaleString() porque redonde mal
        }
    }
});

//resetea y limpia formulario
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("intrucciones").textContent = "Ingrese valores numéricos válidos, elija la operación y presione Calcular";
    document.getElementById("formulario").reset();
    document.getElementById("parrafo").textContent = "....esperando para procesar";
});


