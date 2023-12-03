"use client";

import Link from "next/link";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const headerMenu = [
  { label: "TRIPAMI", path: "/ta/dashboard" },
  { label: "로그인", path: "/login" },
  { label: "회원가입", path: "/join" },
];

function DefaultHeader() {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["TRIPAMI"]}>
        {headerMenu.map((item) => (
          <Menu.Item key={item.label}>
            <Link href={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
}

export default DefaultHeader;
