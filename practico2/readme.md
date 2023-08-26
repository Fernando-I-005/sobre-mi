# Juego de Piedra, Papel o Tijeras

Bienvenido al juego de Piedra, Papel o Tijeras. Este es un juego clásico donde compites contra la computadora en una serie de enfrentamientos. El objetivo es ser el primero en ganar 3 partidos. Aquí tienes una guía rápida sobre cómo jugar:

## Parte 1: Instrucciones para el Usuario

## Cómo Jugar Tradicionalmente

"Piedra, papel o tijeras" es un juego de manos y decisiones que se utiliza comúnmente para resolver disputas de manera rápida y divertida. El juego se juega entre dos personas, y cada una elige uno de los tres elementos: piedra, papel o tijeras. Cada elemento tiene una relación de victoria y derrota con los otros dos, creando un ciclo en el que cada elemento puede ganar a uno y perder contra el otro.

Aquí está la relación de victoria y derrota entre los elementos:

- Piedra vence a tijeras (la piedra rompe las tijeras).
- Tijeras vencen a papel (las tijeras cortan el papel).
- Papel vence a piedra (el papel envuelve la piedra).

Cuando ambos jugadores han hecho su elección, se determina el ganador de la siguiente manera:

- Si ambos jugadores eligen el mismo elemento, el resultado es un empate y generalmente se juega otra ronda.
- Si un jugador elige piedra y el otro elige tijeras, el jugador que eligió piedra gana.
- Si un jugador elige tijeras y el otro elige papel, el jugador que eligió tijeras gana.
- Si un jugador elige papel y el otro elige piedra, el jugador que eligió papel gana.

El juego es simple y se basa en las interacciones básicas entre los elementos. Es importante que ambos jugadores hagan su elección al mismo tiempo y sin conocer la elección del otro para mantener el factor sorpresa y la imprevisibilidad en el resultado. "Piedra, papel o tijeras" es popular entre los niños y también se utiliza como método para tomar decisiones de manera aleatoria o justa en situaciones donde no se puede llegar a un acuerdo fácilmente.



## Cómo Jugar

1. Ingresa un nombre de usuario válido en el campo proporcionado y presiona "Iniciar Juego".
2. Selecciona tu elección entre Piedra, Papel o Tijeras usando los botones correspondientes.
3. Una vez que hayas hecho tu elección, presiona el botón "Jugar".
4. La computadora elegirá aleatoriamente una opción.
5. Se determinará un ganador según las reglas clásicas:
   - Piedra vence a Tijeras.
   - Tijeras vencen a Papel.
   - Papel vence a Piedra.
6. Se registrarán los resultados del enfrentamiento en el marcador.
7. El juego continuará enfrentamiento tras enfrentamiento hasta que uno de los jugadores alcance 3 victorias.
8. El jugador que gane 3 partidos primero será el ganador del juego.







## Parte 2: Detalles de Implementación

## Estructura del HTML

La estructura del HTML del juego está diseñada para organizar y presentar de manera efectiva los elementos y la información necesaria para jugar al juego de Piedra, Papel o Tijeras. A continuación se detalla cómo se organiza:

1. **Contenedor Principal :**
   Este contenedor engloba los elementos principales del juego, incluyendo los botones de elección (Piedra, Papel, Tijera, Jugar y Reinicio) y los contenedores para mostrar las imágenes de las elecciones del jugador y la computadora.

2. **Botones de Elección:**
   - Piedra 
   - Papel 
   - Tijera 
   - Jugar
   - Reinicio 

3. **Contenedores de Imágenes:**
   - Jugador 
   - Computadora

4. **Contenedor de Marcador :**
   En este contenedor se muestran los resultados y el marcador del juego, incluyendo las pantallas de mensaje y ganador, así como los detalles de los partidos jugados y los partidos ganados por el jugador y la computadora.

   - Pantalla de Mensaje 
   - Pantalla de Ganador 
   - Partidos Jugados
   - Partidos Ganados por el Jugador
   - Partidos Ganados por la Computadora 

5. **Scripts:**
   Al final del `body` se incluye un enlace al archivo de script donde se implementa la lógica del juego y las interacciones con la interfaz de usuario.

