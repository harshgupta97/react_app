import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DownOutlined, FilterOutlined } from '@ant-design/icons';
import { Row, Col, Menu, Dropdown } from 'antd';
import Item from './Item';

export default class ItemsScreenView extends Component {

    state = {
        data: [
            { title: 'Vedic Chai', tag: 'Product', SKU: '761253401987', HSN: '1234567', price: '10000000', price_fmt: 'INR 10,000,000.000', taxRate: '5', ch: '%', unit: 'KG', initialStock: '23' },
            { title: 'Vedic Chai', tag: 'Product', SKU: '761253401987', HSN: '1234567', price: '10000000', price_fmt: 'INR 10,000,000.000', taxRate: '5', ch: '%', unit: 'KG', initialStock: '23' },
            { title: 'Vedic Chai', tag: 'Service', SKU: '761253401987', HSN: '1234567', price: '10000000', price_fmt: 'INR 10,000,000.000', taxRate: '5', ch: '%', unit: 'KG', initialStock: '23' },
        ]
    }

    /**
     * Method return items list
     */
    renderItems() {
        // Looking for data
        if (this.state.data.length === 0) return <p>No items!</p>

        return this.state.data.map(item => <Item item={item} />);
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
