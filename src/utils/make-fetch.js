export async function makeFetch(path, method, body) {
  const url = process.env.REACT_APP_PROXY + path;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  const result = await fetch(url, {
    method,
    headers,
    mode: 'cors',
    redirect: 'follow',
    credentials: 'include',
    body: method === 'GET' ? undefined : JSON.stringify(body),
  });
  const res = await result.json();
  return res;
}
