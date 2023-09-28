import { Card, Form, Button, Input, Row, Col, Radio } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function UserDetail() {
    const navigate = useNavigate()
    const location = useLocation()
    // console.log('location.state', location.state)
    const { custgroup, custcode, custname, custnameE2, street, town, delplant, postalcode, saleorg, distchannel, division, mobile, telephone, exporticy, shipto, jobs, status, isactive, referenceid, owner } = location.state
    //Radio
    const [value] = useState(isactive);

    //Thông tin hiển thị
    const CustomizedForm = ({ onChange, fields }) => (
        <Card
            title="CUSTOMER DETAIL"
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
                            name="custgroup"
                            label="Customer Group"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="custcode"
                            label="Customer Code"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="custname"
                            label="Customer Name"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="custnamE2"
                            label="Customer Name E2"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="street"
                            label="Street"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="town"
                            label="Town"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="postalcode"
                            label="Postal Code"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            name="delplant"
                            label="Del Plant"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="saleorg"
                            label="Sale Org"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="distchannel"
                            label="Dist Channel"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="division"
                            label="Division"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            name="mobile"
                            label="Mobile"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="telephone"
                            label="Telephone"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="exporticy"
                            label="Exporticy"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="shipto"
                            label="Shipto"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            name="jobs"
                            label="Jobs"
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
                            name="isactive"
                            label="Is Active"
                        >
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={0}>Disable</Radio>
                                <Radio value={1}>Enable</Radio>
                            </Radio.Group>
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
                            name="owner"
                            label="Owner"
                        >
                            <Input style={{ fontWeight: 'bolder' }} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>

    );

    const [fields, setFields] = useState([
        {
            name: ['custgroup'],
            value: custgroup,
        },
        {
            name: ['custcode'],
            value: custcode,
        },
        {
            name: ['custname'],
            value: custname,
        },
        {
            name: ['custnameE2'],
            value: custnameE2,
        },
        {
            name: ['street'],
            value: street,
        },
        {
            name: ['town'],
            value: town,
        },
        {
            name: ['delplant'],
            value: delplant,
        },
        {
            name: ['postalcode'],
            value: postalcode,
        },
        {
            name: ['saleorg'],
            value: saleorg,
        },
        {
            name: ['distchannel'],
            value: distchannel,
        },
        {
            name: ['division'],
            value: division,
        },
        {
            name: ['mobile'],
            value: mobile,
        },
        {
            name: ['telephone'],
            value: telephone,
        },
        {
            name: ['exporticy'],
            value: exporticy,
        },
        {
            name: ['shipto'],
            value: shipto,
        },
        {
            name: ['jobs'],
            value: jobs,
        },
        {
            name: ['status'],
            value: status,
        },
        {
            name: ['isactive'],
            value: isactive,
        },
        {
            name: ['owner'],
            value: owner,
        },
        {
            name: ['referenceid'],
            value: referenceid,
        },
    ]);

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
