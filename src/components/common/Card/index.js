import React from 'react';
import { Card } from 'antd';

const AppCard = ({
    children,
    style
}) => {
    return (
        <Card size='small' className={`shadow-sm m-2 ${style} rounded`}>
            {children}
        </Card>
    )
}

export default AppCard;