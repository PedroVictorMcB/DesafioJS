var num1, num2, resultado;

        function getNumbers() {
            num1 = Number(document.getElementById('num1').value);
            num2 = Number(document.getElementById('num2').value);
        }

        function somar() {
            getNumbers();
            resultado = num1 + num2;
            document.getElementById('resultado').innerText = "Resultado: " + resultado;
        }

        function subtrair() {
            getNumbers();
            resultado = num1 - num2;
            document.getElementById('resultado').innerText = "Resultado: " + resultado;
        }

        function multiplicar() {
            getNumbers();
            resultado = num1 * num2;
            document.getElementById('resultado').innerText = "Resultado: " + resultado;
        }

        function dividir() {
            getNumbers();
            if (num2 != 0) {
                resultado = num1 / num2;
                document.getElementById('resultado').innerText = "Resultado: " + resultado;
            } else {
                document.getElementById('resultado').innerText = "Erro";
            }
        }