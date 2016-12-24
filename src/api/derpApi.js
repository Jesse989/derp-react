import axios from 'axios';

function fetch(request, callback) {
  axios.get(request)
    .then(response => {
      callback(response.data);
    });
}

export function getDerps(callback) {
  const request = 'https://derp-it.herokuapp.com/api/posts';
  fetch(request, callback);
}
