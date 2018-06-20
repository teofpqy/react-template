import axios from 'axios';
import is from 'is_js';
import invariant from 'invariant';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: { 'Accept': 'application/vnd.github.v3+json' }
});

export default fetch = (url, options = {}) => {
  invariant(is.string(url), 'url must be a string');
  invariant(is.object(options), 'options must be a plain object');

  const finalOptions = Object.assign({}, options, getDefaultOpts(options));
  finalOptions.url = url;
  return instance.request(finalOptions)
    .then(checkResponseStatus);
}

function getDefaultOpts(options = {}) {
  const defaultOpts = options;
  if (is.empty(options.method) || is.falsy(options.method)) {
    defaultOpts.method = 'GET';
  }
  return defaultOpts;
}

function checkResponseStatus(response) {
  if (response.statusText.toLowerCase() == 'ok') {
    return response.data;
  }
}
