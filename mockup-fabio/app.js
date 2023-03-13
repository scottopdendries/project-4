const gridMovies = document.querySelector(".grid-movies");

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
        let details = movies.map((item) => {
          return `
              <div class="card">
               <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="">
                <span class="title">${item.title}</span>
                <span class="release-date">⭐${item.vote_average}</span>
                <button>Details</button>
              </div>`;
        }).join('');
      
        gridMovies.innerHTML = details;
      }