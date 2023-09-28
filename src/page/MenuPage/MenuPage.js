import React from 'react'
import {
    MenuFoldOutlined,
    DashboardOutlined,
    HomeOutlined,
    MenuUnfoldOutlined,
    Loading3QuartersOutlined,
    CustomerServiceOutlined,
    QuestionCircleOutlined,
    PoweroffOutlined,
} from '@ant-design/icons';
import { Popover, Image, Button, Layout, Menu, theme, Row, Col, Space, Avatar, message, FloatButton } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ContentComponent from '../../component/ContentComponent/ContentComponent'
import { AUTHORIZATION_API, SHOW_MODAL } from '../../redux/type/APIKey';
import LogIn from '../../component/LogInLogOutRegister/LogIn/LogIn';

//Layout
const { Header, Sider, Content } = Layout;

export default function MenuComponent() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { username, password } = AUTHORIZATION_API

    //Thu phóng Menu
    const [collapsed, setCollapsed] = useState(false);
    //Màu nền Content
    const {
        token: { colorBgContainer },
    } = theme.useToken();

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
            }, 800)
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

    //Popover
    const content = (
        <Space>
            <Button type="primary" ghost onClick={() => { showModal() }}>Đăng nhập</Button>
            <Button type="primary" ghost danger onClick={() => { logOut() }}>Đăng xuất</Button>
        </Space>
    );

    return (
        <>
            {/* Hiện alert */}
            {contextHolder}

            {/* Nút chức năng góc màn hình */}
            <FloatButton.Group
                trigger="hover"
                type="primary"
                style={{
                    right: 94,
                }}
                icon={<CustomerServiceOutlined />}
            >
                <FloatButton icon={<QuestionCircleOutlined />} tooltip={<div>QuestionCircleOutlined</div>} />
                <FloatButton tooltip={<div>FloatButton</div>} />
                <FloatButton.BackTop visibilityHeight={0} tooltip={<div>BackTop</div>} />
                <FloatButton onClick={() => { logOut() }} icon={<PoweroffOutlined />} tooltip={<div>Log Out</div>} />
            </FloatButton.Group>

            {/* Bố cục màn hình chính */}
            <Layout style={{ height: window.innerHeight }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Image
                        width='100%'
                        src="https://picsum.photos/200"
                    />
                    <Menu
                        onClick={(key) => { navigate(key.key) }}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '/',
                                icon: <HomeOutlined />,
                                label: 'Home',
                            },
                            {
                                key: 'masterdata',
                                icon: <DashboardOutlined />,
                                label: 'Master Data',
                                children: [
                                    {
                                        key: '/materials',
                                        label: 'Materials',
                                    },
                                    {
                                        key: '/customers',
                                        label: 'Customers',
                                    },
                                ]
                            },
                            {
                                key: 'execution',
                                icon: <Loading3QuartersOutlined />,
                                label: 'Execution',
                                children: [
                                    {
                                        key: '/inbound',
                                        label: 'Inbound',
                                    },
                                    {
                                        key: '/outbound',
                                        label: 'Outbound',
                                    },
                                    {
                                        key: '/transfer',
                                        label: 'Transfer',
                                    },
                                ]
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Row gutter={16}>
                            {/* Nút thu phóng Menu */}
                            <Col span={21}>
                                <Button
                                    type="text"
                                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: '16px',
                                        width: 64,
                                        height: 64,
                                    }}
                                />
                            </Col>
                            {/* Avatar login */}
                            <Col span={3} >
                                <Popover content={content} title="Setting" >
                                    <Avatar size="large" src='https://i.pravatar.cc/300' />
                                </Popover>
                            </Col>
                        </Row>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            overflowY: 'scroll',
                            background: colorBgContainer,
                        }}
                    >
                        <ContentComponent />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
