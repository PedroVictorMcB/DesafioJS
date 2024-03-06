// array da table
const dadosContatos = [
    { nome: 'Maria', email: 'maria@email.com', telefone: '(11) 98765-4321' },
    { nome: 'João', email: 'joao@email.com', telefone: '(21) 99999-8888' },
];


function preencherTabela() {
    const tabela = document.getElementById('contatos');
    const tbody = tabela.querySelector('tbody');

    dadosContatos.forEach(contato => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.email}</td>
            <td>${contato.telefone}</td>
        `;
        tbody.appendChild(row);
    });
}
preencherTabela();

// let cap = document.getElementById('cap');
// let text = cap.innerHTML;
// let capText = text.charAt(0).toUpperCase() + text.slice(1);
// cap.innerHTML = capText;