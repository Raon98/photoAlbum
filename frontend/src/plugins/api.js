import axios from "axios";


"use strict"

let config = {
    baseURL: process.env.baseURL || process.env.apiUrl || process.env.VUE_APP_URL,
    timeout: 60 * 1000,
    withCredentials: true,
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error)
    }
);

export default {
    // INSTALL Example
    install: (app, {store, router}) => {
        //     const $ui =app.config.globalProperties.$ui
        //     $ui.appLoding();

        // const data = store.getters["setItem"]
        const api = (service, params, success, fail, hide) => {
            _axios.post(`/api/${service}`, {
                "data": {
                    "service": service,
                },
                "Param": params
            }).then((res) => {
                if (res) {
                    success(res)
                }
            })
                .catch((error) => {
                    console.log(error);
                })
        };
        app.config.globalProperties.$api = api
        app.provide('$api', api)
    },
    axios: _axios
}


