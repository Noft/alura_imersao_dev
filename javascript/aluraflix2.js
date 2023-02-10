function adicionarFilme() {
  var filme_favorito = document.getElementById("filme").value;
  var elemento_lista_filme = document.getElementById("listaFilmes");
  elemento_lista_filme.innerHTML += "<img src=" + filme_favorito + ">";
  document.getElementById("filme").value = "";
  //document.write("<img src=" + filme_favorito + ">");
}
