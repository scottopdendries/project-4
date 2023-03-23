const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=477f5f5debaf48768ed55d725362b931";
const searchURL =
  "https://api.themoviedb.org/3/search/movie?api_key=477f5f5debaf48768ed55d725362b931";

const title = document.querySelector(".title");
const container = document.querySelector(".container");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

// API FETCH
fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      
      const movie = data.results;
      sortAtoZ(movie);
      sortByPopularity(movie);
      sortByReleaseDate(movie);
      sortByRating(movie);
    })
    .catch((err) => console.log(err));

    
// SORT/FILTER (NAV BAR)
const sort = document.querySelector("#sort-filter");
const dropdown = document.querySelector(".no-content");
sort.addEventListener("click", filter);

function filter() {
  const arrow = document.getElementById("arrow");
  arrow.classList.toggle("rotate-arrow");
  dropdown.classList.toggle("dropdown-content");
  dropdown.classList.toggle("no-content");
}



// CARD SYNTAX FUNCTION
function cardSyntax(item) {
  return ` 
    <a class="card" href="../details/details.html?id=${item.id}">
      <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="">
      <div class="rating">${item.vote_average}</div>
    </a>`;
}



// FILTER FUNCTIONS

// sortAtoZ can be updated to omit 'A' and 'The'.
// ie, show 'The Whale' as 'W' in the alphabet instead of 'T'.
// - Scott
function sortAtoZ(movie) {
  let details = movie.sort((a, b) => a.title.localeCompare(b.title)).map(item => cardSyntax(item)
  ).join('');
  title.innerHTML = `<h2>A to Z</h2>`;
  container.innerHTML = details;
}
function sortByPopularity(movie) {
  let details = movie.sort((a, b) => b.popularity - a.popularity).map(item => cardSyntax(item)
  ).join('');
  title.innerHTML = `<h2>Most Popular</h2>`;
  container.innerHTML = details;
}
function sortByReleaseDate(movie) {
  let details = movie.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).map(item => cardSyntax(item)
  ).join('');
  title.innerHTML = `<h2>New Releases</h2>`;
  container.innerHTML = details;
}
function sortByRating(movie) {
  let details = movie.sort((a, b) => b.vote_average - a.vote_average).map(item => cardSyntax(item)
  ).join('');
  title.innerHTML = `<h2>Best Rated</h2>`;
  container.innerHTML = details;
}



// SEARCH FUNCTION

// Fabio, there is code above that uses a similar fetch request. Can this code be reduced? - Scott
function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const movies = json;
      cardSyntax(movies.results);
      })
      .catch((err) => console.log(err));

  }

getMovies(api);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchValue = search.value;

  if (searchValue) {
    getMovies(searchURL +"&query="+ searchValue);
  } else {
    getMovies(api);
  }
});