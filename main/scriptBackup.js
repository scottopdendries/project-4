const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=477f5f5debaf48768ed55d725362b931";
const column1 = document.querySelector(".column-1");
const column2 = document.querySelector(".column-2");
const column3 = document.querySelector(".column-3");
const column4 = document.querySelector(".column-4");
const column5 = document.querySelector(".column-5");

// API Fetch
fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      media = data.results;
      renderColumn(media);
    })
    .catch((err) => console.log(err));

// Functions
function renderColumn(media) {
  let details = media.map((item) => `
    <div class="card">
      <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="">
      <div class="rating">${item.vote_average}</div>
    </div>`
    ).join('');

    column1.innerHTML = details;
    column2.innerHTML = details;
    column3.innerHTML = details;
    column4.innerHTML = details;
    column5.innerHTML = details;
}

function sortAtoZ(media) {
  return media.sort((a, b) => a.title.localeCompare(b.title));
}
function sortZtoA(media) {
  return media.sort((a, b) => b.title.localeCompare(a.title));
}
function sortByPopularityDescending(media) {
  return media.sort((a, b) => b.popularity - a.popularity);
}
function sortByPopularityAscending(media) {
  return media.sort((a, b) => a.popularity - b.popularity);
}
function sortByReleaseDescending(media) {
  return media.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
}
function sortByReleaseAscending(media) {
  return media.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
}
function sortByRatingDescending(media) {
  return media.sort((a, b) => b.vote_average - a.vote_average);
}
function sortByRatingAscending(media) {
  return media.sort((a, b) => a.vote_average - b.vote_average);
}