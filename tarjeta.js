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
document.querySelector('.btn-mercadopago')?.addEventListener('click', function () {
    alert('Serás redirigido a Mercado Pago para realizar tu regalo. ¡Gracias!');
    // window.location.href = 'URL_DE_MERCADO_PAGO';
});

// Crear copos de nieve con iconos
function createSnowflakes() {
    const container = document.getElementById('snowflakes');
    if (!container) return;
    
    const snowflakeSymbols = ['❄', '❅', '❆', '✻', '✼', '❄', '❅'];
    const count = 50;

    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        // Seleccionar un símbolo aleatorio
        const randomSymbol = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
        snowflake.textContent = randomSymbol;

        // Posición inicial aleatoria
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.top = -Math.random() * 100 + 'vh';

        // Duración de animación aleatoria
        const duration = 8 + Math.random() * 12;
        snowflake.style.animationDuration = duration + 's';

        // Retraso inicial aleatorio
        snowflake.style.animationDelay = Math.random() * 5 + 's';

        // Tamaño adicional aleatorio
        const sizeVariation = 0.5 + Math.random();
        snowflake.style.transform = `scale(${sizeVariation})`;

        container.appendChild(snowflake);
    }
}

// Crear cristales de hielo
function createIceCrystals() {
    const container = document.getElementById('ice-crystals');
    if (!container) return;
    
    const crystalsCount = Math.min(5, Math.floor(window.innerWidth / 100));

    for (let i = 0; i < crystalsCount; i++) {
        const crystal = document.createElement('div');
        crystal.classList.add('ice-crystal');

        // Tamaño aleatorio
        const size = Math.random() * 15 + 10;

        // Forma de cristal
        crystal.style.borderWidth = `0 ${size / 2}px ${size}px ${size / 2}px`;
        crystal.style.borderColor = `transparent transparent rgba(200, 240, 255, 0.7) transparent`;

        // Posición aleatoria
        crystal.style.left = `${Math.random() * 100}%`;
        crystal.style.top = `${Math.random() * 100}%`;

        // Velocidad de rotación aleatoria
        crystal.style.animationDuration = `${Math.random() * 10 + 5}s`;

        container.appendChild(crystal);
    }
}

