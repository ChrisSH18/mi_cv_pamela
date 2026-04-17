const btn = document.getElementById('theme-toggle');
const icon = btn.querySelector('i'); // Buscamos el icono dentro del botón

if (btn && icon) {
    btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme, newIconClass;
        
        if (currentTheme === 'light') {
            newTheme = 'dark';
            newIconClass = 'fas fa-moon';
        } else {
            newTheme = 'light';
            newIconClass = 'fas fa-sun';
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        
        icon.className = newIconClass;
        
        console.log("Cambiando a modo: " + newTheme);
    });
} else {
    console.error("No se encontró el botón con el ID 'theme-toggle' o el icono interno.");
}
document.getElementById('emailBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Evita que la página salte al inicio
    
    const email = "pamela08.09.25@gmail.com";
    const subject = "Contacto desde tu CV Digital";
    
    // Detectamos si es un dispositivo móvil (Android, iPhone, etc.)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // EN CELULAR: Usamos mailto para forzar la apertura de la App (Gmail, Outlook, etc.)
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    } else {
        // EN PC: Abrimos Gmail en una pestaña nueva del navegador
        const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
        window.open(gmailWeb, '_blank');
    }
});