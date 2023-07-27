import {MOVIES_BASE_URL} from "../config/config";

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getMovies = () => {
  return fetch({MOVIES_BASE_URL}, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify()

  })
  .then(res => handleResponse(res))
}