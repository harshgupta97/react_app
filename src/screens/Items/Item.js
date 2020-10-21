import React, { Component } from 'react'
import { AppCard } from '../../components/common';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Tag, Divider } from 'antd';

const { Title, Text } = Typography;

export default class Item extends Component {
    render() {
        const { item } = this.props;
        return (
            <div>
                <Row className="my-2">
                    <Col span={24} xl={6} xs={24} md={12}>
                        <AppCard>
                            <div className="d-flex justify-content-between">
                                <Title level={4}>{item.title} <Tag color={item.tag === 'Product' ? 'purple' : 'blue'}>{item.tag}</Tag></Title>
                                <Link to={''}><EditOutlined /></Link>
                            </div>
                            <Text type="secondary">SKU: {item.SKU}</Text>
                            <Divider />
                            <Row>
                                <Col span={10}>
                                    <Text type="secondary">HSN Number</Text><br />
                                    <Text type="secondary">{item.HSN}</Text>
                                </Col>
                                <Col span={4}>
                                    <div className="vertical-line"></div>
                                </Col>
                                <Col span={10}>
                                    <Text type="secondary">Item Price</Text><br />
                                    <Text type="secondary">{item.price_fmt}</Text>
                                </Col>
                            </Row>
                            <Divider dashed={true} />
                            <Row>
                                <Col span={8}>
                                    <Text type="secondary">Tax Rate</Text><br />
                                    <Text type="secondary">{item.taxRate}{item.ch}</Text>
                                </Col>
                                <Col span={8}>
                                    <Text type="secondary">Unit</Text><br />
                                    <Text type="secondary">{item.unit}</Text>
                                </Col>
                                <Col span={8}>
                                    <Text type="secondary">Initial Stock</Text><br />
                                    <Text type="secondary">{item.initialStock}</Text>
                                </Col>
                            </Row>
                        </AppCard>
                    </Col>
                </Row>
            </div>
        )
    }
}
