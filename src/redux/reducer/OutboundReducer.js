import { GET_OUTBOUND_DATA, GET_OUTBOUND_DETAIL_DATA } from "../type/APIKey"

const initialState = {
    outboundData: [],
    outboundDetail: {
        header: {},
        details: []
    },
}

export const OutboundReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OUTBOUND_DATA: {
            state.outboundData = action.outboundData
            return { ...state }
        }
        case GET_OUTBOUND_DETAIL_DATA: {
            state.outboundDetail.header = action.outboundDetail.header;
            state.outboundDetail.details = action.outboundDetail.details;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
