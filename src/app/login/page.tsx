"use client";

import { Card } from "antd";
import LoginForm from "@/components/Form/LoginForm";

function LoginPage() {
  return (
    <Card bodyStyle={{ padding: 20, minWidth: 500, overflow: "hidden" }}>
      <LoginForm />
    </Card>
  );
}

export default LoginPage;
