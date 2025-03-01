// Validação do Formulário de Contato
const form = document.querySelector('.contact-form');
const errorMessage = form.querySelector('.error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const nome = form.querySelector('#nome').value.trim();
    const email = form.querySelector('#email').value.trim();
    const celular = form.querySelector('#celular').value.trim();
    const mensagem = form.querySelector('#mensagem').value.trim();

    // Expressão regular para validar o celular (formato: (XX) XXXXX-XXXX ou XX XXXXXXXX)
    const celularRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

    // Valida os campos
    if (nome === '' || email === '' || !email.includes('@') || mensagem === '' || !celularRegex.test(celular)) {
        errorMessage.textContent = 'Por favor, preencha todos os campos corretamente.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Formulário enviado com sucesso!');

        // Captura as informações do formulário
        const formData = {
            nome: nome,
            email: email,
            celular: celular,
            mensagem: mensagem
        };

        // Exibe os dados no console (você pode enviar para um servidor aqui)
        console.log('Dados do formulário:', formData);

        // Limpa o formulário
        form.reset();
    }
});