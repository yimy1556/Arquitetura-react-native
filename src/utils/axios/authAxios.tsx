import Axios from 'axios';
import Qs from 'qs';
import moment from 'moment';

import {backendUrl} from '_config';

const filter = (prefix: any, value: any) => {
  if (moment.isMoment(value) || value instanceof Date) {
    return value.toString();
  }
  return value;
};

const authAxios = Axios.create({
  baseURL: backendUrl,
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
      filter,
    });
  },
});

authAxios.interceptors.request.use(
  async function (options) {
    const token = '';
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }
    options.headers['Accept-Language'] = ''; // i18n ?
    return options;
  },
  function (error) {
    console.log('Request error: ', error);
    return Promise.reject(error);
  },
);

export default authAxios;
