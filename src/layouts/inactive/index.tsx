"use client";

import { Flex, Layout } from "antd";

function InactiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Flex justify="center" align="center" style={{ height: "100%" }}>
        {children}
      </Flex>
    </Layout>
  );
}

export default InactiveLayout;
