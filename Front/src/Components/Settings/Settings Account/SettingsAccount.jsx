import { Button, DatePicker, Input, Modal } from "antd";
import { useState } from "react";

const SettingsAccount = () => {
  const [phonePrefix, setPhonePrefix] = useState("+55");
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleDeleteAccountClick = () => {
    setIsDeleteModalVisible(true);
  };

  const handleDeleteAccountConfirm = () => {
    // Aquí puedes agregar la lógica para eliminar la cuenta
    console.log("Cuenta eliminada");
    setIsDeleteModalVisible(false);
  };

  const handleDeleteAccountCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const handlePasswordChangeClick = () => {
    if (isEditingPassword) {
      // Aquí puedes agregar la lógica para guardar la nueva contraseña
      console.log("Nueva contraseña guardada:", password);
    }
    setIsEditingPassword(!isEditingPassword);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">Account</h2>
      <p className="text-gray-500">Basic Information</p>
      <div className="flex flex-col relative">
        <Input placeholder="John Doe" className="inputs" id="user-input" />
        <label htmlFor="user-input" className="floating-label">
          User
        </label>
      </div>
      <div className="flex flex-col relative">
        <Input
          placeholder="email@gmail.com"
          className="inputs"
          id="email-input"
        />
        <label htmlFor="email-input" className="floating-label">
          E-mail
        </label>
      </div>
      <div className="flex flex-col relative">
        <DatePicker
          placeholder="06/18/1992"
          className="inputs"
          id="dob-input"
        />
        <label htmlFor="dob-input" className="floating-label">
          Date of birth
        </label>
      </div>
      <div className="flex flex-col relative">
        <div className="input-with-select">
          <select
            value={phonePrefix}
            onChange={(e) => setPhonePrefix(e.target.value)}
            className="phone-prefix-select"
          >
            <option value="+55">+55</option>
            <option value="+1">+1</option>
          </select>
          <Input
            placeholder="(718) 123-4567"
            className="inputs phone-input"
            id="phone-input"
          />
        </div>
        <label htmlFor="phone-input" className="floating-label ml-20">
          Phone number
        </label>
      </div>
      <p className="text-gray-500">Password</p>
      <div className="flex flex-col relative">
        <Input
          type={isEditingPassword ? "text" : "password"}
          placeholder="Password"
          className="inputs"
          id="password-input"
          disabled={!isEditingPassword}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password-input" className="floating-label">
          Password
        </label>
        <Button
          className="mt-2 btn-password"
          onClick={handlePasswordChangeClick}
        >
          {isEditingPassword ? "Confirm" : "Change Password"}
        </Button>
      </div>
      <div className="flex-grow"></div>
      <Button
        type="primary"
        className="mt-10 self-end mx-auto btn-delete"
        onClick={handleDeleteAccountClick}
      >
        Delete Account
      </Button>
      <Modal
        visible={isDeleteModalVisible}
        onCancel={handleDeleteAccountCancel}
        onOk={handleDeleteAccountConfirm}
        title="Are you sure you want to delete your account?"
        className="custom-modal"
        okText="Yes, delete account"
        cancelText="Cancel"
        footer={[
          <Button
            key="cancel"
            onClick={handleDeleteAccountCancel}
            style={{
              background: "transparent",
              borderColor: "#9DC7F1",
              color: "#9DC7F1",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            Cancel
          </Button>,
          <Button
            key="delete"
            type="primary"
            onClick={handleDeleteAccountConfirm}
            style={{ width: "100%" }}
          >
            Yes, delete account
          </Button>,
        ]}
      >
        <p className="text-white">
          The deletion of your account is permanent and cannot be undone. All
          your data, including balance, transaction history and settings, will
          be lost. Are you sure you want to continue?
        </p>
      </Modal>
    </div>
  );
};

export default SettingsAccount;
