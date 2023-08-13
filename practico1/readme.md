# Calculadora Simple

¡Bienvenidos al sitio web de Calculadora Simple! Este programa está diseñado para realizar cálculos numéricos simples de manera rápida y eficiente. Ya sea que necesite sumar, restar, multiplicar o dividir, esta calculadora tiene cubierto todo lo básico.

## Tabla de Contenidos

- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Pruebas-Depuración](#Pruebas-Depuración)
- [Créditos](#créditos)
- [Contacto](#contacto)
- [Licencia](#licencia)

## Uso

-Características:

**-Suma**: Realiza sumas de dos números enteros o decimales.
**-Resta**: Realiza restas de dos números enteros o decimales.
**-Multiplicación**: Realiza multiplicaciones de dos números enteros o decimales.
**-División**: Realiza divisiones de dos números enteros o decimales. No se puede dividir un numero por cero.


### -Instrucciones de uso:

   - **-** Abre el archivo calculadora..
   - **-** Se deben cargar los datos en forma ordenada.
   - **-** Ingresa el primer número.
   - **-** Selecciona la operación que deseas realizar (suma, resta, multiplicación o división).
   - **-** Ingresa el segundo número.
   - **-** Presiona el Botón Calcular y obtén al instante el resultado en la pantalla.
   - **-** El botón "Reiniciar" setea la pantalla a su estado inicial para poder realizar otra operación.

#### Ejemplo
Si deseas sumar dos números, sigue estos pasos:
   - **-** Ejecuta el programa.
   - **-** Ingresa el primer número: 5.
   - **-** Selecciona la operación de suma.
   - **-** Ingresa el segundo número: 3.
   - **-** Presiona el botón Calcular.
   - **-** El resultado de 5 + 3 se muestra en pantalla: 8.


## Contribuciones

Las contribuciones son bienvenidas.
Si encuentra errores, tiene ideas para mejorar la calculadora o quiere agregar más funciones numéricas, siéntete libre de hacer una solicitud de extracción. Asegúrese de seguir las mejores prácticas de codificación.

## Pruebas-Depuración

Antes de lanzar la calculadora, se realizaron múltiples validaciones para asegurarse de que funcione correctamente y de que los posibles errores hayan sido minimizados.

### Prueba de ingresos de datos

Se limitó el ingreso de datos a formato numérico mediante input type="number" en el archivo HTML.
En el archivo JavaScript se limitó la entrada de campos vacíos o valores no numéricos mediante la aplicación de reglas condicionales con la función isNaN(). También se agregó una validación de datos con mensaje de aviso en caso de querer dividir un numero por cero.


### Prueba de resultado

Antes de imprimir el resultado por pantalla se validó el mismo según distintas condiciones arbitrarias.
Con la función isNan() se evaluó el resultado en caso que no sea un numero - en caso de que lo sea se envía mensaje por pantalla para corregir el problema.
El resultado mostrado en pantalla se limita arbitrariamente a 11 dígitos como máximo. En caso de superar se envía mensaje por pantalla.
El resultado mostrado en pantalla se limita arbitrariamente a números absolutos menores a 0.0000001 excluyendo al cero. En caso de superar se envía mensaje por pantalla.
A los resultados mayores a 1 se aplica la función .toLocaleString() la cual lo convierte en cadena y lo muestra con puntaciones de miles para facilitar su lectura.

## Ejemplo de Prueba

A continuación, se presenta un ejemplo simple de cómo podrías realizar pruebas en tu calculadora:

1. **Operación:** Suma
   - **Entrada:** 510 + 3
   - **Resultado Esperado:** 513
   - **Resultado Obtenido:** 513 (paso la prueba)

2. **Operación:** División
   - **Entrada:** 100 / 2
   - **Resultado Esperado:** 50
   - **Resultado Obtenido:** 50 (paso la prueba)

3. **Operación:** División (por cero)
   - **Entrada:** 23 / 0
   - **Resultado Esperado:** Error o manejo de división por cero
   - **Resultado Obtenido:** "Operación inválida, no se puede dividir por cero" (paso la prueba, el error es manejado correctamente)


## Contacto
Si tienes preguntas, sugerencias o comentarios, no dudes en contactar al equipo de desarrollo en fernandoiglesias005@gmail.com.
¡Esperamos que esta calculadora sea útil para tus cálculos numéricos básicos! ¡Diviértete calculando!


## Licencia
Este proyecto está bajo la Licencia de CapsuleCorp. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
