import { GET_TRANSFER_DATA, GET_TRANSFER_DETAIL_DATA } from "../type/APIKey";

const initialState = {
    transferData: [],
    transferDetail: {
        header: {},
        details: []
    },
}

export const TransferReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSFER_DATA: {
            state.transferData = action.transferData
            return { ...state }
        }
        case GET_TRANSFER_DETAIL_DATA: {
            state.transferDetail.header = action.transferDetail.header;
            state.transferDetail.details = action.transferDetail.details;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
