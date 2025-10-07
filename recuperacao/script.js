document.getElementById('calcular').addEventListener('click', function() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado');

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.textContent = 'Por favor, insira valores válidos de peso e altura.';
    resultado.style.color = 'red';
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    classificacao = 'Sobrepeso';
  } else {
    classificacao = 'Obesidade';
  }

  resultado.style.color = '#34495e';
  resultado.textContent = `IMC: ${imc.toFixed(2)} — ${classificacao}`;
});
