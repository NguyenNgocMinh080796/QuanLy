import { GET_INBOUND_DATA, GET_INBOUND_DETAIL_DATA } from "../type/APIKey";

const initialState = {
    inboundData: [],
    inboundDetail: {
        header: {},
        details: []
    },
}

export const InboundReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INBOUND_DATA: {
            state.inboundData = action.inboundData
            return { ...state }
        }
        case GET_INBOUND_DETAIL_DATA: {
            state.inboundDetail.header = action.inboundDetail.header;
            state.inboundDetail.details = action.inboundDetail.details;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
