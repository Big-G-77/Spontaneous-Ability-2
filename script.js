/* ============================================
   AA SPONTANEOUS ABILITY - SCRIPT
   ============================================ */

// --- NAVBAR SCROLL EFFECT ---
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- MOBILE MENU ---
var mobileToggle = document.getElementById('mobileToggle');
var navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', function() {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close mobile menu on link click
var allNavLinks = navLinks.querySelectorAll('a');
for (var i = 0; i < allNavLinks.length; i++) {
    allNavLinks[i].addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
}

// --- THEME TOGGLE ---
var themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    if (theme === 'gray') {
        document.body.classList.add('theme-gray');
        if (themeToggle) {
            themeToggle.textContent = '☀';
            themeToggle.setAttribute('aria-label', 'Tema claro');
        }
    } else {
        document.body.classList.remove('theme-gray');
        if (themeToggle) {
            themeToggle.textContent = '☾';
            themeToggle.setAttribute('aria-label', 'Tema escuro');
        }
    }
    localStorage.setItem('theme', theme);
}

if (themeToggle) {
    var savedTheme = localStorage.getItem('theme') || 'black';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', function() {
        var nextTheme = document.body.classList.contains('theme-gray') ? 'black' : 'gray';
        applyTheme(nextTheme);
    });
}

// --- CONTACT FORM ---
var form = document.getElementById('contactForm');
var formStatus = document.getElementById('formStatus');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            showStatus('Por favor, preencha todos os campos.', 'error');
            return;
        }

        showStatus('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();

        setTimeout(function() {
            formStatus.style.display = 'none';
        }, 5000);
    });
}

function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    formStatus.style.display = 'block';
}
