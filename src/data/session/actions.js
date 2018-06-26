import fetch from 'domain/Api';

const fetchSession = async (filter) => {
  const res = await fetch('/session', {
    params: filter,
  });
  return res;
};

export default { fetchSession };

