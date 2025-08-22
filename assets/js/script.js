let listaPeliculas = [
    {
        "img": "assets/img/mvf.jpg",
        "puesto": "1",
        "titulo": "Mi villano favorito",
        "estreno": " 9 de julio de 2009"
    },
    {
        "img": "assets/img/mvf2.webp",
        "puesto": "2",
        "titulo": "Mi villano favorito 2",
        "estreno": " 4 de julio de 2013"
    },
    {
        "img": "assets/img/mvf3.jpg",
        "puesto": "3",
        "titulo": "Mi villano favorito 3",
        "estreno": " 30 de junio de 2017"
    },
    {
        "img": "assets/img/minions.webp",
        "puesto": "4",
        "titulo": "Minions",
        "estreno": " 8 de julio de 2015"
    },
    {
        "img": "assets/img/minions2.jpg",
        "puesto": "5",
        "titulo": "Minions 2",
        "estreno": " 1 de julio de 2022"
    }
];
let peliculas = listaPeliculas
console.log(peliculas[0].titulo)
let contenido = document.getElementById("lisa");
peliculas.forEach((pelicula)=>{
    let carta = document.createElement('div');
    carta.classList.add('col');
    carta.innerHTML= "<img src=" + pelicula.img + ">" +"<h2>"+ pelicula.titulo + "</h2>" + "<p>"+ "("+ pelicula.estreno +")" +"</p>" + "<p class='numero'>"+ pelicula.puesto +"</p>";
    contenido.appendChild(carta)
})