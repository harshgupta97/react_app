import React, { Component } from 'react';
import { Column } from '@ant-design/charts';

export default class AppChart extends Component {
    render() {
        // Passing config as props
        const { config } = this.props;
        return (<Column {...config} />)
    }
}
