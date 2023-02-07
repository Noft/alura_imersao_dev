var breno = {
    nome:'Breno', 
    vitoria: 0, 
    empate: 0, 
    derrota: 0,
    pontos: 0
  };
  
  var daniel = {
    nome:'Daniel', 
    vitoria: 0, 
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var elementoTabela = 
     document.getElementById('tabelaJogadores')
  
  exibirNaTela()
  
  function exibirNaTela() {
  elementoTabela.innerHTML = `
  <tr>
          <td>${breno.nome}</td>
          <td>${breno.vitoria}</td>
          <td>${breno.empate}</td>
          <td>${breno.derrota}</td>
          <td>${breno.pontos}</td>
          <td><button onClick="adicionarVitoria(breno)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(breno)">Empate</button></td>
          <td><button onClick="adicionarDerrota(breno)">Derrota</button></td>
        </tr>
  `
  };
  function adicionarVitoria(jogador) {
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirNaTela()
  }
  function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos++
    exibirNaTela()
  }
  function adicionarDerrota(jogador) {
    jogador.derrota++
    exibirNaTela()
  }