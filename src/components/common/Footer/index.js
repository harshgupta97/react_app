import React, { Component } from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

export default class AppFooter extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="sticky-footer">
                <Footer style={{ textAlign: 'center' }}>
                    {children}
                </Footer>
            </div>
        )
    }
}
