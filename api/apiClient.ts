import axios, { AxiosRequestHeaders } from 'axios';
import { accessTokenManager } from '../helpers';

// const url =
//     process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_BASE_URL}/api` : '/api';
export const apiClient = axios.create({
    // baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
    baseURL: `http://localhost:8000/api`,
});

// Access token attachment
apiClient.interceptors.request.use(
    config => {
        const token = accessTokenManager.getAccessToken();
        console.log('token', { token });

        if (token && config.url) {
            //@ts-ignore
            if (!config.headers) config.headers = {};
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    undefined,
    // https://github.com/axios/axios/issues/3733
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    {
        synchronous: true,
    }
);

apiClient.interceptors.response.use(
    response => {
        return response;
    },
    function (error) {
        if (error.response.status === 404) {
            console.log('error');
        }
        return Promise.reject(error.response);
    }
);
