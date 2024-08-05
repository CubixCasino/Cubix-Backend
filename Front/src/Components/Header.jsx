import logo from "../assets/logo.png";

import logoResponsive from "../assets/logoResponsive.png";

import { ModalSingUp } from "./sign-up/modal-sign-up";
import { ModalSingIn } from "./sign-in/modal-sign-in";
import { ConfigProvider, Input } from "antd";

export default function Header() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorPrimary: "#030303",
            colorBgContainer: "#20242A",
            colorTextPlaceholder: "#808080",
            colorText: "#FFFF",
            colorBorder: "#2C323A",
            algorithm: true,
            colorBgBase: "#2C323A",
            colorIcon: "#FFFF",
          },
        },
      }}
    >
      <div className="bg-[#2C323A] py-[16px] relative h-[74px]  px-[32px] flex justify-between items-center">
        <div className="flex">
          <div className="logo mr-5 flex sm:block items-center">
            <img className="w-[150px] hidden sm:block" src={logo} alt="Logo" />
            <img
              className="w-[30px] block sm:hidden ml-7"
              src={logoResponsive}
              alt="Logo Responsive"
            />
          </div>
        </div>

        <div className="flex gap-3 md:gap-10">
          <ModalSingUp />
          <ModalSingIn />
        </div>
      </div>
    </ConfigProvider>
  );
}
