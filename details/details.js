/// This is for showing the backdrop and poster image - Raymond
const posterMovies = document.querySelector(".poster-container");
const movieOverview = document.querySelector(".details-container");
const backdrop = document.querySelector(".backdrop");
const searchApi = "https://api.themoviedb.org/3/search/movie?api_key=477f5f5debaf48768ed55d725362b931";

fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=477f5f5debaf48768ed55d725362b931"
  )
    .then((res) => res.json())
    .then((json) => {
        const movies = json;
      displayMovie(movies.results); 
      console.log(movies.results);
    })
    .catch((err) => console.log(err));
  
    function displayMovie(movies) {
  /// Grabs the current url ID and stores to currentID - Raymond
        let currentId;
        const urlParams = new URLSearchParams(window.location.search);
        currentId = urlParams.get("id");

        /// Backdrop image - Raymond
      let backDrop = movies.map((item) => {
        if(currentId == item.id){
      return`<div class="backdrop-container">
              <img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" class="backdrop-img" alt="">
            </div>`;
            }
    }).join('');
    backdrop.innerHTML = backDrop;

  /// Takes the currently selected movie and loads the poster image - Raymond
        let selectedMovie = movies.map((item) => {
            if(currentId == item.id){
          return`<div class="poster-image-container">
          <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="poster-img" alt="">
              <p class="rating" style="color: var(--gray);">${item.vote_average.toFixed(1)}</p>
              </div>
                `;
                }
        }).join('');
        posterMovies.innerHTML = selectedMovie;

/// Movie details - Raymond
        let movieDetails = movies.map((item) => {
          if(currentId == item.id){
            const releaseDate = new Date(item.release_date);
            const monthName = releaseDate.toLocaleString('default', { month: 'long' });
            const day = releaseDate.getDate();
            const year = releaseDate.getFullYear();
            const newReleaseDate = `${monthName} ${day}, ${year}`;

            return`<div class="movie-info">
              <h1>${item.title}</h1>
              <p>${item.overview}</p>
              <p>Release Date: ${newReleaseDate}</p>
            </div>`;
              }
      }).join('');
      movieOverview.innerHTML = movieDetails;
    }

   

    