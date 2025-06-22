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

// Efectos de nieve para cada sección
function createSnowflakes() {
    const sections = document.querySelectorAll('section');
    const snowflakesCount = Math.min(20, Math.floor(window.innerWidth / 15));
    
    sections.forEach(section => {
        // Crear contenedor para copos de nieve en esta sección
        const snowContainer = document.createElement('div');
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
            snowflake.classList.add('snowflake');
            
            // Tamaño aleatorio
            const size = Math.random() * 6 + 2;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            
            // Posición inicial aleatoria
            snowflake.style.left = `${Math.random() * 100}%`;
            snowflake.style.top = `${-size}px`;
            
            // Velocidad y opacidad aleatorias
            const speed = Math.random() * 2 + 1;
            const opacity = Math.random() * 0.8 + 0.2;
            snowflake.style.opacity = opacity;
            
            snowContainer.appendChild(snowflake);
            
            // Animación de caída para este copo
            animateSnowflake(snowflake, speed, section);
        }
    });
}

function animateSnowflake(snowflake, speed, section) {
    let positionY = parseFloat(snowflake.style.top);
    let positionX = parseFloat(snowflake.style.left);
    const drift = Math.random() * 2 - 1; // Movimiento horizontal aleatorio
    
    function fall() {
        positionY += speed;
        positionX += drift * 0.5;
        
        const sectionRect = section.getBoundingClientRect();
        
        // Si el copo sale por abajo, volver a arriba
        if (positionY > sectionRect.height) {
            positionY = -10;
            positionX = Math.random() * 100;
        }
        
        // Si el copo sale por los lados, aparecer en el otro lado
        if (positionX > 100) {
            positionX = 0;
        } else if (positionX < 0) {
            positionX = 100;
        }
        
        snowflake.style.top = `${positionY}px`;
        snowflake.style.left = `${positionX}%`;
        
        requestAnimationFrame(fall);
    }
    
    fall();
}

function createIceCrystals() {
    const sections = document.querySelectorAll('section');
    const crystalsCount = Math.min(5, Math.floor(window.innerWidth / 100));
    
    sections.forEach(section => {
        // Crear cristales de hielo para esta sección
        for (let i = 0; i < crystalsCount; i++) {
            const crystal = document.createElement('div');
            crystal.classList.add('ice-crystal');
            
            // Tamaño aleatorio
            const size = Math.random() * 15 + 10;
            
            // Forma de cristal
            crystal.style.borderWidth = `0 ${size/2}px ${size}px ${size/2}px`;
            crystal.style.borderColor = `transparent transparent rgba(200, 240, 255, 0.7) transparent`;
            
            // Posición aleatoria dentro de la sección
            crystal.style.left = `${Math.random() * 100}%`;
            crystal.style.top = `${Math.random() * 100}%`;
            
            // Velocidad de rotación aleatoria
            crystal.style.animationDuration = `${Math.random() * 10 + 5}s`;
            
            section.appendChild(crystal);
        }
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar temporizador
    const temporizador = setInterval(actualizarTemporizador, 1000);
    actualizarTemporizador();
    
    // Crear efectos de nieve para cada sección
    createSnowflakes();
    createIceCrystals();
    
    // Ajustar efectos al cambiar tamaño de pantalla
    window.addEventListener('resize', function() {
        document.querySelectorAll('.snowflake, .ice-crystal').forEach(el => el.remove());
        createSnowflakes();
        createIceCrystals();
    });
});



