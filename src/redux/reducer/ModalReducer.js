import React from "react"
import { HANDLE_CANCEL, HANDLE_OK, SHOW_MODAL } from "../type/APIKey"

const initialState = {
    isModalOpen: false,
    componentModal: <p>hihi</p>
}

export const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL: {
            return {
                ...state, isModalOpen: true, componentModal: action.conponentAction
            }
        }
        case HANDLE_OK: {
            return { ...state, isModalOpen: false }
        }
        case HANDLE_CANCEL: {
            return { ...state, isModalOpen: false }
        }

        default:
            return { ...state }
    }
}
