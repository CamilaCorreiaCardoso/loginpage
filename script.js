function onClick() {
    inputnome = document.getElementById("input-nome")
    if (inputnome.value === "") {
        alert("Por favor digite seu nome")
    } else if (inputnome !== null) {
        alert("Parabéns, " + inputnome.value + " você realizou seu cadastro!")
    } else {
        alert("Desculpa, ocorreu um erro")
    }

    inputemail = document.getElementById("input-email")
    if (inputemail.value === "") {
        alert("Por favor digite seu e-mail")
    } else if (inputemail !== null) {
        alert("Confirme seu e-mail " + inputemail.value + " está certo?")
    } else {
        alert("Desculpa, ocorreu um erro")
    }

}