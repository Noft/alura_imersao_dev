var lista_filmes = [
  "http://estantedasala.com/wp-content/uploads/2014/11/interstellar.jpg",
  "https://www.termometrooscar.com/uploads/1/4/8/8/1488234/s118581882355374300_p77_i9_w1012.jpeg",
  "https://upload.wikimedia.org/wikipedia/pt/4/41/Fast_%26_Furious_9_The_Fast_Saga.jpg"
];

for (var i = 0; i < lista_filmes.length; i++) {
  document.write("<img src=" + lista_filmes[i] + ">");
}