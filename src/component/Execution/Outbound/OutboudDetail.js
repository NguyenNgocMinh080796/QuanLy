import { Card, Form, Button, Input, Row, Col, Space, Table } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function OutboudDetail() {
    const navigate = useNavigate()
    // console.log('location.state', location.state)

    //Data Table lấy từ reducer
    const { customer, customergroup, customername, deliveryordercode, deliveryplace, deliverytype, eta, etd, grossweight, latitude, longitude, netweight, pgidate, pgitime, plant, plantsloc, shipto, shiptoaddr, shitoname, telephone, transporter, transportername, volume, _group, owner, referenceid, status, noteS1, noteS2, noteS3 } = useSelector(state => state.OutboundReducer.outboundDetail.header)
    const dataSource = useSelector(state => state.OutboundReducer.outboundDetail.details)

    //Thông tin hiển thị
    const CustomizedForm = ({ onChange, fields }) => (
        <Space.Compact block direction='vertical'>
            <Card
                title="OUTBOUND HEADER"
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
                        <Col span={12}>
                            <Form.Item
                                name="customer"
                                label="Customer"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="customergroup"
                                label="Customer Group"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="customername"
                                label="Customer Name"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name="deliveryordercode"
                                label="Delivery Order Code"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="deliveryplace"
                                label="Delivery Place"
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
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="eta"
                                label="eta"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="etd"
                                label="etd"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                                name="grossweight"
                                label="Gross Weight"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="latitude"
                                label="Latitude"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="longitude"
                                label="Longitude"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="netweight"
                                label="Net Weight"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                                name="pgidate"
                                label="pgidate"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="pgitime"
                                label="pgi Time"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="plant"
                                label="Plant"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="plantsloc"
                                label="Plant Sloc"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="shipto"
                                label="Ship To"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="shitoname"
                                label="Receiver"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="shiptoaddr"
                                label="Ship To Address"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name="telephone"
                                label="Telephone"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="transporter"
                                label="Transporter"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="volume"
                                label="Volume"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="transportername"
                                label="Transporter Name"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name="referenceid"
                                label="Reference Id"
                            >
                                <Input style={{ fontWeight: 'bolder' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="status"
                                label="Status"
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
                title="OUTBOUND DETAIL"
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
            name: ['customer'],
            value: customer,
        },
        {
            name: ['customergroup'],
            value: customergroup,
        },
        {
            name: ['customername'],
            value: customername,
        },
        {
            name: ['deliveryordercode'],
            value: deliveryordercode,
        },
        {
            name: ['deliveryplace'],
            value: deliveryplace,
        },
        {
            name: ['deliverytype'],
            value: deliverytype,
        },
        {
            name: ['eta'],
            value: eta,
        },
        {
            name: ['etd'],
            value: etd,
        },
        {
            name: ['grossweight'],
            value: grossweight,
        },
        {
            name: ['latitude'],
            value: latitude,
        },
        {
            name: ['longitude'],
            value: longitude,
        },
        {
            name: ['netweight'],
            value: netweight,
        },
        {
            name: ['pgidate'],
            value: pgidate,
        },
        {
            name: ['pgitime'],
            value: pgitime,
        },
        {
            name: ['plant'],
            value: plant,
        },
        {
            name: ['plantsloc'],
            value: plantsloc,
        },
        {
            name: ['shipto'],
            value: shipto,
        },
        {
            name: ['shiptoaddr'],
            value: shiptoaddr,
        },
        {
            name: ['shitoname'],
            value: shitoname,
        },
        {
            name: ['telephone'],
            value: telephone,
        },
        {
            name: ['transporter'],
            value: transporter,
        },
        {
            name: ['transportername'],
            value: transportername,
        },
        {
            name: ['volume'],
            value: volume,
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
            title: 'Delivery Order Code',
            dataIndex: 'deliveryordercode',
            width: 180
        },
        {
            title: 'lineno',
            dataIndex: 'lineno',
            width: 100

        },
        {
            title: 'noteS1',
            dataIndex: 'noteS1',
            width: 100

        },
        {
            title: 'noteS2',
            dataIndex: 'noteS2',
            width: 100

        },
        {
            title: 'noteS3',
            dataIndex: 'noteS3',
            width: 100

        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            width: 100

        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            width: 100

        },
        {
            title: 'Reference Id',
            dataIndex: 'referenceid',
            width: 180

        },
        {
            title: 'Serial',
            dataIndex: 'serial',
            width: 100

        },
        {
            title: 'Sku Code',
            dataIndex: 'skucode',
            width: 180

        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 100

        },
        {
            title: 'ton',
            dataIndex: 'ton',
            width: 100

        },
        {
            title: 'uom',
            dataIndex: 'uom',
            width: 100

        },
        {
            title: '_group',
            dataIndex: 'Group',
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
