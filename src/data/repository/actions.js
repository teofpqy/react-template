import fetch from 'domain/Api';
import axios from 'axios';

export const fetchRepositories = async (filter) => {
    const res = fetch('/search/repositories', {
      params: filter,
    });
    return res;
  }
