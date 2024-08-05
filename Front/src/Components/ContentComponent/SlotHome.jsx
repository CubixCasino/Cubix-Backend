import "./SlotHome.css";
import Card from "./Card";
import { ModalSingUp } from "../sign-up/modal-sign-up";
import CaruselCardResponsive from "./CaruselCardResponsive";
import CarrouselGeneral from "./Carrousel";

const SlotHome = () => {
  return (
    <div className="custom-container p-1 md:p-[20px]">
      <div className="content-home flex flex-row md:flex-row md:pl-40">
        <div className="left-section">
          <h1 className="Welcome text-base md:text-5xl">
            Welcome to <span className="Cubix">Cubix</span>
          </h1>
          <h5 className="parrafo text-sm md:text-base">
            Sign up now and start playing your favorite casino games with
          </h5>
          <h5 className="parrafo text-sm md:text-base">cryptocurrencies!</h5>
          <div className="mt-4 text-start">
            <ModalSingUp />
          </div>
        </div>
        <div className="right-section">
          <img
            src="../../../src/assets/Coins.png"
            alt="Descripción de la imagen"
            className="w-full h-auto md:w-[522.42px] md:h-[522.42px] rounded-tl-[10.61px] rounded-tr-none rounded-br-none rounded-bl-none opacity-100"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <Card />
        <CaruselCardResponsive />
        <CarrouselGeneral
          title="Best Live Games"
          icon="../../../src/assets/bestGames.svg"
          route="/live-games"
        />
        <CarrouselGeneral
          title="Best Slots Games"
          icon="../../../src/assets/bestGames.svg"
          route="/best-slot-games"
        />
      </div>
    </div>
  );
};

export default SlotHome;
