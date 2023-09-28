import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { getTransferAction, getTransferDetailAction } from '../../../redux/action/ExecutionAction/TransferAction';
import { AUTHORIZATION_API } from '../../../redux/type/APIKey';

export default function Transfer() {
    const dispatch = useDispatch()

    //Nếu đã đăng nhập thì gọi data
    if (AUTHORIZATION_API) {
        dispatch(getTransferAction())
    }
    //Data Table lấy từ reducer
    const data = useSelector(state => state.TransferReducer.transferData)
    // console.log('dataTransfer', data)

    //Cấu trúc cột
    const columns = [
        {
            title: 'Transdoc Code',
            dataIndex: 'transdoccode',
            render: (text, record, index) => <Button type='link' onClick={() => { callDetailTransfer(text) }}><NavLink to='transferdetail' state={text}>{text}</NavLink></Button>,
        },
        {
            title: 'Document Date',
            dataIndex: 'documentdate',
        },
        {
            title: 'Posting Date',
            dataIndex: 'postingdate',
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
        },
    ];

    //Gọi xử lý thông tin chi tiết của Transfer trước khi hiển thị ra màn hình TransferDetail
    const callDetailTransfer = (text) => {
        dispatch(getTransferDetailAction(text))
    }

    return (
        <Table
            columns={columns}
            dataSource={data}
            scroll={{
                y: 340,
            }}
        />
    )
}
