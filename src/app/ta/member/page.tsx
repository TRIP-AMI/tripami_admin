"use client";

import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

const MemberStatus = {
  ACTIVE: "활동 중",
  INACTIVE: "탈퇴",
  BANNED: "정지",
};

type UserStatus = "ACTIVE" | "INACTIVE" | "BANNED";
interface DataType {
  key: string;
  username: string;
  userEmail: string;
  age: number;
  userState: UserStatus;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "회원 이름",
    dataIndex: "username",
    key: "username",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "회원 이메일",
    dataIndex: "userEmail",
    key: "userEmail",
  },
  {
    title: "회원 나이",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "회원 주소",
    dataIndex: "address",
    key: "address",
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
  {
    title: "회원 등급",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => {
      console.log(tags);

      return (
        <>
          {tags.map((tag) => {
            let color = "";
            switch (tag) {
              case "bronze":
                color = "#CD7F32";
                break;
              case "silver":
                color = "silver";
                break;
              case "gold":
                color = "gold";
                break;

              default:
                break;
            }
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
    render: (_, _record) => (
      <Space size="middle">
        <a>회원 정지</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    username: "John Brown",
    userEmail: "test@email.com",
    age: 32,
    address: "New York No. 1 Lake Park",
    userState: "BANNED",
    tags: ["bronze"],
  },
  {
    key: "2",
    username: "Jim Green",
    userEmail: "test@email.com",
    age: 42,
    address: "London No. 1 Lake Park",
    userState: "INACTIVE",
    tags: ["silver"],
  },
  {
    key: "3",
    username: "Joe Black",
    userEmail: "test@email.com",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    userState: "ACTIVE",
    tags: ["gold"],
  },
];

const MemberPage: React.FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ position: ["bottomCenter"] }}
    />
  );
};

export default MemberPage;
