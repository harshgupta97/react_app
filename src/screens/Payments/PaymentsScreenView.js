import React, { Component } from 'react'
import { Row, Col, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { AppCard } from '../../components/common';
import { RightOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default class PaymentScreenView extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={20} xl={6} xs={24} md={12}>
                        <AppCard>
                            <Space align='center' className="d-flex justify-content-between">
                                <Title level={4}>My Report</Title>
                                <div>
                                    <Link to={''}><RightOutlined /></Link>
                                </div>
                            </Space>
                        </AppCard>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} xl={6} xs={24} md={12}>
                        <AppCard>
                            <Space align='center' className="d-flex justify-content-between">
                                <Title level={4}>Statements Report</Title>
                                <div>
                                    <Link to={''}><RightOutlined /></Link>
                                </div>
                            </Space>
                        </AppCard>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} xl={6} xs={24} md={12}>
                        <AppCard>
                            <Space align='center' className="d-flex justify-content-between">
                                <Title level={4}>Invoice Report</Title>
                                <div>
                                    <Link to={''}><RightOutlined /></Link>
                                </div>
                            </Space>
                        </AppCard>
                    </Col>
                </Row>
            </div>
        )
    }
}
