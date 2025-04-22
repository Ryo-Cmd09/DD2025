// Efectos al hacer clic en los corazones
document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const secretMessage = document.getElementById('secretMessage');
        secretMessage.classList.toggle('hidden');
        
        // Efecto de confeti morado
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#9c27b0', '#e1bee7', '#4a148c'],
                shapes: ['heart']
            });
        }
        
        // Efecto de escritura para el nombre
        if (secretMessage.classList.contains('hidden')) return;
        
        const nameElement = document.getElementById('name');
        nameElement.innerHTML = '';
        const nameText = "Bryan 💜"; // Cambia por tu nombre
        let i = 0;
        
        function typeWriter() {
            if (i < nameText.length) {
                nameElement.innerHTML += nameText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    });
});
