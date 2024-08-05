import { Card, Carousel } from 'antd'
import { useNavigate } from "react-router-dom";




const CaruselCardResponsive = () => {


    const navigate1 = useNavigate();

    const navigateTo = (path) => {
      navigate1(path);
    };
  


  return (
    <div className='md:hidden flex justify-center mb-8'>
        <Carousel className='w-64'>
        <Card
      size=""
        onClick={() => navigateTo("/Casino")}
        className="custom-card overflow-hidden  h-36 w-36"
      >
        
        <div className="Casino-container">
          <h2 className="Casino">Casino</h2>
        </div>
        <div className="overflow-hidden">
          <img
            src="../../../src/assets/_Group_circulo.svg"
            alt="Group"
            className="card-image"
          />
          <img
            src="../../../src/assets/casino.svg"
            alt="Casino"
            className="h-44 w-44 mt-0 opacity-10"
          />
        </div>
      </Card>

      <Card
        onClick={() => navigateTo("/Slot")}
        className="custom-card-slot overflow-hidden relative  h-36 w-36"
      >
        <div className="Casino-container">
          <h2 className="Casino">Slot</h2>
        </div>

        <img
          src="../../../src/assets/Group2.png"
          alt="Group"
          className="card-image"
        />
        <div>
          <img
            src="../../../src/assets/slot.svg"
            alt="Slot"
            className="ml-18 h-36 w-36 absolute bottom-[-1rem] opacity-10"
          />
        </div>
      </Card>

      <Card
        onClick={() => navigateTo("/Bets")}
        className="custom-card-best overflow-hidden relative  h-36 w-36"
      >
        <div className="Casino-container">
          <h2 className="Casino">Bets</h2>
        </div>
        <img
          src="../../../src/assets/Group3.png"
          alt="Group"
          className="card-image"
        />
        <div>
          <img
            src="../../../src/assets/bets.svg"
            alt="Bets"
            className="h-48 w-48 absolute bottom-[-4rem] left-[-1rem] opacity-10 rotate-90"
          />
        </div>
      </Card>
        </Carousel>
    </div>
  )
}

export default CaruselCardResponsive