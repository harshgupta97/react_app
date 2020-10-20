import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    HomeOutlined,
    SettingOutlined,
    AuditOutlined,
    FileOutlined
} from '@ant-design/icons';
import { Row, Col } from 'antd';
import AppFooter from '../Footer';
import { onNavigate } from '../../../actions/navigation';

class AppBottomNav extends Component {
    render() {
        return (
            <AppFooter>
                <Row justify="space-between">
                    <Col span={4}>
                        <div className="menu-button">
                            <Link to={'/'} data-toggle="tooltip" title="Home" onClick={() => this.props.onNavigate({ title: 'Home', route: '' })}>
                                <HomeOutlined style={{ fontSize: '20px', color: '#08c' }} /><br />Home
                                </Link>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="">
                            <Link to={'/invoices'} data-toggle="tooltip" title="Invoices" onClick={() => this.props.onNavigate({ title: 'Invoices', route: 'invoices' })}>
                                <FileOutlined style={{ fontSize: '20px', color: '#08c' }} /><br />Invoices
                                </Link>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="">
                            <Link to={'/bills'} data-toggle="tooltip" title="Bills" onClick={() => this.props.onNavigate({ title: 'Bills', route: 'bills' })}>
                                <AuditOutlined style={{ fontSize: '20px', color: '#08c' }} /><br />Bills
                                </Link>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="">
                            <Link to={'/settings'} data-toggle="tooltip" title="Home" onClick={() => this.props.onNavigate({ title: 'Settings', route: 'settings' })}>
                                <SettingOutlined style={{ fontSize: '20px', color: '#08c' }} /><br />Settings
                                </Link>
                        </div>
                    </Col>
                </Row>
            </AppFooter>
        )
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

const mapDispatchToProps = {
    onNavigate
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBottomNav);
