function mostrarMensagem() {
        alert("olá, eu sou a Emmanuelle!");
        }

        function verificarNumero() {
            let nomero = document.getElementById(número).value;
            numero = Number(numero);
            let mensagem = "";

            if (numero >0) {
                mensagem = "0 número é positivo.";
            }
            else if (numero < 0) {
                mensagem = "o número é negativo.";
            }
            else {
                mensagem = "o número é zero.";
            }

            document.getElementById("esultado").innerText = mensagem;
            
        }