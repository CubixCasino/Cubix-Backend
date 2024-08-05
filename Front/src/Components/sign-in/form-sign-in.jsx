// import  { useState } from "react";
import { Button, Form, Input, ConfigProvider, Divider } from "antd";
import { ModalRecovery } from '../recuperar-contraseña/modal-recovery'

export const FormSignIn = ({onClose}) => {
  console.log(onClose)
  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = () => {
  //   setSubmitted(true);
  // };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgContainer: "#20242A",
            colorText: "#9DC7F1",
            colorBorder: "#9DC7F1",
            colorBgContainerDisabled: "#434343",
            colorTextDisabled: "#808080",
            borderColorDisabled: "#434343",
          },
          Input: {
            colorPrimary: "#030303",
            colorBgContainer: "#2C323A",
            colorTextPlaceholder: "#808080",
            colorText: "#FFFF",
            colorBorder: "#2C323A",
            algorithm: true,
            colorBgBase: "#2C323A",
          },
          Divider: {
            colorText: "#556171",
            algorithm: true,
            colorBgContainer: "#556171",
          },
        },
      }}
    >
     <p className="text-2xl mb-4">Sign In</p>

      <Form className="">
        <Form.Item>
          <Input placeholder="Email" size="large"></Input>
          
        </Form.Item>
        <Form.Item>
          <Input.Password className="mb-2" placeholder="Password" size="large"></Input.Password>
          {<a className="bg-none block text-white text-end text-sm mt-1">Forgot Password?</a> && <ModalRecovery/> }
        </Form.Item>
        
        <div className="flex flex-col ">
          <Button block className="mb-2" type="primary" disabled size="large">
            Enter
          </Button>
          <Button block className="mb-2" type="default" size="large" onClick={onClose}>
            Cancel
          </Button>
          
        </div>
        <p className="text-white text-center my-3">Don’t have an account yet? <a href="#">Sign up</a></p>
      </Form>
    </ConfigProvider>
  );
};