// Efectos de nieve para cada sección
function createSectionSnowflakes() {
    const sections = document.querySelectorAll('.vertical-section');
    const snowflakesCount = Math.min(20, Math.floor(window.innerWidth / 15));

    sections.forEach(section => {
        // Crear contenedor para copos de nieve en esta sección
        const snowContainer = document.createElement('div');
        snowContainer.className = 'section-snowflakes';
        snowContainer.style.position = 'absolute';
        snowContainer.style.top = '0';
        snowContainer.style.left = '0';
        snowContainer.style.width = '100%';
        snowContainer.style.height = '100%';
        snowContainer.style.overflow = 'hidden';
        snowContainer.style.pointerEvents = 'none';
        snowContainer.style.zIndex = '1';

        section.style.position = 'relative';
        section.appendChild(snowContainer);

        // Crear copos de nieve para esta sección
        for (let i = 0; i < snowflakesCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'section-snowflake';
            
            const randomSymbol = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
            snowflake.textContent = randomSymbol;
            
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.top = -Math.random() * 100 + 'px';
            snowflake.style.animationDuration = (5 + Math.random() * 15) + 's';
            snowflake.style.animationDelay = Math.random() * 5 + 's';
            snowflake.style.opacity = 0.7;
            snowflake.style.fontSize = (0.5 + Math.random() * 1.5) + 'em';
            
            snowContainer.appendChild(snowflake);
        }
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
    // Iniciar temporizador
    const temporizador = setInterval(actualizarTemporizador, 1000);
    actualizarTemporizador();

    // Crear contenedores para efectos si no existen
    if (!document.getElementById('snowflakes')) {
        const snowflakesContainer = document.createElement('div');
        snowflakesContainer.id = 'snowflakes';
        document.body.appendChild(snowflakesContainer);
    }
    
    if (!document.getElementById('ice-crystals')) {
        const iceContainer = document.createElement('div');
        iceContainer.id = 'ice-crystals';
        document.body.appendChild(iceContainer);
    }

    // Crear efectos de nieve y cristales
    createSectionSnowflakes();
    createSnowflakes();
    createIceCrystals();

    // Ajustar efectos al cambiar tamaño de pantalla
    window.addEventListener('resize', function () {
        document.querySelectorAll('.snowflake, .ice-crystal, .section-snowflake').forEach(el => el.remove());
        document.querySelectorAll('.section-snowflakes').forEach(el => el.remove());
        createSnowflakes();
        createIceCrystals();
        createSectionSnowflakes();
    });
});
// Función para crear copos de nieve
function createSnowflakes(event, container) {
    const symbols = ['❄', '❅', '❆', '✻', '✼'];
    const rect = container.getBoundingClientRect();
    
    // Posición del toque/clic relativa al contenedor
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Crear 12-15 copos de nieve
    const flakeCount = 12 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < flakeCount; i++) {
        const flake = document.createElement('div');
        flake.className = 'snow-flake';
        flake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Posición inicial (donde se hizo clic/toque)
        flake.style.left = `${x}px`;
        flake.style.top = `${y}px`;
        
        // Dirección y distancia aleatoria
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 70;
        flake.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
        flake.style.setProperty('--ty', `${Math.sin(angle) * distance - 20}px`);
        
        // Tamaño y rotación aleatorios
        const size = 0.7 + Math.random() * 0.6;
        flake.style.fontSize = `${size}rem`;
        flake.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Duración y retraso aleatorio
        const duration = 0.8 + Math.random() * 0.4;
        flake.style.animationDuration = `${duration}s`;
        flake.style.animationDelay = `${Math.random() * 0.2}s`;
        
        container.appendChild(flake);
        
        // Eliminar el copo después de la animación
        setTimeout(() => {
            flake.remove();
        }, duration * 1000);
    }
}

// Configurar eventos para desktop y móvil
document.querySelectorAll('.snow-click-effect').forEach(section => {
    const container = section.querySelector('.snow-click-container');
    
    // Evento para mouse
    section.addEventListener('mousedown', (e) => {
        createSnowflakes(e, container);
    });
    
    // Evento para pantallas táctiles
    section.addEventListener('touchstart', (e) => {
        // Prevenir el comportamiento táctil por defecto
        e.preventDefault();
        createSnowflakes(e.touches[0], container);
    }, { passive: false });
});

// function actualizarTemporizador() {
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

// // Botón Mercado Pago
// document.querySelector('.btn-mercadopago')?.addEventListener('click', function () {
//     alert('Serás redirigido a Mercado Pago para realizar tu regalo. ¡Gracias!');
//     // window.location.href = 'URL_DE_MERCADO_PAGO';
// });

// // Crear copos de nieve con iconos
// function createSnowflakes() {
//     const container = document.getElementById('snowflakes');
//     if (!container) return;
    
//     const snowflakeSymbols = ['❄', '❅', '❆', '✻', '✼', '❄', '❅'];
//     const count = 50;

//     for (let i = 0; i < count; i++) {
//         const snowflake = document.createElement('div');
//         snowflake.className = 'snowflake';

//         // Seleccionar un símbolo aleatorio
//         const randomSymbol = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
//         snowflake.textContent = randomSymbol;

//         // Posición inicial aleatoria
//         snowflake.style.left = Math.random() * 100 + 'vw';
//         snowflake.style.top = -Math.random() * 100 + 'vh';

//         // Duración de animación aleatoria
//         const duration = 8 + Math.random() * 12;
//         snowflake.style.animationDuration = duration + 's';

//         // Retraso inicial aleatorio
//         snowflake.style.animationDelay = Math.random() * 5 + 's';

//         // Tamaño adicional aleatorio
//         const sizeVariation = 0.5 + Math.random();
//         snowflake.style.transform = `scale(${sizeVariation})`;

