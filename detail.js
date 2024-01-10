const infoConteiner = document.getElementById('infoContiner')
const id = location.search
const movieId = new URLSearchParams(id).get("id") // captu el id de peliculas

const movie = movies.find((movie) => movie.id == movieId)

function tarjeton(movies) {
    return `
 <div>

    <div class="flex m-8">
         <img clas=" m-8" src="${movie.image}"alt="">
         <div class="m-8 flex flex-col gap-5">
         <h2 class=" text-2xl font-bold">${movie.title}</h2>
         <p>${movie.tagline}</p>
         <p>${movie.genres}</p>
         <p>${movie.overview}</p> 
         </div>
    </div>

    <div class="flex justify-evenly">
         <table>
             <tr class="border border-black">
                 <th class="border border-black p-2">Original Language</th>
                 <td class="p-4">${movie.original_language}</td>
            </tr>
            <tr class="border border-black">
                  <th class="border border-black p-2">Release Date</th>
                 <td class="p-4">${movie.release_date}</td>
            </tr>
            <tr class="border border-black">
                <th class="border border-black p-2">Runtime</th>
             <td class="p-4">${movie.runtime}</td>
            </tr>
            <tr class="border border-black">
                <th class="border border-black p-2">Status</th>
                <td class="p-4">${movie.status}</td>
            </tr>
        </table>

        <table>
            <tr class="border border-black">
               <th class="border border-black p-2">Vote Average</th>
               <td class="p-4">${movie.average}</td>
            </tr>
            <tr class="border border-black">
                <th class="border border-black p-2">Budget</th>
                <td class="p-4">${movie.budget}</td>
             </tr>
             <tr class="border border-black">
                <th class="border border-black p-2">Revenue</th>
                <td class="p-4">${movie.revenue}</td>
             </tr>
        </table>
    </div>

 </div>`

}

const $main = document.querySelector('main')
$main.innerHTML = tarjeton(movie)
