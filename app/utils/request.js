const Axios = require('axios');

export function getRequest(url) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return Axios({
    method: 'GET',
    url,
    headers,
  }).then(response => response.data);
}

export function postRequest(url, data) {

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    CrossDomain: true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': 86400,
  };

  return Axios({
    method: 'POST',
    url: url,
    headers,
    data: JSON.stringify(data),
  })
    .then(response => response.data)
    .catch(error => error.response.data);
}
