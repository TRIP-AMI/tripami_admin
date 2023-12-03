"use client";

import { Layout } from "antd";

const { Content } = Layout;

import DefaultHeader from "./Header";
import SidebarMenu from "./SideBar";

function DefalutLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <DefaultHeader></DefaultHeader>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          style={{
            padding: "24px 0",
            minHeight: "90vh",
          }}
        >
          <SidebarMenu />
          <Content
            style={{
              padding: "24px",
              minHeight: 280,
              marginLeft: 24,
              background: "#fff",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default DefalutLayout;
