function validarLogin() {
    var senha = document.getElementById("senha").value;
    var senha1 = document.getElementById("senha1").value;
    if (senha === senha1) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
}