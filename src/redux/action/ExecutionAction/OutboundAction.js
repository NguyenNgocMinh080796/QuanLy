import Axios from 'axios'
import { AUTHORIZATION_API, DOMAIN, GET_OUTBOUND_DATA, GET_OUTBOUND_DETAIL_DATA, HEADERS_API } from '../../type/APIKey';

export const getoutboundAction = () => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN}Outbound`,
            method: 'GET',
            auth: AUTHORIZATION_API,
            headers: HEADERS_API
        });
        promise.then((result) => {
            dispatch({
                type: GET_OUTBOUND_DATA,
                outboundData: result.data.resultObj
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}

export const getoutboundDetailAction = (key) => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN}Outbound/${key}`,
            method: 'GET',
            auth: AUTHORIZATION_API,
            headers: HEADERS_API
        });
        promise.then((result) => {
            dispatch({
                type: GET_OUTBOUND_DETAIL_DATA,
                outboundDetail: result.data.resultObj
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
