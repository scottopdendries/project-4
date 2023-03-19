///Raymond: this is for showing the backdrop and poster image
const posterMovies = document.querySelector(".poster-container");
const movieOverview = document.querySelector(".details-container");
const movieContainer = document.querySelector(".movie-container");

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
  ///Raymond: grabs the current url ID and stores to currentID
        let currentId;
        const urlParams = new URLSearchParams(window.location.search);
        currentId = urlParams.get("id");

  ///Raymond: takes the currently selected movie and loads the poster image
        let selectedMovie = movies.map((item) => {
            if(currentId == item.id){
          return`
              <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="poster-img" alt="">
                `;
                }
        }).join('');
        posterMovies.innerHTML = selectedMovie;

///Raymond: movie details
        let movieDetails = movies.map((item) => {
          if(currentId == item.id){
        return`
                <h1>${item.title}</h1>
                <p>${item.overview}</p>
                <p>${item.release_date}</p>
                <p>${item.vote_average} ⭐️</p>
              `;
              }
      }).join('');
      movieOverview.innerHTML = movieDetails;

///Raymond: backdrop image, currently commeneted out, Can not seem to figure out how to get the details and poster image to be placed onto of the images
    //   let backDrop = movies.map((item) => {
    //     if(currentId == item.id){
    //   return`
    //           <img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" class="backdrop-img" alt="">
    //         `;
    //         }
    // }).join('');
    // movieContainer.innerHTML = backDrop;

    }




    