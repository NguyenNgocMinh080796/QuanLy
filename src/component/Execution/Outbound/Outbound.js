import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { getoutboundAction, getoutboundDetailAction } from '../../../redux/action/ExecutionAction/OutboundAction';
import { AUTHORIZATION_API } from '../../../redux/type/APIKey';

export default function Outbound() {
    const dispatch = useDispatch()

    //Nếu đã đăng nhập thì gọi data
    if (AUTHORIZATION_API) {
        dispatch(getoutboundAction())
    }

    //Data Table lấy từ reducer
    const data = useSelector(state => state.OutboundReducer.outboundData)
    // console.log('dataOutbound', data)

    //Cấu trúc cột
    const columns = [
        {
            title: 'Delivery Order Code',
            dataIndex: 'deliveryordercode',
            render: (text, record, index) => <Button type='link' onClick={() => { callDetailOutbound(text) }}><NavLink to='outbounddetail'>{text}</NavLink></Button>,
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
        },
        {
            title: 'Customer name',
            dataIndex: 'customername',
        },
        {
            title: 'Delivery Place',
            dataIndex: 'deliveryplace',
        },
        {
            title: 'Delivery Type',
            dataIndex: 'deliverytype',
        },
    ];

    //Gọi xử lý thông tin chi tiết của Outbound trước khi hiển thị ra màn hình OutboundDetail
    const callDetailOutbound = (text) => {
        dispatch(getoutboundDetailAction(text))
    }

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{
                    y: 340,
                }}
            />
        </>
    )
}
