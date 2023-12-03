"use client";

import { useState } from "react";
import { BarsOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(
    <Link href="/ta/dashboard">Dashboard</Link>,
    "dashboard",
    <BarsOutlined />,
  ),
  getItem("회원 관리", "member", <UserOutlined />, [
    getItem(<Link href="/ta/member">회원 목록</Link>, "member_list"),
  ]),
  getItem("관리자 관리", "manager", <UserOutlined />, [
    getItem(<Link href="/ta/manager">관리자 목록</Link>, "manager_list"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = items.map((item) => item?.key);

const SidebarMenu = () => {
  const [openKeys, setOpenKeys] = useState([""]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ height: "100%" }}
        items={items}
      />
    </Sider>
  );
};

export default SidebarMenu;
