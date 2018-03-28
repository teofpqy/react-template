import fetch from 'domain/Api';
import axios from 'axios';

export const fetchRepositories = async (filter) => {
    const res = await axios.get('/search/repositories', {
      baseURL: 'https://api.github.com/',
      timeout: 5000,
      params: filter,
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    return res.data;
  }
