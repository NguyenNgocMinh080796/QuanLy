import { Button, Card, Space, message } from 'antd'
import React from 'react'
import { AUTHORIZATION_API, SHOW_MODAL } from '../redux/type/APIKey'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LogIn from './LogInLogOutRegister/LogIn/LogIn'

export default function HomeComponent() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { username, password } = AUTHORIZATION_API

    //Hiện Modal đăng nhập
    const showModal = () => {
        if (!username && !password) {
            dispatch({
                type: SHOW_MODAL,
                isModalOpen: true,
                conponentAction: <LogIn />
            })
        } else {
            errorLogIn()
        }
    }
    //Đăng xuất
    const logOut = () => {
        if (username && password) {
            navigate('/')
            success()
            setTimeout(() => {
                localStorage.setItem(
                    AUTHORIZATION_API.username = '',
                    AUTHORIZATION_API.password = ''
                )
            }, 2000)
        } else {
            errorLogOut()
        }
    }
    //Hiện thông báo đăng xuất thành công/ thất bại
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Log out successfully!',
        });
    };
    const errorLogIn = () => {
        messageApi.open({
            type: 'error',
            content: 'You are logged in!',
        });
    };
    const errorLogOut = () => {
        messageApi.open({
            type: 'error',
            content: 'You are not logged in!',
        });
    };

    return (
        <div style={{ width: 500, margin: 'auto' }}>
            {contextHolder}
            <Card style={{ textAlign: 'center', marginTop: 100 }} title='CHÀO MỪNG BẠN ĐẾN VỚI BÌNH NGUYÊN VÔ TẬN!'>
                <Space size='large'>
                    <Button type="primary" ghost onClick={() => { showModal() }}>Đăng nhập</Button>
                    <Button type="primary" ghost danger onClick={() => { logOut() }}>Đăng xuất</Button>
                </Space>
            </Card>
        </div>
    )
}
