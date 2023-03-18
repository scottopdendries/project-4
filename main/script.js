// Variables
const column1 = document.querySelector(".column-1");
const column2 = document.querySelector(".column-2");
const column3 = document.querySelector(".column-3");
const column4 = document.querySelector(".column-4");
const column5 = document.querySelector(".column-5");

// API Call
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
        <div class="rating">${item.vote_average}</div>
      </div>`;
    }).join('');
      
    column1.innerHTML = details;
    column2.innerHTML = details;
    column3.innerHTML = details;
    column4.innerHTML = details;
    column5.innerHTML = details;
  }