import {MOVIES_BASE_URL} from '../config/config';

const BASE_URL = 'https://api.movies-search.nomoreparties.sbs';


function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (values) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(values.name, values.email, values.password)

  })
  .then(res => handleResponse(res))
}

export const authorize = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })

  })

  .then(res => handleResponse(res))
}

// export const checkToken = () => {
//   const token = localStorage.getItem('token');
//   return fetch(`${BASE_URL}/users/me`, {   
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     }
//   })
//   .then(res => handleResponse(res))
// }


export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
  })
  .then(res => handleResponse(res))
}

export const editUserInfo = ({name, email, password})=> {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
  .then(res => handleResponse(res))
}

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
  })
  .then(res => handleResponse(res))
}

export const addMovies = ({country, director, duration, year, description, image, trailerLink, 
  thumbnail, movieId, nameRU, nameEN}) => {
  return fetch(`${BASE_URL}/movies `, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country,
      director,
      duration, 
      year, 
      description, 
      image: `${MOVIES_BASE_URL}${image.url}`,
      trailerLink, 
      thumbnail: `${MOVIES_BASE_URL}${image.formats.thumbnail.url}`, 
      movieId, 
      nameRU, 
      nameEN
    })
  })
  .then(res => handleResponse(res))
}

export const deleteCard = (movie) => {
  return fetch(`${BASE_URL}/movies/${movie._id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  })
  .then(res => handleResponse(res))
}