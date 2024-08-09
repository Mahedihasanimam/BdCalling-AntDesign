
"use client"
import React from 'react';
import { Input, QRCode, Space } from 'antd';
const Qrcode = () => {
  const [text, setText] = React.useState('https://QrCode.Com/');
  return (
    <Space direction="vertical" align="center" className='flex items-center justify-center h-screen'>
      <QRCode value={text || '-'} />
      <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Space>
  );
};
export default Qrcode;