/*var filmeBreno = "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/00/25/20240355.jpg";*/

/*var filmeDaniel = "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg";*/

/*var filmePit = "https://www.omelete.com.br/webstories/velozes-furiosos-ordem/assets/1.jpeg";*/

var listaFilmes = [
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/00/25/20240355.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg",
    "https://www.omelete.com.br/webstories/velozes-furiosos-ordem/assets/1.jpeg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg"
  ];
  
  var i = 0;
  /*listaFilmes[0] = "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/00/25/20240355.jpg"
  listaFilmes[1] = "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg"
  listaFilmes[2] = "https://www.omelete.com.br/webstories/velozes-furiosos-ordem/assets/1.jpeg"*/
  while (i < listaFilmes.length) {
    document.write("<img src=" + listaFilmes[i] + ">");
    i++;
  }
  /*for (var i=0; i< listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>');
  }*/
  
  /*document.write('<img src=' + listaFilmes[0] + '>');
  document.write("<img src=" + listaFilmes[1] + ">");
  document.write("<img src=" + listaFilmes[2] + ">");*/
  
  /*i = i+1 == 1++*/