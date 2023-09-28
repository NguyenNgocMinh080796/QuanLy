import React from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCustomerAction } from '../../../redux/action/MasterDataAction/CustomerAction';
import { AUTHORIZATION_API } from '../../../redux/type/APIKey';

export default function ListUser() {
    const dispatch = useDispatch()

    //Nếu đã đăng nhập thì gọi data
    if (AUTHORIZATION_API) {
        dispatch(getCustomerAction())
    }

    //Lấy từ reducer
    const data = useSelector(state => state.ListUserReducer.userData)
    // console.log('ListUser', data)

    //Cấu trúc cột
    const columns = [
        {
            width: 180,
            title: 'Customer code',
            dataIndex: 'custcode',
            render: (text, record) => <NavLink to='userdetail' state={record}>{text}</NavLink>
        },
        {
            title: 'Customer name',
            dataIndex: 'custname',
        },
        {
            title: 'Address',
            render: (text, record, index) => `${text.street} ${text.town}`
        },
        {
            title: 'Customer group',
            dataIndex: 'custgroup',
        },
    ];

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