// Temporizador
function actualizarTemporizador() {
    const fechaEvento = new Date('2025-10-10T21:30:00').getTime();
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;
    
    // Cálculos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
    // Mostrar resultados
    document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
    
    // Si el tiempo ya pasó
    if (distancia < 0) {
        clearInterval(temporizador);
        document.getElementById('cuenta-regresiva').innerHTML = '<h3>¡El evento ya comenzó!</h3>';
    }
}

// Botón Mercado Pago
document.querySelector('.btn-mercadopago')?.addEventListener('click', function() {
    alert('Serás redirigido a Mercado Pago para realizar tu regalo. ¡Gracias!');
    // window.location.href = 'URL_DE_MERCADO_PAGO';
});

// Efectos de nieve
function createSnowflakes() {
    const snowflakesCount = Math.min(80, Math.floor(window.innerWidth / 10));
    
    for (let i = 0; i < snowflakesCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Tamaño aleatorio
        const size = Math.random() * 6 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        // Posición inicial aleatoria
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.top = `${-size}px`;
        
        // Velocidad y opacidad aleatorias
        const speed = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.8 + 0.2;
        snowflake.style.opacity = opacity;
        
        document.body.appendChild(snowflake);
        
        // Animación de caída
        animateSnowflake(snowflake, speed);
    }
}

function animateSnowflake(snowflake, speed) {
    let positionY = parseFloat(snowflake.style.top);
    let positionX = parseFloat(snowflake.style.left);
    const drift = Math.random() * 2 - 1; // Movimiento horizontal aleatorio
    
    function fall() {
        positionY += speed;
        positionX += drift;
        
        // Si el copo sale por abajo, volver a arriba
        if (positionY > window.innerHeight) {
            positionY = -10;
            positionX = Math.random() * window.innerWidth;
        }
        
        // Si el copo sale por los lados, aparecer en el otro lado
        if (positionX > window.innerWidth) {
            positionX = 0;
        } else if (positionX < 0) {
            positionX = window.innerWidth;
        }
        
        snowflake.style.top = `${positionY}px`;
        snowflake.style.left = `${positionX}px`;
        
        requestAnimationFrame(fall);
    }
    
    fall();
}

function createIceCrystals() {
    const crystalsCount = Math.min(15, Math.floor(window.innerWidth / 50));
    
    for (let i = 0; i < crystalsCount; i++) {
        const crystal = document.createElement('div');
        crystal.classList.add('ice-crystal');
        
        // Tamaño aleatorio
        const size = Math.random() * 20 + 15;
        
        // Forma de cristal
        crystal.style.borderWidth = `0 ${size/2}px ${size}px ${size/2}px`;
        crystal.style.borderColor = `transparent transparent rgba(200, 240, 255, 0.7) transparent`;
        
        // Posición aleatoria
        crystal.style.left = `${Math.random() * window.innerWidth}px`;
        crystal.style.top = `${Math.random() * window.innerHeight}px`;
        
        // Velocidad de rotación aleatoria
        crystal.style.animationDuration = `${Math.random() * 10 + 5}s`;
        
        document.body.appendChild(crystal);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar temporizador
    const temporizador = setInterval(actualizarTemporizador, 1000);
    actualizarTemporizador();
    
    // Crear efectos de nieve
    createSnowflakes();
    createIceCrystals();
    
    // Ajustar efectos al cambiar tamaño de pantalla
    window.addEventListener('resize', function() {
        document.querySelectorAll('.snowflake, .ice-crystal').forEach(el => el.remove());
        createSnowflakes();
        createIceCrystals();
    });
});



// Temporizador
// function actualizarTemporizador() {
//     // Fecha del evento (puedes cambiarla)
//     const fechaEvento = new Date('2025-10-10T21:30:00').getTime();
//     const ahora = new Date().getTime();
//     const distancia = fechaEvento - ahora;
    
//     // Cálculos
//     const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
//     const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
//     const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
//     // Mostrar resultados
//     document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
//     document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
//     document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
//     document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
    
//     // Si el tiempo ya pasó
//     if (distancia < 0) {
//         clearInterval(temporizador);
//         document.getElementById('cuenta-regresiva').innerHTML = '<h3>¡El evento ya comenzó!</h3>';
//     }
// }

// // Actualizar cada segundo
// const temporizador = setInterval(actualizarTemporizador, 1000);
// actualizarTemporizador(); // Llamar inmediatamente

// // Botón Mercado Pago
// document.querySelector('.btn-mercadopago').addEventListener('click', function() {
//     alert('Serás redirigido a Mercado Pago para realizar tu regalo. ¡Gracias!');
//     // Aquí podrías redirigir a un link real de Mercado Pago
//     // window.location.href = 'https://www.mercadopago.com.ar/...';
// });

//  // Crear copos de nieve
//         function createSnowflakes() {
//             const snowflakesCount = 100;
            
//             for (let i = 0; i < snowflakesCount; i++) {
//                 const snowflake = document.createElement('div');
//                 snowflake.classList.add('snowflake');
                
