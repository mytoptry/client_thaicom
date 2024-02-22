import Axios from 'axios'
import join from 'url-join'
import { NOT_CONNECT_NETWORK, NETWORK_CONNECTION_MESSAGE, apiServerUrl } from './../constants'

const isAbsoluteURLRegex = /^(?:\w+:)\/\//

Axios.interceptors.request.use( async (config) => {
    if (!isAbsoluteURLRegex.test(config.url)) {
        config.url = join(apiServerUrl, config.url)
    }
    config.timeout = 10000 // 10 Second
    return config
})

Axios.interceptors.request.use((response) => {
    return response
}, error => {
    if(Axios.isCancel(error)) {
        return Promise.reject(error)
    }else if (!error.response) {
        return Promise.reject({ 
            code : NOT_CONNECT_NETWORK, 
            message : NETWORK_CONNECTION_MESSAGE 
        })
    }
    return Promise.reject(error)
})

export const httpClient = Axios