import { Form, Input, Button } from "antd";
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState } from 'react';
import ModalEmai from '../sign-in/ModalEmai';

const EmailForm = ({ onSubmit, onclose }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");

  const URL = 'https://cubix.onrender.com/users/verify-email';

  const handleFinish = async (values) => {
    setEmail(values.email); // Guardar el email para pasarlo al modal
    try {
      const response = await axios.post(URL, { email: values.email });

      if (response.status === 200) {
        console.log('Email enviado con éxito:', values.email);
        if (onSubmit) {
          onSubmit(values);
        }
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsModalVisible(true); // Mostrar el modal independientemente del resultado
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button className="flex flex-row gap-2 items-center">
        <img src="/Icon.svg" />
        <p className="text-2xl text-white">Recovery Password</p>
      </button>

      <p className="text-base mb-5 text-white">Enter your email address to receive reset instructions.</p>
      <Form onFinish={handleFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input className="border-0" placeholder="E-mail" size={"large"} />
        </Form.Item>
        <div className="flex flex-col gap-2">
          <Button type="primary" block size={"large"} htmlType="submit">
            Send
          </Button>
          <Button type="default" block size="large" onClick={onclose}>Cancelar</Button>
          <p className="text-white text-center my-3">
            {" "}
            still need help? <a>Contact us by email</a>
          </p>
        </div>
      </Form>

      {isModalVisible && <ModalEmai email={email} onClose={handleCloseModal} />}
    </>
  );
};

EmailForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onclose: PropTypes.func.isRequired
};

export default EmailForm;
