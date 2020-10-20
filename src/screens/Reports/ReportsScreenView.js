import React, { Component } from 'react';
import { Row, Col, Space, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { AppCard } from '../../components/common';
import { RightOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default class ReportsScreenView extends Component {
    render() {
        return (
            <div className="mb-9">
                <Row>
                    <Col span={10} xl={3} xs={12} md={6}>
                        <AppCard>
                            <div className="text-center">
                                <ClockCircleOutlined />
                                <Title level={4} className="text-secondary">Total Invoices</Title>
                                <p className="h5"><strong>35,8800</strong></p>
                            </div>
                        </AppCard>
                    </Col>
                    <Col span={10} xl={3} xs={12} md={6}>
                        <AppCard>
                            <div className="text-center">
                                <ClockCircleOutlined />
                                <Title level={4} className="text-secondary">Total Revenue</Title>
                                <p className="h5"><strong>INR 26,480,100.00</strong></p>
                            </div>
                        </AppCard>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} xl={6} xs={24} md={12}>
                        <AppCard style="app-bg-danger">
                            <div className="d-flex justify-content-between">
                                <Title level={4} className="mt-4">Total Due Amount</Title>
                                <Title level={4} className="text-danger">INR 100,000.00</Title>
                            </div>
                        </AppCard>
                    </Col>
                </Row>
                <Row><Col span={20} xl={6} xs={24} md={12}><Divider /></Col></Row>
                <div className="mx-2">
                    <Title level={3} className="text-primary">Get Reports</Title>
                </div>
                <Row>
                    <Col span={20} xl={6} xs={24} md={12}>
                        <AppCard>
                            <Space align='center' className="d-flex justify-content-between">
                                <Title level={4}>Invoice Reports</Title>
                                <div>
                                    <Link to={''}><RightOutlined /></Link>
                                </div>
                            </Space>
                        </AppCard>
                        <Row className="mx-2">
                            <Col className="m-1" span={24} xl={8} xs={10} md={10}>
                                <div className="alert alert-secondary">Get Daily Report</div>
                            </Col>
                            <Col className="m-1" span={24} xl={7} xs={10} md={10}>
                                <div className="alert alert-secondary">Get Monthly</div>
                            </Col>
                            <Col className="m-1" span={24} xl={7} xs={10} md={10}>
                                <div className="alert alert-secondary">Financial Year</div>
                            </Col>
                            <Col className="m-1" span={24} xl={6} xs={10} md={10}>
                                <div className="alert alert-secondary">Custom</div>
                            </Col>
                            <Col className="m-1" span={24} xl={7} xs={10} md={10}>
                                <div className="alert alert-secondary">More Reports</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} xl={6} xs={24} md={12}>
                        <AppCard>
                            <Space align='center' className="d-flex justify-content-between">
                                <Title level={4}>Payment Reports</Title>
                                <div>
                                    <Link to={''}><RightOutlined /></Link>
                                </div>
                            </Space>
                        </AppCard>
                        <Row className="mx-2">
                            <Col span={24} xl={6} xs={10} md={10}>
                                <div className="alert alert-secondary m-1">My Daily</div>
                            </Col>
                            <Col span={24} xl={8} xs={10} md={10}>
                                <div className="alert alert-secondary m-1">My Monthly</div>
                            </Col>
                            <Col span={24} xl={9} xs={10} md={10}>
                                <div className="alert alert-secondary m-1">My Financial Year</div>
                            </Col>
                            <Col span={24} xl={6} xs={10} md={10}>
                                <div className="alert alert-secondary m-1">Custom</div>
                            </Col>
                            <Col span={24} xl={9} xs={10} md={10}>
                                <div className="alert alert-secondary m-1">Clients Payments</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div >

        )
    }
}
