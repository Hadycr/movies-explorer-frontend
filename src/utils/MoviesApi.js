function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getMovies = () => {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    // body: JSON.stringify()
  })
  .then(res => handleResponse(res))
}