import {MOVIES_BASE_URL} from '../config/config';

const BASE_URL = 'https://api.movies-search.nomoreparties.sbs';


function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, password })

  })
  .then(res => handleResponse(res))
}

export const authorize = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email,
      password
    })

  })

  .then(res => handleResponse(res))
}

export const checkToken = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/me`, {   
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => handleResponse(res))
}


export const getUserInfo = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  .then(res => handleResponse(res))
}

export const editUserInfo = ({name, email})=> {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(res => handleResponse(res))
}

export const getSavedMovies = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  .then(res => handleResponse(res))
}

export const addMovies = (card) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/movies `, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: card.country,
      director: card.director,
      duration: card.duration, 
      year: card.year, 
      description: card.description, 
      image: `${MOVIES_BASE_URL}${card.image.url}`,
      trailerLink: card.trailerLink, 
      thumbnail: `${MOVIES_BASE_URL}${card.image.formats.thumbnail.url}`, 
      movieId: card.movieId, 
      nameRU: card.nameRU, 
      nameEN: card.nameEN,
      owner: card.owner
    })
  })
  .then(res => handleResponse(res))
}

export const deleteCard = (movie) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/movies/${movie._id}`, {
  method: 'DELETE',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  })
  .then(res => handleResponse(res))
}