'use client';

import React from 'react';
import { Button, Checkbox, Form, Input, Typography, message } from 'antd';

const Login = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    message.success('Success');
    form.resetFields(); 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="bg-[#1F2937] flex flex-col items-center justify-center h-screen">
      <div className="border p-12 mx-2 rounded-md text-white min-w-96">
        <Typography.Title style={{color:'white'}} className="font-bold text-4xl my-4">Log In</Typography.Title>
        <Form
          form={form} 
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={<Typography.Title level={5} style={{color:"white"}}>User Name</Typography.Title>}
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="user name" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
             label={<Typography.Title level={5} style={{color:"white"}}>Password</Typography.Title>}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
                whitespace: true,
              },
            ]}
          >
            <Input.Password placeholder="password" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="text-white text-xl">Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;