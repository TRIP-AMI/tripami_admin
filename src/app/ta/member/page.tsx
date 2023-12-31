"use client";

import React from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { MemberListDataType, MemberStatus } from "@/types/member";
import Link from "next/link";

const columns: ColumnsType<MemberListDataType> = [
  {
    title: "회원 이름",
    dataIndex: "username",
    key: "username",
    render: (username, { id }) => <Link href={`member/${id}`}>{username}</Link>,
  },
  {
    title: "회원 이메일",
    dataIndex: "userEmail",
    key: "userEmail",
  },
  {
    title: "회원 가입일",
    dataIndex: "joinDate",
    key: "joinDate",
    render: (_, { joinDate }) => {
      return <span>{dayjs(joinDate).format("YYYY.MM.DD HH:mm")}</span>;
    },
  },
  {
    title: "회원 상태",
    dataIndex: "userState",
    key: "userState",
    render: (_, { userState }) => {
      const label = MemberStatus[userState];
      let color = "#000";
      color = userState === "ACTIVE" ? "green" : "red";
      return <Tag color={color}>{label}</Tag>;
    },
  },
];

const data: MemberListDataType[] = [
  {
    id: 1,
    username: "John Brown",
    userEmail: "test@email.com",
    joinDate: new Date(),
    userState: "BANNED",
  },
  {
    id: 2,
    username: "Jim Green",
    userEmail: "test@email.com",
    joinDate: new Date(),
    userState: "INACTIVE",
  },
  {
    id: 3,
    username: "Joe Black",
    userEmail: "test@email.com",
    joinDate: new Date(),
    userState: "ACTIVE",
  },
];

const MemberPage: React.FC = () => {
  return (
    <Table
      columns={columns}
      rowKey={"id"}
      dataSource={data}
      pagination={{ position: ["bottomCenter"] }}
    />
  );
};

export default MemberPage;
