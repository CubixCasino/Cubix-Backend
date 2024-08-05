import { ConfigProvider } from "antd";
import EmailForm from "./EmailForm";
import { useState } from "react";
import ModalEmai from '../sign-in/ModalEmai';

export const FormRecovery = ({ onclose }) => {
  const [email, setEmail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState("");

  const handleEmailFormSubmit = (values) => {
    console.log('Form submitted with email:', values.email);
    setEmail(values.email); // Almacena el correo electrónico en el estado
    setIsModalVisible(true); // Muestra el ModalEmai
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgContainer: "#20242A",
            colorText: "#9DC7F1",
            colorBorder: "#9DC7F1",
          },
          Input: {
            colorPrimary: "#030303",
            colorBgContainer: "#2C323A",
            colorTextPlaceholder: "#808080",
            colorText: "#FFFF",
            colorBorder: "",
            algorithm: true,
            colorBgBase: "#2C323A",
          },
        },
      }}
    >
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <EmailForm onSubmit={handleEmailFormSubmit} onclose={onclose} />
      
      {isModalVisible && (
        <ModalEmai email={email} onClose={handleCloseModal} />
      )}
    </ConfigProvider>
  );
};
