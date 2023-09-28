import Axios from 'axios'
import { AUTHORIZATION_API, DOMAIN, GET_INBOUND_DATA, GET_INBOUND_DETAIL_DATA, HEADERS_API } from '../../type/APIKey';

export const getInboundAction = () => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN}Inbound`,
            method: 'GET',
            auth: AUTHORIZATION_API,
            headers: HEADERS_API
        });
        promise.then((result) => {
            dispatch({
                type: GET_INBOUND_DATA,
                inboundData: result.data.resultObj
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}

export const getInboundDetailAction = (key) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN}Inbound/${key}`,
            method: 'GET',
            auth: AUTHORIZATION_API,
            headers: HEADERS_API
        });
        promise.then((result) => {
            dispatch({
                type: GET_INBOUND_DETAIL_DATA,
                inboundDetail: result.data.resultObj
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