//         container.appendChild(snowflake);
//     }
// }

// // Crear cristales de hielo
// function createIceCrystals() {
//     const container = document.getElementById('ice-crystals');
//     if (!container) return;
    
//     const crystalsCount = Math.min(5, Math.floor(window.innerWidth / 100));

//     for (let i = 0; i < crystalsCount; i++) {
//         const crystal = document.createElement('div');
//         crystal.classList.add('ice-crystal');

//         // Tamaño aleatorio
//         const size = Math.random() * 15 + 10;

//         // Forma de cristal
//         crystal.style.borderWidth = `0 ${size / 2}px ${size}px ${size / 2}px`;
//         crystal.style.borderColor = `transparent transparent rgba(200, 240, 255, 0.7) transparent`;

//         // Posición aleatoria
//         crystal.style.left = `${Math.random() * 100}%`;
//         crystal.style.top = `${Math.random() * 100}%`;

//         // Velocidad de rotación aleatoria
//         crystal.style.animationDuration = `${Math.random() * 10 + 5}s`;

//         container.appendChild(crystal);
//     }
// }

// // Efectos de nieve para cada sección
// function createSectionSnowflakes() {
//     const sections = document.querySelectorAll('section');
//     const snowflakesCount = Math.min(20, Math.floor(window.innerWidth / 15));

//     sections.forEach(section => {
//         // Crear contenedor para copos de nieve en esta sección
//         const snowContainer = document.createElement('div');
//         snowContainer.className = 'section-snowflakes';
//         snowContainer.style.position = 'absolute';
//         snowContainer.style.top = '0';
//         snowContainer.style.left = '0';
//         snowContainer.style.width = '100%';
//         snowContainer.style.height = '100%';
//         snowContainer.style.overflow = 'hidden';
//         snowContainer.style.pointerEvents = 'none';
//         snowContainer.style.zIndex = '1';

//         section.style.position = 'relative';
//         section.appendChild(snowContainer);

//         // Crear copos de nieve para esta sección
//         for (let i = 0; i < snowflakesCount; i++) {
//             const snowflake = document.createElement('div');
//             snowflake.className = 'section-snowflake';
            
//             const randomSymbol = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
//             snowflake.textContent = randomSymbol;
            
//             snowflake.style.left = Math.random() * 100 + '%';
//             snowflake.style.top = -Math.random() * 100 + 'px';
//             snowflake.style.animationDuration = (5 + Math.random() * 15) + 's';
//             snowflake.style.animationDelay = Math.random() * 5 + 's';
//             snowflake.style.opacity = 0.7;
//             snowflake.style.fontSize = (0.5 + Math.random() * 1.5) + 'em';
            
//             snowContainer.appendChild(snowflake);
//         }
//     });
// }

// // Inicialización
// document.addEventListener('DOMContentLoaded', function () {
//     // Iniciar temporizador
//     const temporizador = setInterval(actualizarTemporizador, 1000);
//     actualizarTemporizador();

//     // Crear contenedores para efectos si no existen
//     if (!document.getElementById('snowflakes')) {
//         const snowflakesContainer = document.createElement('div');
//         snowflakesContainer.id = 'snowflakes';
//         document.body.appendChild(snowflakesContainer);
//     }
    
//     if (!document.getElementById('ice-crystals')) {
//         const iceContainer = document.createElement('div');
//         iceContainer.id = 'ice-crystals';
//         document.body.appendChild(iceContainer);
//     }

//     // Crear efectos de nieve y cristales
//     createSectionSnowflakes();
//     createSnowflakes();
//     createIceCrystals();

//     // Ajustar efectos al cambiar tamaño de pantalla
//     window.addEventListener('resize', function () {
//         document.querySelectorAll('.snowflake, .ice-crystal, .section-snowflake').forEach(el => el.remove());
//         document.querySelectorAll('.section-snowflakes').forEach(el => el.remove());
//         createSnowflakes();
//         createIceCrystals();
//         createSectionSnowflakes();
//     });
// });

