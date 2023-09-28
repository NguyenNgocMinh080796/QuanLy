import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Typography, Button, Form, Input, Divider, Space, message } from 'antd';
// import { Typography, Button, Checkbox, Form, Input, Divider, Space, Alert } from 'antd';
// import Register from '../Register/Register';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AUTHORIZATION_API, HANDLE_CANCEL, LOG_IN } from '../../../redux/type/APIKey';

const { Title } = Typography;

export default function LogIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //Hiện thông báo đăng nhập thành công/ thất bại
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Logged in successfully!',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Something is wrong, check your account and password again!',
        });
    };

    //Các xử lý khi đăng nhập thành công/ thất bại
    const formRef = React.useRef(null);
    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        if (values.username === 'PVM' && values.password === 'Abcd1234$') {
            //Thông báo đăng nhập thành công
            success()
            //Chuyển hướng trang đến Customer
            navigate('/customers')
            //Đóng Modal đăng nhập/ đăng ký
            dispatch({ type: HANDLE_CANCEL })
            //Reset lại input đăng nhập
            formRef.current?.resetFields();
            //Khóa form đăng nhập
            dispatch({ type: LOG_IN })
            //Cập nhật authorization, headers
            localStorage.setItem(
                AUTHORIZATION_API.username = values.username,
                AUTHORIZATION_API.password = values.password,
            )
        } else {
            //Thông báo đăng nhập thất bại
            error()
        }
    };

    //Hiện Modal đăng ký
    // const showModal = () => {
    //     dispatch({
    //         type: 'SHOW_MODAL',
    //         isModalOpen: true,
    //         conponentAction: <Register />
    //     })
    // }

    return (
        <>
            {contextHolder}
            <Title style={{ textAlign: 'center' }}>LOG IN</Title>
            <Form
                ref={formRef}
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Divider>
                    {/* <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Button type='link' className="login-form-forgot">
                            Forgot password
                        </Button>
                    </Form.Item> */}
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or
                            <Button type='link'>register now!</Button>
                            {/* <Button type='link' onClick={() => { showModal() }}>register now!</Button> */}
                        </Space>
                    </Form.Item>
                </Divider>
            </Form>
        </>
    )
}
