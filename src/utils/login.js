import axios from 'axios';

/**
 * @param {number} mobile
 * @param {string} password
 * @param {function ({_id, mobile, email, addresses, account_type}): void} callback
 * @returns {void}
 */
export async function login(mobile, password, callback) {
  const url = process.env.REACT_APP_PROXY + '/auth/login';
  const response = await axios.post(url, {
    mobile: String(mobile),
    password,
  });
  const result = response.data;
  console.log(result);
  callback(result.data[0]);
}
