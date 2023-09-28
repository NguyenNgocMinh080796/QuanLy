import React from 'react'
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalHOC() {
    const { isModalOpen, componentModal } = useSelector(state => state.ModalReducer)

    const dispatch = useDispatch()
    const handleCancel = () => {
        dispatch({
            type: "HANDLE_CANCEL",
            isModalOpen: false
        })
    };

    return (
        <Modal open={isModalOpen} onCancel={handleCancel} footer=''>
            {componentModal}
        </Modal>
    )
}
