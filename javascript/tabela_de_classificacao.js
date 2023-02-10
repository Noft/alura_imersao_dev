var ezioanon = {
  nome: "EzioAnon",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};
var noft = {
  nome: "Noft",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};
var elemento_tabela = document.getElementById("tabelaJogadores");
tela();
function tela() {
  elemento_tabela.innerHTML = `
       <tr>
        <td>${ezioanon.nome}</td>
        <td>${ezioanon.vitoria}</td>
        <td>${ezioanon.empate}</td>
        <td>${ezioanon.derrota}</td>
        <td>${ezioanon.pontos}</td>
        <td><button onClick="adicionarVitoria(ezioanon)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(ezioanon)">Empate</button></td>
        <td><button onClick="adicionarDerrota(ezioanon)">Derrota</button></td>
       </tr> `;
}
function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos += 3;
  tela();
}
function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  tela();
}
function adicionarDerrota(jogador) {
  jogador.derrota++;
  tela();
}
