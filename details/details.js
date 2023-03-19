const posterMovies = document.querySelector(".poster-container");

fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=477f5f5debaf48768ed55d725362b931"
  )
    .then((res) => res.json())
    .then((json) => {
        const movies = json;
      displayMovie(movies.results);
      
    })
    .catch((err) => console.log(err));
  
    function displayMovie(movies) {
        let currentId;
        const urlParams = new URLSearchParams(window.location.search);
        currentId = urlParams.get("id");

        let selectedMovie = movies.map((item) => {
            if(currentId == item.id){
          return`<div class="backdrop">
                      <img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" alt="">
                </div>
                <div class="poster">
                     <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="">
                </div>`;
                }
        }).join('');

        posterMovies.innerHTML = selectedMovie;
    }


    