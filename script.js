const form = document.getElementById('form-atividade');
let linhas = '';
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const table = document.querySelector('tbody');
    table.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

})
