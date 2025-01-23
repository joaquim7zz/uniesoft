const botao = document.querySelector('#mostrarTabela');
const tabela = document.querySelector('.tabela');

botao.addEventListener('click', function() {
    tabela.classList.toggle('ativa');

    if (tabela.classList.contains('ativa')) {
        botao.textContent = '# Esconder Agenda';
    } else {
        botao.textContent = '# Mostrar Agenda';
    }
});
