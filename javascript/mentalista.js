var numeroSecreto = parseInt(Math.random() * 1001);

var numeroTentativas = 0;

while(chute != numeroSecreto && numeroTentativas < 10){
  var chute = prompt('Digite um numero entre 0 e 1000')
  numeroTentativas = numeroTentativas + 1
  if(chute == numeroSecreto){
    alert('Acertou! Numero de tentativas:' +  numeroTentativas)
  } else if(chute > numeroSecreto){
    alert('Errou, o numero secreto é menor que' + chute)
    alert('Faltam:' + (10 - numeroTentativas))
  } else if(chute < numeroSecreto){
    alert('Errou, o numero secreto é maior que' + chute)
    alert('Faltam:' + (10 - numeroTentativas))
  } 
}