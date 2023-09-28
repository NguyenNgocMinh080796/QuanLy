import Axios from 'axios'
import { AUTHORIZATION_API, DOMAIN, GET_TRANSFER_DATA, GET_TRANSFER_DETAIL_DATA, HEADERS_API } from '../../type/APIKey';

export const getTransferAction = () => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN}Transfer`,
            method: 'GET',
            auth: AUTHORIZATION_API,
            headers: HEADERS_API
        });
        promise.then((result) => {
            console.log('result', result)
            dispatch({
                type: GET_TRANSFER_DATA,
                transferData: result.data.resultObj
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}

export const getTransferDetailAction = (key) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN}Transfer/${key}`,
            method: 'GET',
            auth: AUTHORIZATION_API,
            headers: HEADERS_API
        });
        promise.then((result) => {
            dispatch({
                type: GET_TRANSFER_DETAIL_DATA,
                transferDetail: result.data.resultObj
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
