import { Card, Col, Divider, Row } from "antd";
import React from "react";
import EventDetails from "../../components/EventDetails";
import SchedulerForm from "../../components/SchedulerForm";
import { CustomColumn } from "./style";
import { useMediaQuery } from 'react-responsive'

const EventScheduler = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Card>
    <Row gutter={[16,16]}>
      <CustomColumn xl={10} lg={10} md={10} sm={24} xs={24} >
        <EventDetails />
      </CustomColumn>
      {isTabletOrMobile && <Divider/>}
      <Col xl={14} lg={14} md={14} sm={24} xs={24}>
        <SchedulerForm />
      </Col>
    </Row>
    </Card>
  );
};

export default EventScheduler;
