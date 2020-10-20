import React, { Component } from 'react';
import { Row, Col, Space, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { AppCard, AppChart, AppNavButton } from '../../components/common';
import { RightOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default class HomeScreenView extends Component {
    render() {
        // Data set
        const data = [
            { year: 'Sep 01- Sep 07', value: 3 },
            { year: 'Sep 08- Sep 14', value: 4 },
            { year: 'Sep 15- Sep 22', value: 3.5 },
            { year: 'Sep 23- Sep 29', value: 5 },
            { year: 'Sep 30- Sep 06', value: 4.9 },
            { year: 'Sep 07- Sep 08', value: 6 },
            { year: 'Sep 09- Sep 15', value: 5.3 },
            { year: 'Sep 15- Sep 21', value: 1.2 },
            { year: 'Sep 22- Sep 28', value: 4 },
        ];

        // Config
        const config = {
            data,
            height: 200,
            xField: 'year',
            yField: 'value',
            point: {
                size: 5,
                shape: 'diamond',
            },
        };
        return (
            <div className="mb-9">
                <Row>
                    <Col span={12} xl={3} xs={12}>
                        <AppCard>
                            <div className="text-center">
                                <span>&#x20B9;</span>
                                <Title level={4} className="text-secondary">Total Due</Title>
                                <p className="h4 text-danger"><strong>INR 35,8800.00</strong></p>
                            </div>
                        </AppCard>
                    </Col>
                    <Col span={12} xl={3} xs={12}>
                        <AppCard>
                            <div className="text-center">
                                <ClockCircleOutlined />
                                <Title level={4} className="text-secondary">Upcoming Due</Title>
                                <p className="h4"><strong>INR 35,8800.00</strong></p>
                            </div>
                        </AppCard>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} xl={6} xs={24}>
                        <AppCard>
                            <Title level={4} className="text-success">Record Payment</Title>
                        </AppCard>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} xl={6} xs={24}>
                        <AppCard>
                            <Space align='center' className="d-flex justify-content-between">
                                <Title level={4}>Oldest Invoice</Title>
                                <div>
                                    <Text type="danger" className="mx-4"><strong>127 Days</strong></Text>
                                    <Link to={''}><RightOutlined /></Link>
                                </div>
                            </Space>
                        </AppCard>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col span={24} xl={6} xs={24}>
                        <Row>
                            <Col span={12}>
                                <Title level={4} className="ml-4 text-primary">Total Revenue</Title>
                            </Col>
                            <Col span={12}>
                                <Title level={4} type="success" className="ml-4">INR 25,980.00</Title>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-between px-4">
                            <button className="btn btn-sm btn-outline-secondary active">Weekly</button>
                            <button className="btn btn-sm btn-outline-secondary">Month</button>
                            <button className="btn btn-sm btn-outline-secondary">Year</button>
                        </div>
                        <AppCard>
                            <AppChart config={config} />
                        </AppCard>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} xl={6} xs={24}>
                        <div className="mx-2">
                            <Title level={4} className="text-primary">Pages</Title>
                            <Divider />
                        </div>
                        <AppNavButton href={'payment'} title="Payments Reports" style="btn btn-sm btn-primary mx-2" />
                        <AppNavButton href={'report'} title="Reports" style="btn btn-sm btn-primary mx-2" />
                        <AppNavButton href={'items'} title="Items" style="btn btn-sm btn-primary mx-2" />
                    </Col>
                </Row>

            </div>
        )
    }
}
