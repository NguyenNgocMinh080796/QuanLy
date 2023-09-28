import { Card, Form, Button, Input, Row, Col, Space, Table } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function DetailTransfer() {
    const navigate = useNavigate()
    // console.log('location.state', location.state)

    //Data Table lấy từ reducer
    const { transdoccode, postingdate, documentdate, headertext, materialslip, _group, owner, referenceid, status, noteS1, noteS2, noteS3 } = useSelector(state => state.TransferReducer.transferDetail.header)
    const dataSource = useSelector(state => state.TransferReducer.transferDetail.details)

    //Thông tin hiển thị
    const CustomizedForm = ({ onChange, fields }) => (
        <Space.Compact block direction='vertical'>
            <Card
                title="TRANSFER HEADER"
                extra={<Button onClick={() => { navigate(-1) }} type='primary' ghost>Back</Button>}
                bordered={false}
                style={{
                    width: '100%',
                }}
            >
                <Form
                    layout="vertical"
                    fields={fields}
                    onFieldsChange={(_, allFields) => {
                        onChange(allFields);
                    }}
                    disabled
                >
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name="transdoccode"
                                label="Transdoc Code"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="postingdate"
                                label="Posting Date"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="documentdate"
                                label="Document Date"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="headertext"
                                label="Header Text"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="materialslip"
                                label="Material Slip"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                                name="_group"
                                label="Group"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="owner"
                                label="Owner"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="referenceid"
                                label="Reference Id"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="status"
                                label="Status"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name="noteS1"
                                label="noteS1"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="noteS2"
                                label="noteS2"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="noteS3"
                                label="noteS3"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <br />
            <Card
                title="TRANSFER DETAIL"
                bordered={false}
                style={{
                    width: '100%',
                }}
            >
                <Table dataSource={dataSource} columns={columns} scroll={{ x: 340, y: 200 }} />
            </Card>
        </Space.Compact>
    );
    const [fields, setFields] = useState([
        {
            name: ['transdoccode'],
            value: transdoccode,
        },
        {
            name: ['postingdate'],
            value: postingdate,
        },
        {
            name: ['documentdate'],
            value: documentdate,
        },
        {
            name: ['headertext'],
            value: headertext,
        },
        {
            name: ['materialslip'],
            value: materialslip,
        },
        {
            name: ['_group'],
            value: _group,
        },
        {
            name: ['owner'],
            value: owner,
        },
        {
            name: ['referenceid'],
            value: referenceid,
        },
        {
            name: ['status'],
            value: status,
        },
        {
            name: ['noteS1'],
            value: noteS1,
        },
        {
            name: ['noteS2'],
            value: noteS2,
        },
        {
            name: ['noteS3'],
            value: noteS3,
        },
    ]);
    const columns = [
        {
            title: 'Serial',
            dataIndex: 'serial',
            width: 100

        },
        {
            title: 'Transdoc Code',
            dataIndex: 'transdoccode',
            width: 180

        },
        {
            title: 'Sku Code',
            dataIndex: 'skucode',
            width: 100

        },
        {
            title: 'Descr',
            dataIndex: 'descr',
            width: 100

        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            width: 100

        },
        {
            title: 'Uom',
            dataIndex: 'uom',
            width: 100

        },
        {
            title: 'Vendor',
            dataIndex: 'vendor',
            width: 100

        },
        {
            title: 'Movement Type',
            dataIndex: 'movementtype',
            width: 180

        },
        {
            title: 'Reason Code',
            dataIndex: 'reasoncode',
            width: 100

        },
        {
            title: 'Plant',
            dataIndex: 'plant',
            width: 100

        },
        {
            title: 'Sloc',
            dataIndex: 'sloc',
            width: 100

        },
        {
            title: 'Batch',
            dataIndex: 'batch',
            width: 100

        },
        {
            title: 'Production Date',
            dataIndex: 'productiondate',
            width: 180

        },
        {
            title: 'Expiry Date',
            dataIndex: 'expirydate',
            width: 100

        },
        {
            title: 'Destination Sku',
            dataIndex: 'destinationsku',
            width: 180

        },
        {
            title: 'Destination Plant',
            dataIndex: 'destinationplant',
            width: 180

        },
        {
            title: 'Destination Sloc',
            dataIndex: 'destinationsloc',
            width: 180

        },
        {
            title: 'Destination Batch',
            dataIndex: 'destinationbatch',
            width: 180

        },
        {
            dataIndex: '_group',
            title: 'Group',
            width: 100

        },
        {
            dataIndex: 'owner',
            title: 'Owner',
            width: 100

        },
        {
            dataIndex: 'referenceid',
            title: 'Reference Id',
            width: 180

        },
        {
            dataIndex: 'status',
            title: 'Status',
            width: 100

        },
        {
            dataIndex: 'noteS1',
            title: 'noteS1',
            width: 100

        },
        {
            dataIndex: 'noteS2',
            title: 'noteS2',
            width: 100

        },
        {
            dataIndex: 'noteS3',
            title: 'noteS3',
            width: 100

        },
    ];

    return (
        <>
            <CustomizedForm
                fields={fields}
                onChange={(newFields) => {
                    setFields(newFields);
                }}
            />
        </>
    )
}
