import { AUTHORIZATION_API, DOMAIN, GET_CUSTOMER_DATA, HEADERS_API } from "../../type/APIKey";
import Axios from 'axios'

export const getCustomerAction = () => {
    return dispatch => {
        const promise = Axios({
            url: `${DOMAIN}customer`,
            method: 'GET',
            auth: AUTHORIZATION_API,
            headers: HEADERS_API
        });
        promise.then((result) => {
            // console.log('result', result)
            dispatch({
                type: GET_CUSTOMER_DATA,
                userData: result.data
            })
        })
        promise.catch((err) => {
            console.log('Error: ', err.message)
        })
    }
}
