import axios from 'axios';
import is from 'is_js';
import invariant from 'invariant';

const instance = axios.create({
  baseURL: 'https://csgo.5eplay.com/api',
  timeout: 5000,
  headers: {
    accept: '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
  },
});

function getDefaultOpts(options = {}) {
  const defaultOpts = options;
  if (is.empty(options.method) || is.falsy(options.method)) {
    defaultOpts.method = 'GET';
  }
  return defaultOpts;
}

function checkResponseStatus(response) {
  if (response.statusText.toLowerCase() === 'ok') {
    return response.data;
  }
  return response;
}

export default function fetch(url, options = {}) {
  invariant(is.string(url), 'url must be a string');
  invariant(is.object(options), 'options must be a plain object');

  const finalOptions = Object.assign({}, options, getDefaultOpts(options));
  finalOptions.url = url;
  return instance.request(finalOptions).then(checkResponseStatus);
}
