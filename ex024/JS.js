function calcularidade() {
    let idade = document.getElementById("Idade")
    let res = document.getElementById("res")

    let i = Number(idade.value)

    if (i <= 0) {
        alert(`${i} é um valor inválido, verifique e tente novamente!`)
    } 
    else if (i < 12) {
        alert("Você é criança")
    } 
    else if (i < 18) {
        alert("Você é adolescente")
    } 
    else if (i < 60) {
        alert("Você é adulto")
    } 
    else if(i >= 60 && i < 100) {
        alert("Você é idoso")
    } else {
        alert("voce nao esta vivo 💀")
    }
}

