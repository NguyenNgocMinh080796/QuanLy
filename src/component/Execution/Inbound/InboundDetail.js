import { Card, Form, Button, Input, Row, Col, Space, Table } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function InboundDetail() {
    const navigate = useNavigate()

    //Data Table lấy từ reducer
    const { documentnumber, deliverytype, plandeliveddate, vendor, _group, owner, referenceid, status, noteS1, noteS2, noteS3 } = useSelector(state => state.InboundReducer.inboundDetail.header)
    const dataSource = useSelector(state => state.InboundReducer.inboundDetail.details)

    //Thông tin hiển thị
    const CustomizedForm = ({ onChange, fields }) => (
        <Space.Compact block direction='vertical'>
            <Card
                title="INBOUND HEADER"
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
                                name="documentnumber"
                                label="Document Number"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="deliverytype"
                                label="Delivery Type"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="plandeliveddate"
                                label="Plan Delived Date"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name="vendor"
                                label="Vendor"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="_group"
                                label="Group"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="owner"
                                label="Owner"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="referenceid"
                                label="Reference Id"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
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
                title="INBOUND DETAIL"
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
            name: ['documentnumber'],
            value: documentnumber,
        },
        {
            name: ['deliverytype'],
            value: deliverytype,
        },
        {
            name: ['plandeliveddate'],
            value: plandeliveddate,
        },
        {
            name: ['vendor'],
            value: vendor,
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
    //Cột Table
    const columns = [
        {
            title: 'Serial',
            dataIndex: 'serial',
            width: 100,
        },
        {
            dataIndex: 'documentnumber',
            title: 'Document Number',
            width: 180
        },
        {
            dataIndex: 'itemono',
            title: 'Itemono',
            width: 100
        },
        {
            dataIndex: 'skucode',
            title: 'Skucode',
            width: 100
        },
        {
            dataIndex: 'desc',
            title: 'Desc',
            width: 180
        },
        {
            dataIndex: 'deliveryqty',
            title: 'Delivery Qty',
            width: 100
        },
        {
            dataIndex: 'deliveryuom',
            title: 'Delivery Uom',
            width: 100
        },
        {
            dataIndex: 'pono',
            title: 'Pono',
            width: 100
        },
        {
            dataIndex: 'poitem',
            title: 'Po Item',
            width: 100
        },
        {
            dataIndex: 'grossweight',
            title: 'Gross Weight',
            width: 100
        },
        {
            dataIndex: 'weightuom',
            title: 'Weight Uom',
            width: 100
        },
        {
            dataIndex: 'volume',
            title: 'Volume',
            width: 100
        },
        {
            dataIndex: 'volumeuom',
            title: 'Volume Uom',
            width: 100
        },
        {
            dataIndex: 'receivingplant',
            title: 'Receiving Plant',
            width: 100
        },
        {
            dataIndex: 'sloc',
            title: 'Sloc',
            width: 100
        },
        {
            dataIndex: 'batch',
            title: 'Batch',
            width: 100
        },
        {
            dataIndex: 'manufdate',
            title: 'Manuf Date',
            width: 100
        },
        {
            dataIndex: 'expiredate',
            title: 'Expire Date',
            width: 100
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
