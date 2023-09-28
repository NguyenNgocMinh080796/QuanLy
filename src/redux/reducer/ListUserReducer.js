import { GET_CUSTOMER_DATA } from "../type/APIKey"

const initialState = {
    userData: [],
}

export const ListUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMER_DATA: {
            state.userData = action.userData
            return { ...state }
        }

        default:
            return { ...state }
    }
}
