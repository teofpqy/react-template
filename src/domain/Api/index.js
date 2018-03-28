import axios from'axios';

export default fetch = (options) => {

  const instance = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 1000,
    headers: {'Accept': 'application/vnd.github.v3+json'}
  });

  return new Promise((resolve,reject) =>{
    instance.request(options)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
  });
}
