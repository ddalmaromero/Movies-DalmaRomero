const $peliculas = document.getElementById('peliculas');
function crearTarjetas(pelicula) {
    return `
 <div class="flex flex-col text-center w-60 border-solid border-2 border-violet-300 shadow-2xl rounded-xl"> 
 <img class="flex  w-60 h-48 object-contain p-2 " src="${pelicula.image}" alt="banner pelicula">
 <h2 class="text-xl p-2" > ${pelicula.title}</h2>
 <p class="text-center">${pelicula.overview}</p>
 </div>   
    `
}
function completarTarjetas(peliculas) {
    let informacion = ""
    for (let pelicula of peliculas) {
        informacion += crearTarjetas(pelicula);
    }
    return informacion
}
$peliculas.innerHTML= completarTarjetas(movies);

