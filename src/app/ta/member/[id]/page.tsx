"use client";

import { MemberStatus } from "@/types/member";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Flex, Form, Radio, Space } from "antd";
import React, { useEffect } from "react";
import "./page.scss";

const HedaerTextStyles = {
  marginBottom: 10,
  fontSize: 24,
  fontWeight: "bold",
  letterSpacing: -0.48,
};

const data = {
  id: 1,
  name: "홍길동",
  email: "test@test.com",
  state: "ACTIVE",
  profile: [
    {
      id: "AMI",
      url: "",
      create: {
        posts: 10,
        cancel: 10,
        review: 10,
        inquiry: 10,
      },
    },
    {
      id: "TORUIST",
      url: "https://picsum.photos/200/200",
      create: {
        posts: 10,
        cancel: 10,
        review: 10,
        inquiry: 10,
      },
    },
  ],
  activityInfo: {
    registrationDate: new Date(),
    withdrawalDate: new Date(),
    dormantDate: new Date(),
    blackDate: new Date(),
    lastActivityTime: new Date(),
    lastLoginIP: "192.168.0.1",
    appPushNotificationAgreement: true,
    appPushNotificationAgreementTime: new Date(),
    marketingInformationAgreement: false,
    marketingInformationAgreementTime: new Date(),
    profile: {
      experience: 12,
      review: 10,
      rating: 4.5,
    },
  },
};

type MemberInfoType = typeof data;

const MemberDetailPage = ({ params }: { params: { id: number } }) => {
  console.log(params.id);

  const [form] = Form.useForm<MemberInfoType>();

  useEffect(() => {
    form.setFieldsValue(data);
    console.log(form.getFieldsValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Space size={30}>
      {/* 회원 정보 */}
      <Card>
        <Space size={70}>
          {data.profile.map((profile) => {
            return (
              <Flex key={profile.id} vertical justify="center" align="center">
                <Avatar
                  size={200}
                  src={profile.url || undefined}
                  icon={<UserOutlined />}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.1) -2px 7px 8px 2px" }}
                />
                <p
                  style={{
                    margin: "30px 0",
                    color: "#8E8E8E",
                    fontSize: 16,
                    letterSpacing: -0.32,
                  }}
                >
                  {profile.id}
                </p>
              </Flex>
            );
          })}
        </Space>
        <h3 style={HedaerTextStyles}>회원 정보</h3>
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          className="formWrap"
        >
          <Form.Item name="state" label="상태">
            <Radio.Group
              value={form.getFieldValue("state")}
              onChange={(state) => {
                form.setFieldValue("state", state.target.value);
              }}
            >
              {Object.entries(MemberStatus).map(([key, value]) => {
                return (
                  <Radio key={key} value={key}>
                    {value}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Form.Item>
          <Form.Item name="name" label="이름" className="bottomLine">
            <p>{form.getFieldValue("name")}</p>
          </Form.Item>
          <Form.Item name="email" label="이메일" className="bottomLine">
            <p>{form.getFieldValue("email")}</p>
          </Form.Item>
        </Form>
      </Card>
      {/* 활동 정보 */}
      <Card>
        <h3 style={HedaerTextStyles}>활동 정보</h3>
        <ItemWrap
          label="가입일"
          content={
            <p>{data.activityInfo.registrationDate.toLocaleDateString()}</p>
          }
        />
      </Card>
    </Space>
  );
};

function ItemWrap({
  label,
  content,
}: {
  label: string;
  content: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 25 }}>
      <p className="labelTextStyle">{label}</p>
      <div>{content}</div>
    </div>
  );
}

export default MemberDetailPage;
