const $peliculas = document.getElementById('peliculas');
function crearTarjetas(pelicula) {
    return `
 <div class="flex flex-col justify-between items-center text-center w-60 border-solid border-2 border-violet-300 shadow-2xl rounded-xl p-2"> 
 <img class="w-60 h-48  border rounded-xl " src="${pelicula.image}" alt="banner pelicula">
 <h2 class="text-xl p-2 font-bold" > ${pelicula.title}</h2>
 <p class="text-center text-xs font-light">${pelicula.overview}</p>
 <a class="w-32 bg-red-400 h-8 text-white " href='./detail.html?id=${pelicula.id}'>More Info</a>
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
$peliculas.innerHTML = completarTarjetas(movies);


const gendersMovies = document.getElementById('genreMovies')

gendersMovies.addEventListener('change', () => {
    const listGenderValue = gendersMovies.value;
    const filtrar = [];
    for (let movie of movies) {
        if (movie.genres.includes(listGenderValue)) {
            filtrar.push(movie);
            $peliculas.innerHTML = completarTarjetas(filtrar)
        } else if (listGenderValue == "All") {
            $peliculas.innerHTML = completarTarjetas(movies);
        }
    }

})

function showMovies(title) {
    let pelicula = movies.find(movie => movie.title === title);

    window.location.href = `detail.html?titles= ${encodeURIComponent(title)} &image= ${encodeURIComponent(image)}`;
}

function filterMovies() {
    let selectGenres = genresSelect.value;
    let nameSearch = searchInput.value.trim().toLoweCase();
    let movieFilter = movies.filter(movie => (selectGenres === "All" || movie.genres.includes(selectGenres))&&(nameSearch === "" || movie.title.toLowerCase().includes(nameSearch))
    );
    if(filterMovies.length > 0){
        contenedor.innerHTML = imprimirCard(filterMovies);
    }else{
        contenedor.innerHTML = '<p>No results found</p>'
    }
};






