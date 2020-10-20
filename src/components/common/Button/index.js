import React, { Component } from 'react';
import { Button } from 'antd';

export default class AppButton extends Component {
    render() {
        const { href, title, onClick, type = 'primary', children } = this.props;
        return (
            <Button href={href} type={type} onClick={onClick}>{children}{title}</Button>
        )
    }
}

