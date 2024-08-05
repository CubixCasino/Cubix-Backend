import CarrouselGeneral from "./Carrousel";
import dado from "../../../src/assets/dado.svg";
import slot from "../../../src/assets/slot.svg";
import "./GameScreen.css";

const GameScreen = () => {
  return (
    <div className="game-screen overflow-hidden ">
      <div className="flex flex-col bg-[#20242A] mr-20  p-2 mt-2 rounded-xl mb-10 ">
        <div className="flex items-center p-4">
          <img
            src="../../../src/assets/games.svg"
            className="icon-games w-8"
            alt="Games"
          />
          <h1 className="Jackpot ml-2">Jackpot</h1>
        </div>
        <div className="flex justify-center">
          <div className="container-game"></div>
        </div>
      </div>

      <div className="carrousel-container flex flex-col">
        <CarrouselGeneral
          title="Other Live Games"
          icon={dado}
          route="/other-live-games"
        />
        <CarrouselGeneral
          title="Other Slot Games"
          icon={slot}
          route="/other-slot-games"
        />
      </div>
    </div>
  );
};

export default GameScreen;