Esta estructura HTML proporciona el marco necesario para visualizar y jugar el juego de Piedra, Papel o Tijeras de manera efectiva.


### Inicio del Juego y Registro de Usuario

1. Al cargar la página, todos los botones (Piedra, Papel, Tijeras, Jugar y Reiniciar) están deshabilitados, excepto el botón de enviar para ingresar el nombre de usuario.

2. Al presionar el botón de enviar, se ejecuta una función de carga de nombre:
   - Se realiza una validación para asegurarse de que el campo de nombre no esté vacío.
   - Se verifica si el nombre ingresado tiene más de 20 caracteres.
   - Si la validación es exitosa, se habilitan todos los botones (Piedra, Papel, Tijeras, Reiniciar) excepto el botón de jugar.
   - El nombre ingresado se registra en el marcador.
   - El texto en el primer párrafo se actualiza para dar la bienvenida al jugador por su nombre.

### Elección de Jugada y Enfrentamientos

3. Al presionar cualquiera de los botones de Piedra, Papel o Tijeras, se ejecuta la función correspondiente para obtener la jugada del usuario.
   - Se asigna el valor elegido por el usuario.
   - Se genera una jugada aleatoria para la computadora.
   - Se habilita el botón de jugar.
   - Se muestra en pantalla una imagen del valor elegido por el jugador y la computadora.
   - Se deshabilita el botón para ingresar el nombre de usuario.

4. Al presionar el botón de jugar, se ejecuta la función para determinar el ganador:
   - Se deshabilita el botón de jugar.
   - Se muestra en pantalla la imagen de la elección de la computadora.
   - Se comparan las jugadas y se determina el ganador según las reglas del juego.
   - Se actualiza el contador de partidos ganados para el jugador y la computadora en base a las condiciones.
   - Se actualiza el marcador en pantalla con los resultados.

### Finalización del Juego

5. Si el contador de partidos ganados de alguno de los jugadores llega a 3:
   - Se anuncia en pantalla al ganador del juego.
   - Se deshabilitan todos los botones (Piedra, Papel, Tijeras, Jugar) excepto el botón de reinicio.

### Reinicio del Juego

6. Al presionar el botón de reinicio:
   - La página se carga en su estado inicial, con todos los botones deshabilitados excepto el botón de enviar para ingresar el nombre de usuario.


## Contribuciones

Las contribuciones son bienvenidas.
Si encuentra errores, tiene ideas para mejorar la calculadora o quiere agregar más funciones numéricas, siéntete libre de hacer una solicitud de extracción. Asegúrese de seguir las mejores prácticas de codificación.


## Pruebas y Depuración

Al desarrollar el proyecto, se llevaron a cabo pruebas y depuración exhaustivas para asegurarte de que el juego funcione correctamente y sea confiable. Aquí hay algunas áreas clave que fueron inspeccionas:

1. **Interacción de Usuario:** Se controla  que los botones respondan adecuadamente a las interacciones del usuario, como hacer clic en las elecciones y en el botón "Jugar".

2. **Lógica del Juego:** Se verifica que las reglas del juego se apliquen correctamente, que las jugadas se comparen adecuadamente y que se determine el ganador de manera precisa.

3. **Actualización de Pantalla:** Se comprueba que la información se muestre correctamente en pantalla, incluidos los marcadores, las imágenes de las jugadas y los mensajes de resultado.

4. **Gestión de Partidas:** Se realiza pruebas para garantizar que el juego reconozca correctamente cuándo un jugador ha ganado 3 partidas y anuncie al ganador de manera correcta.

5. **Carga y Reinicio:** Se controla que el juego se cargue correctamente desde cero y que el botón de reinicio restablezca todas las variables y la interfaz.


## Contacto
Si tienes preguntas, sugerencias o comentarios, no dudes en contactar al equipo de desarrollo en fernandoiglesias005@gmail.com.
¡Esperamos que esta calculadora sea útil para tus cálculos numéricos básicos! ¡Diviértete calculando!


## Licencia
Este proyecto está bajo la Licencia de CapsuleCorp. Consulta el archivo [LICENSE](LICENSE) para obtene más detalles.

¡Diviértete jugando Piedra, Papel o Tijeras!








