import React from "react";
import {
  ClockCircleFilled,
  CalendarOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const EventDetails = () => {
  return (
    <div>
      <p style={{ fontWeight: "300" }}>Gourav Garg</p>
      <h2> 15 Minute Meeting</h2>
      <p>
        {" "}
        <ClockCircleFilled /> 15 min
      </p>
      <p>
        {" "}
        <CalendarOutlined /> 9:30am-9:45am,Friday,September 16 2022
      </p>
      <p>
        <GlobalOutlined /> Indian standard Time
      </p>
    </div>
  );
};

export default EventDetails;
