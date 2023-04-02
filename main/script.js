// I broke the API in parts. Better to understand- Fabio
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

// dropdown buttons- Fabio
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
function cardSyntax(movies) {
  let details = movies.map((item) => {
    return` 
    <a class="card" href="../details/details.html?id=${item.id}">
    <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="">
    <div class="rating">${item.vote_average.toFixed(1)}</div>
  </a>`
  }).join('');
  title.innerHTML = "Now Playing"
  container.innerHTML = details;
}


//filter to Most Popular- Fabio
function mostPopular(popular){
  fetch(popular)
     .then((response) => response.json())
     .then((data) => {
       const movie = data.results;
       cardSyntax(movie)
      title.innerHTML = 'Most Popular'
     })
     .catch((err) => console.log(err));
   }   
popularBtn.addEventListener('click', ()=> {
  mostPopular(api_base + popular + api_key)
})


//filter to Best Rated- Fabio
function topRated(bestRate){
  fetch(bestRate)
     .then((response) => response.json())
     .then((data) => {
       const movie = data.results;
       console.log(data.results)
       cardSyntax(movie)
       title.innerHTML = 'Best Rated'
     })
     .catch((err) => console.log(err));
   }   
topRatedBtn.addEventListener('click', ()=> {
  console.log(api_base + bestRated + api_key)
  topRated(api_base + bestRated + api_key)
})


//filter to Upcoming- Fabio
function upComing(upcomig){
  fetch(upcomig)
     .then((response) => response.json())
     .then((data) => {
       const movie = data.results;
       cardSyntax(movie)
       title.innerHTML = 'Most Recent'
     })
     .catch((err) => console.log(err));
   }  
upComingBtn.addEventListener('click', ()=> {
  upComing(api_base + upcoming + api_key)
})


//filter to trending- Fabio
function trending(trend){
  fetch(trend)
     .then((response) => response.json())
     .then((data) => {
       const movie = data.results;
       cardSyntax(movie)
       title.innerHTML = 'Trending'
     })
     .catch((err) => console.log(err));
   }  
trend.addEventListener('click', ()=> {
  trending(api_base + trendingApi + api_key)
})



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

//As magnifying glass is inside of the form tag we dont
// need to make another addEventListener. FABIO


//Mobile Menu

const hamburgerMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector("header");
const navbar = document.querySelector("nav");

const openMenu = () => {
  header.classList.toggle("mobile-header");
  navbar.classList.toggle("mobile-menu");
  navbar.classList.toggle("browser-menu");
  sort.classList.toggle("mobile-filter");
  sort.classList.toggle("browser-filter");
};

hamburgerMenu.onclick = openMenu;

