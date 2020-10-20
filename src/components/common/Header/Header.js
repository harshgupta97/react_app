import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import { PageHeader } from 'antd';
import HeaderMenu from "../HeaderMenu";

const AppHeader = ({ title, route }) => {
    let history = useHistory();
    return (
        <PageHeader
            className="site-page-header"
            onBack={() => history.goBack()}
            title={title}
            extra={[
                <HeaderMenu route={route} title={title} />
            ]}
        />
    )
}

export default AppHeader;