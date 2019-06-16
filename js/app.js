document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const movieListItem = createMovieListItem(event.target);
  const movieList = document.querySelector('#movie-list');
  movieList.appendChild(movieListItem);

  event.target.reset();
}

const createMovieListItem = function (form) {
  const movieListItem = document.createElement('h1');
  movieListItem.classList.add('movie-list-item');

  const movie = document.createElement('h2');
  movie.textContent = form.movie.value;
  movieListItem.appendChild(movie);

  const year = document.createElement('h3');
  year.textContent = form.year.value;
  movieListItem.appendChild(year);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  movieListItem.appendChild(genre);

  return movieListItem;
}

const handleDeleteAllClick = function (event) {
  const movieList = document.querySelector('#movie-list');
  movieList.innerHTML = '';
}
