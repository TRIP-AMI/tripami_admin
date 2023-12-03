"use client";

import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useLoginForm } from "@/hooks/loginhook";

const { Title } = Typography;

const LoginForm: React.FC = () => {
  const { onFinish, onFinishFailed } = useLoginForm();
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title style={{ fontFamily: "Pretendard", textAlign: "center" }}>
        TRIPAMI
      </Title>

      <Form.Item
        name="username"
        rules={[{ required: true, message: "Username을 입력해주세요!" }]}
      >
        <Input
          prefix={<UserOutlined style={{ opacity: 0.4 }} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "패스워드를 입력해주세요!" }]}
      >
        <Input
          prefix={<LockOutlined style={{ opacity: 0.4 }} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
