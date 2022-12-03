import React, { useState } from "react";
import { Button, Form, Input, Modal, notification } from "antd";
import { FormContainer } from "./style";
const { TextArea } = Input;

const SchedulerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = () => {
    if (name === "") {
      notification.error({
        message: "Please Enter Name",
      });
    } else if (email === "") {
      notification.error({
        message: "Please Enter Email",
      });
    } else {
      showModal();
    }
  };
  return (
    <FormContainer>
      <h2>Enter Details</h2>
      <Form>
        <h4>Name *</h4>
        <Form.Item
          name="name"
          rules={[
            {
              type: "text",
            },
          ]}
        >
          <Input
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <h4>Email *</h4>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{
              color: "#3F96FE",
              borderColor: "#3F96FE",
              borderRadius: "24px",
            }}
          >
            Add Guest
          </Button>
        </Form.Item>
        <h4>Please share anything that will help prepare our meeting.</h4>
        <Form.Item>
          <TextArea
            rows={4}
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round" size="large" onClick={onFinish}>
            Schedule Event
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="Your Meeting Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Additional Info : {info}</p>
      </Modal>
    </FormContainer>
  );
};

export default SchedulerForm;
