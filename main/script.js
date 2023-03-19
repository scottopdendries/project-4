const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=477f5f5debaf48768ed55d725362b931";
const column1 = document.querySelector(".column-1");
const column2 = document.querySelector(".column-2");
const column3 = document.querySelector(".column-3");
const column4 = document.querySelector(".column-4");
const column5 = document.querySelector(".column-5");

let column = "";
column = column2;

// API Fetch
fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const media = data.results;
      sortAtoZ(media, column);
      sortZtoA(media, column);
      sortByPopularityDescending(media, column);
      sortByPopularityAscending(media, column);
      sortByReleaseDescending(media, column);
      sortByReleaseAscending(media, column);
      sortByRatingDescending(media, column);
      sortByRatingAscending(media, column);
    })
    .catch((err) => console.log(err));

// Functions
function cardSyntax(item) {
  return `
  <div class="card">
    <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="">
    <div class="rating">${item.vote_average}</div>
  </div>
  `;
}

// Scott: Update sortAtoZ and sortZtoA to ignore 'a' and 'the'.
// For example, show The Whale as W in the alphabet, and not T"
function sortAtoZ(media, column) {
  let details = media.sort((a, b) => a.title.localeCompare(b.title)).map(item => cardSyntax(item)
  ).join('');
  column.innerHTML = `<h2>A to Z</h2>${details}`;
}
function sortZtoA(media, column) {
  let details = media.sort((a, b) => b.title.localeCompare(a.title)).map(item =>cardSyntax(item)
  ).join('');
  column.innerHTML = `<h2>Z to A</h2>${details}`;
}
function sortByPopularityDescending(media, column) {
  let details = media.sort((a, b) => b.popularity - a.popularity).map(item => cardSyntax(item)
  ).join('');
  column.innerHTML = `<h2>Popularity: High to Low</h2>${details}`;
}
function sortByPopularityAscending(media, column) {
  let details = media.sort((a, b) => a.popularity - b.popularity).map(item => cardSyntax(item)
  ).join('');
  column.innerHTML = `<h2>Popularity: Low to High</h2>${details}`;
}
function sortByReleaseDescending(media, column) {
  let details = media.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).map(item => cardSyntax(item)
  ).join('');
  column.innerHTML = `<h2>New Releases</h2>${details}`;
}
function sortByReleaseAscending(media, column) {
  let details = media.sort((a, b) => new Date(a.release_date) - new Date(b.release_date)).map(item => cardSyntax(item)
  ).join('');
  column.innerHTML = `<h2>Least Recent to Newest</h2>${details}`;
}
function sortByRatingDescending(media, column) {
  let details = media.sort((a, b) => b.vote_average - a.vote_average).map(item => cardSyntax(item)
  ).join('');
  column.innerHTML = `<h2>Ratings: Low to High</h2>${details}`;
}
function sortByRatingAscending(media, column) {
  let details = media.sort((a, b) => a.vote_average - b.vote_average).map(item => cardSyntax(item)
  ).join('');
  column.innerHTML = `<h2>Ratings: High to Low </h2>${details}`;
}
  //Search Movies
  //API
  const API_MAIN =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=477f5f5debaf48768ed55d725362b931";

  const searchURL =
    "https://api.themoviedb.org/3/search/movie?api_key=477f5f5debaf48768ed55d725362b931";

  const container = document.querySelector(".container");
  const form = document.querySelector("#form");
  const search = document.querySelector("#search");

  function getMovies(url) {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const movies = json;
        displayMovie(movies.results);
      })
      .catch((err) => console.log(err));
  }

  getMovies(API_MAIN);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchValue = search.value;

    if (searchValue) {
      getMovies(searchURL +"&query="+ searchValue);
    } else {
      getMovies(API_MAIN);
    }
  });
///Raymond changed the DIV class to a class to allow each image to be clicked on for a details page.
function displayMovie(movies) {
  let details = movies.map((item) => {
    return ` 
      <a class="card" href="../details/details.html?id=${item.id}">
        <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="">
        <div class="rating">${item.vote_average}</div>
      </a>`;
    }).join('');
    console.log(movies)
    column1.innerHTML = details;
    column2.innerHTML = details;
    column3.innerHTML = details;
    column4.innerHTML = details;
    column5.innerHTML = details;
  }

