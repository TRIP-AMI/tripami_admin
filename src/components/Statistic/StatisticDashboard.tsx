"use client";

import { Button, Col, Row, Statistic } from "antd";

const StatisticDashboard: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="회원가입 유저수" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="총 결제 금액" value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="예약 건수" value={112893} />
    </Col>
  </Row>
);

export default StatisticDashboard;
