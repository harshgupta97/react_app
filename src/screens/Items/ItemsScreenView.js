import React, { Component } from 'react'
import { AppCard } from '../../components/common';
import { Link } from 'react-router-dom';
import { EditOutlined, DownOutlined, FilterOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Tag, Divider, Menu, Dropdown } from 'antd';

const { Title, Text } = Typography;

export default class ItemsScreenView extends Component {

    state = {
        data: [
            { title: 'Vedic Chai', tag: 'Product', SKU: '761253401987', HSN: '1234567', price: '10000000', price_fmt: 'INR 10,000,000.000', taxRate: '5', ch: '%', unit: 'KG', initialStock: '23' },
            { title: 'Vedic Chai', tag: 'Product', SKU: '761253401987', HSN: '1234567', price: '10000000', price_fmt: 'INR 10,000,000.000', taxRate: '5', ch: '%', unit: 'KG', initialStock: '23' },
            { title: 'Vedic Chai', tag: 'Service', SKU: '761253401987', HSN: '1234567', price: '10000000', price_fmt: 'INR 10,000,000.000', taxRate: '5', ch: '%', unit: 'KG', initialStock: '23' },
        ]
    }

    renderItems() {
        if (this.state.data.length === 0) return <p>No items!</p>

        return (
            <>
                {
                    this.state.data.map((item) => (
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
                                        <Col span={12}>
                                            <Text type="secondary">HSN Number</Text><br />
                                            <Text type="secondary">{item.HSN}</Text>
                                            <div className="vl"></div>
                                        </Col>
                                        <Col span={12}>
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
                    ))
                }
            </>
        );
    }

    render() {

        const sort = (
            <Menu>
                <Menu.Item>
                    <Link to={''}>Name</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={''}>Date added</Link>
                </Menu.Item>
            </Menu>
        );

        const filter = (
            <Menu>
                <Menu.Item>
                    <Link to={''}>Product</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={''}>Service</Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className="mb-9">
                <Row className="mx-2">
                    <Col span={12} xs={12} xl={3}>
                        <Dropdown overlay={sort}>
                            <a href="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Sort by <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>
                    <Col span={12} xs={12} xl={3}>
                        <Dropdown overlay={filter}>
                            <a href="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <FilterOutlined /> Filter
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
                {this.renderItems()}
                <Row className="mx-2">
                    <Col span={6} xs={24} md={12} xl={6}>
                        <div className="d-flex justify-content-end">
                            <Link className="btn btn-primary add-item mx-4">Add Item</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
