import axios from 'axios';
import { notification } from 'antd';

const $http = axios.create({});

// response
$http.interceptors.response.use(
  ({ data: { data } }) => data,
  ({ response }) => {
    notification.error({
      message: 'error',
      description: 'Request error, please try again later',
    });
    return Promise.reject(response);
  },
);

export default $http;
