// mascaras-js
function mascaraCPF(cpf) {
    cpf.value = cpf.value.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function mascaraTelefone(tel) {
    tel.value = tel.value.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
}

function mascaraCEP(cep) {
    cep.value = cep.value.replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2');
}

// Adiciona os eventos de forma simples
document.getElementById('cpf').addEventListener('input', function() {
    mascaraCPF(this);
});

document.getElementById('telefone').addEventListener('input', function() {
    mascaraTelefone(this);
});

document.getElementById('cep').addEventListener('input', function() {
    mascaraCEP(this);
});