import { Space, Spin } from 'antd';
import React from 'react';

const Loader: React.FC = () => (
    <Space direction="vertical" style={{ width: '100%', position: 'absolute', top: '50%' }}>
        <Space>
            <Spin tip="Loading..." size="large" />
        </Space>
    </Space>
);

export default Loader;