//                 // Tamaño aleatorio
//                 const size = Math.random() * 8 + 2;
//                 snowflake.style.width = `${size}px`;
//                 snowflake.style.height = `${size}px`;
                
//                 // Posición inicial aleatoria
//                 snowflake.style.left = `${Math.random() * window.innerWidth}px`;
//                 snowflake.style.top = `${-size}px`;
                
//                 // Velocidad y opacidad aleatorias
//                 const speed = Math.random() * 3 + 1;
//                 const opacity = Math.random() * 0.8 + 0.2;
//                 snowflake.style.opacity = opacity;
                
//                 document.body.appendChild(snowflake);
                
//                 // Animación de caída
//                 animateSnowflake(snowflake, speed);
//             }
//         }
        
//         function animateSnowflake(snowflake, speed) {
//             let positionY = parseFloat(snowflake.style.top);
//             let positionX = parseFloat(snowflake.style.left);
//             const drift = Math.random() * 2 - 1; // Movimiento horizontal aleatorio
            
//             function fall() {
//                 positionY += speed;
//                 positionX += drift;
                
//                 // Si el copo sale por abajo, volver a arriba
//                 if (positionY > window.innerHeight) {
//                     positionY = -10;
//                     positionX = Math.random() * window.innerWidth;
//                 }
                
//                 // Si el copo sale por los lados, aparecer en el otro lado
//                 if (positionX > window.innerWidth) {
//                     positionX = 0;
//                 } else if (positionX < 0) {
//                     positionX = window.innerWidth;
//                 }
                
//                 snowflake.style.top = `${positionY}px`;
//                 snowflake.style.left = `${positionX}px`;
                
//                 requestAnimationFrame(fall);
//             }
            
//             fall();
//         }
        
//         // Crear cristales de hielo
//         function createIceCrystals() {
//             const crystalsCount = 20;
            
//             for (let i = 0; i < crystalsCount; i++) {
//                 const crystal = document.createElement('div');
//                 crystal.classList.add('ice-crystal');
                
//                 // Tamaño aleatorio
//                 const size = Math.random() * 30 + 20;
                
//                 // Forma de cristal
//                 crystal.style.borderWidth = `0 ${size/2}px ${size}px ${size/2}px`;
//                 crystal.style.borderColor = `transparent transparent rgba(200, 240, 255, 0.7) transparent`;
                
//                 // Posición aleatoria
//                 crystal.style.left = `${Math.random() * window.innerWidth}px`;
//                 crystal.style.top = `${Math.random() * window.innerHeight}px`;
                
//                 // Velocidad de rotación aleatoria
//                 crystal.style.animationDuration = `${Math.random() * 10 + 5}s`;
                
//                 document.body.appendChild(crystal);
//             }
//         }
        
//         // Efecto especial al hacer clic en el botón
//         document.getElementById('magicBtn').addEventListener('click', function() {
//             // Explosión de copos
//             for (let i = 0; i < 50; i++) {
//                 setTimeout(() => {
//                     const spark = document.createElement('div');
//                     spark.classList.add('snowflake');
//                     spark.style.width = '10px';
//                     spark.style.height = '10px';
//                     spark.style.left = `${Math.random() * window.innerWidth}px`;
//                     spark.style.top = `${window.innerHeight/2}px`;
//                     spark.style.backgroundColor = `hsl(${Math.random() * 60 + 180}, 100%, 80%)`;
//                     spark.style.boxShadow = `0 0 10px 2px hsl(${Math.random() * 60 + 180}, 100%, 80%)`;
                    
//                     document.body.appendChild(spark);
                    
//                     // Animación de explosión
//                     let posX = parseFloat(spark.style.left);
//                     let posY = parseFloat(spark.style.top);
//                     const angle = Math.random() * Math.PI * 2;
//                     const explosionSpeed = Math.random() * 5 + 5;
//                     const xSpeed = Math.cos(angle) * explosionSpeed;
//                     const ySpeed = Math.sin(angle) * explosionSpeed;
                    
//                     let opacity = 1;
                    
//                     function explode() {
//                         posX += xSpeed;
//                         posY += ySpeed;
//                         opacity -= 0.02;
                        
//                         spark.style.left = `${posX}px`;
//                         spark.style.top = `${posY}px`;
//                         spark.style.opacity = opacity;
                        
//                         if (opacity > 0) {
//                             requestAnimationFrame(explode);
//                         } else {
//                             spark.remove();
//                         }
//                     }
                    
//                     explode();
//                 }, i * 50);
//             }
            
//             // Cambiar color del título temporalmente
//             const h1 = document.querySelector('h1');
//             h1.style.textShadow = '0 0 15px #ff00ff, 0 0 30px #ff00ff, 0 0 45px #ff00ff';
//             setTimeout(() => {
//                 h1.style.textShadow = '0 0 10px #00bfff, 0 0 20px #00bfff';
//             }, 1000);
//         });
        
//         // Inicializar efectos
//         window.addEventListener('load', () => {
//             createSnowflakes();
//             createIceCrystals();
//         });