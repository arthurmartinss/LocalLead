const form = document.querySelector('.contact-form');
const contactSection = document.querySelector('.contact-container');

const showError = (input, message) => {
    const group = input.closest('.form-group');
    const existing = group.querySelector('.error-msg');
    if (existing) existing.remove();

    const error = document.createElement('span');
    error.className = 'error-msg';
    error.textContent = message;
    group.appendChild(error);
    input.classList.add('input-error');
};

const clearError = (input) => {
    const group = input.closest('.form-group');
    const existing = group.querySelector('.error-msg');
    if (existing) existing.remove();
    input.classList.remove('input-error');
};

const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
};

const showSuccess = () => {
    contactSection.innerHTML = `
        <div class="success-card">
            <div class="success-icon">✅</div>
            <h3 class="success-title">Mensagem enviada!</h3>
            <p class="success-text">Obrigado por entrar em contato. Nossa equipe vai responder em breve.</p>
            <button class="success-btn" onclick="location.reload()">Enviar outra mensagem</button>
        </div>
    `;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');
    const assunto = document.querySelector('#assunto');
    const mensagem = document.querySelector('#mensagem');

    let valid = true;

    if (nome.value.trim() === '') {
        showError(nome, 'Por favor, informe seu nome completo.');
        valid = false;
    } else {
        clearError(nome);
    }

    if (!validateEmail(email.value)) {
        showError(email, 'Informe um e-mail válido.');
        valid = false;
    } else {
        clearError(email);
    }

    if (assunto.value === '') {
        showError(assunto, 'Selecione um assunto.');
        valid = false;
    } else {
        clearError(assunto);
    }

    if (mensagem.value.trim().length < 10) {
        showError(mensagem, 'Sua mensagem precisa ter pelo menos 10 caracteres.');
        valid = false;
    } else {
        clearError(mensagem);
    }

    if (valid) showSuccess();
});