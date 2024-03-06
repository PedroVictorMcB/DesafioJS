const cidadesPorEstado = {
    SP: ["São Paulo", "Campinas", "Guarulhos"],
    RJ: ["Rio de Janeiro", "Niterói", "Nova Iguaçu"],
    MG: ["Belo Horizonte", "Contagem", "Uberlândia"]
};

function atualizarCidades() {
    const estadoSelecionado = document.getElementById("estado").value;
    const cidadeSelect = document.getElementById("cidade");

    cidadeSelect.innerHTML = "<option value=''>Selecione um estado primeiro</option>";

    if (estadoSelecionado && cidadesPorEstado[estadoSelecionado]) {
        cidadesPorEstado[estadoSelecionado].forEach(cidade => {
            const option = document.createElement("option");
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    }
}

atualizarCidades();