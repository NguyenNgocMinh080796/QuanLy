import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { getInboundAction, getInboundDetailAction } from '../../../redux/action/ExecutionAction/InboundAction';
import { AUTHORIZATION_API } from '../../../redux/type/APIKey';

export default function Inbound() {
    const dispatch = useDispatch()

    //Nếu đã đăng nhập thì gọi data
    if (AUTHORIZATION_API) {
        dispatch(getInboundAction())
    }

    //Data Table lấy từ reducer
    const data = useSelector(state => state.InboundReducer.inboundData)
    // console.log('inboundData', data)

    //Cấu trúc cột
    const columns = [
        {
            title: 'Document Number',
            dataIndex: 'documentnumber',
            render: (text, record, index) => <Button type='link' onClick={() => { callDetailInbound(text) }}><NavLink to='inbounddetail' state={text}>{text}</NavLink></Button>
        },
        {
            title: 'Delivery Type',
            dataIndex: 'deliverytype',
        },
        {
            title: 'Plan Delived Date',
            dataIndex: 'plandeliveddate',
        },
        {
            title: 'Vendor',
            dataIndex: 'vendor',
        },
        {
            title: 'Group',
            dataIndex: '_group',
        },
        {
            title: 'NoteS3',
            dataIndex: 'noteS3',
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (text, record, index) => (
        //         <>
        //             <Button type='link' ><NavLink to='inbounddetail' state={record}><EyeOutlined /></NavLink></Button>
        //             <Button type='link' ><EditOutlined /></Button >
        //             <Button type='link' danger><DeleteOutlined /></Button>
        //         </>
        //     ),
        // },
    ];
    //Gọi xử lý thông tin chi tiết của Inbound trước khi hiển thị ra màn hình InboundDetail
    const callDetailInbound = (text) => {
        dispatch(getInboundDetailAction(text))
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
