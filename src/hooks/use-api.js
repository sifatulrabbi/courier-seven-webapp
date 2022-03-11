class UseApi {
  /**
   * @private
   */
  headers;
  /**
   * @private
   */
  url;

  constructor() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.url = process.env.REACT_APP_PROXY_URL;
  }

  /** Set headers
   * @param {['name', 'value'][]} headersList
   * @returns {void}
   */
  setHeaders(headersList) {
    for (const item of headersList) {
      this.headers.append(item[0], item[1]);
    }
  }

  /** request function
   * @param {string} path
   * @param { 'GET' | 'POST' | 'PUT' | 'DELETE'} method
   * @param {object | null} body
   * @param {function(any?, object?): any} done
   * @returns {Promise<any>}
   */
  async makeRequest(path, method, body, done) {
    try {
      if (!this.url) return console.error('URL not defined');
      const result = await fetch(this.url + path, {
        headers: this.headers,
        method,
        mode: 'cors',
        redirect: 'follow',
        credentials: 'include',
        body: body ? JSON.stringify(body) : undefined,
      });
      const data = await result.json();
      return done(null, data);
    } catch (err) {
      return done(err, null);
    }
  }

  /** get login in user profile
   * @param {string} userId
   * @returns {Promise<any>}
   */
  getUserById(userId) {
    return this.makeRequest('/users/' + userId, 'GET', null, (err, result) => {
      if (err) return null;
      if (!result) return null;
      return result.data[0];
    });
  }
}

export const useApi = new UseApi();
