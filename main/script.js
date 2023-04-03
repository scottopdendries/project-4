// API BREAKDOWN
const api_base = "https://api.themoviedb.org/3"
const api_key = "api_key=477f5f5debaf48768ed55d725362b931"
const nowPlaying = "/movie/now_playing?"
const bestRated = "/movie/top_rated?"
const popular = "/movie/popular?"
const upcoming = "/movie/upcoming?"
const trendingApi = "/trending/all/day?"

const searchURL ="https://api.themoviedb.org/3/search/movie?api_key=477f5f5debaf48768ed55d725362b931";

const title = document.querySelector(".title");
const container = document.querySelector(".container");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

// DROPDOWN BUTTONS
const popularBtn = document.querySelector('#popular')
const topRatedBtn = document.querySelector('#topRated')
const upComingBtn = document.querySelector('#upcoming')
const trend = document.querySelector('#trend')


// API FETCH
function getMovies(api){
  fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        const movie = data.results;
        cardSyntax(movie)
      })
      .catch((err) => console.log(err));
  }
    getMovies(api_base + nowPlaying + api_key)
    title.innerHTML = "Now Playing"
  
    
    
// CARD SYNTAX
function cardSyntax(movies) {
  let details = movies.map((item) => {
    return` 
    <a class="card" href="../details/details.html?id=${item.id}">
    <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="">
    <div class="rating">${item.vote_average.toFixed(1)}</div>
    </a>`
  }).join('');
  container.innerHTML = details;
}



// SEARCH 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const searchValue = search.value;
  
  if (searchValue) {
    getMovies(searchURL +"&query="+ searchValue);
  } else {
    getMovies(api_base + nowPlaying + api_key);
  }
  document.querySelector("#search").value="";
  
  title.innerHTML = searchValue;
});



// FILTER MENU
const sort = document.querySelector("#sort-filter");
const dropdown = document.querySelector(".no-content");
sort.addEventListener("click", filter);



// ORIGINAL
function filter() {
  const arrow = document.getElementById("arrow");
  arrow.classList.toggle("rotate-arrow");
  dropdown.classList.toggle("dropdown-content");
  dropdown.classList.toggle("no-content");
}

// MOST POPULAR (FILTER)
function mostPopular(popular){
  fetch(popular)
     .then((response) => response.json())
     .then((data) => {
       const movie = data.results;
       cardSyntax(movie)
      title.innerHTML = 'Most Popular'
      if (screen.width > 768) {
        filter();
      } else {
        openMenu();
      }
     })
     .catch((err) => console.log(err));
   }   
popularBtn.addEventListener('click', ()=> {
  mostPopular(api_base + popular + api_key)
})
// BEST RATED (FILTER)
function topRated(bestRate){
  fetch(bestRate)
     .then((response) => response.json())
     .then((data) => {
       const movie = data.results;
       console.log(data.results)
       cardSyntax(movie)
       title.innerHTML = 'Best Rated'
       if (screen.width > 768) {
        filter();
      } else {
        openMenu();
      }
     })
     .catch((err) => console.log(err));
   }   
topRatedBtn.addEventListener('click', ()=> {
  console.log(api_base + bestRated + api_key)
  topRated(api_base + bestRated + api_key)
})
// MOST RECENT (FILTER)
function upComing(upcoming){
  fetch(upcoming)
     .then((response) => response.json())
     .then((data) => {
       const movie = data.results;
       cardSyntax(movie)
       title.innerHTML = 'Most Recent'
       if (screen.width > 768) {
        filter();
      } else {
        openMenu();
      }
     })
     .catch((err) => console.log(err));
   }  
upComingBtn.addEventListener('click', ()=> {
  upComing(api_base + upcoming + api_key)
})
// TRENDING (FILTER)
function trending(trend){
  fetch(trend)
     .then((response) => response.json())
     .then((data) => {
       const movie = data.results;
       cardSyntax(movie)
       title.innerHTML = 'Trending'
       if (screen.width > 768) {
        filter();
      } else {
        openMenu();
      }
     })
     .catch((err) => console.log(err));
   }  
trend.addEventListener('click', ()=> {
  trending(api_base + trendingApi + api_key)
})



// MOBILE
const hamburgerMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector("header");
const navbar = document.querySelector("nav");

const openMenu = () => {
  header.classList.toggle("mobile-header");
  navbar.classList.toggle("mobile-menu");
  navbar.classList.toggle("browser-menu");
  dropdown.classList.toggle("mobile-filter");
  dropdown.classList.toggle("no-content");
};

hamburgerMenu.onclick = openMenu;

