function mostrarMensagem() {
        alert("olá, eu sou a Emmanuelle!");
        }

        function verificarNumero() {
            let numero = document.getElementById(numero).value;
            numero = Number(numero);
            let mensagem = "";

            if (numero > 0) {
                mensagem = "0 número é positivo.";
            } else if (numero < 0) {
                mensagem = "o número é negativo.";
            } else {
                mensagem = "o número é zero.";
            }

            document.getElementById("resultado").innerText = mensagem;
            
        }

function executarFor() {
    let resultado = "Número pares de 0 a 10:";
    for (let i = 0; i <= 10; i++) {
      if(i % 2 === 0) {
        resultado += i + " ";
    
    } 
}
    document.getElementById("saida").textContent = resultado;
}

function executarArray() {
    let nomes = ["Manu", "Samira", "Andreia", "Ana"];
    let resultado ="Lista de Alunas";

    for (let i = 0; i < nomes.length; i++) {
        resultado += nomes[i]
    }
    document.getElementById("saida").textContent = resultado;

}

