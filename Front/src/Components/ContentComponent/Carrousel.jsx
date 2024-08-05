import PropTypes from "prop-types";
import { Carousel } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "./Carrousel.css";

const CarrouselGeneral = ({ title, icon, route }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomeRoute =
    location.pathname === "/" || location.pathname === "/home";
  const navigateTo = route;

  // Listado de imágenes (15 imágenes en total)
  const images = [
    "../../../src/assets/Frame22.png",
    "../../../src/assets/Frame23.png",
    "../../../src/assets/Frame24.png",
    "../../../src/assets/Frame25.png",
    "../../../src/assets/Frame26.png",
    "../../../src/assets/Frame23.png",
    "../../../src/assets/Frame22.png",
    "../../../src/assets/Frame24.png",
    "../../../src/assets/Frame25.png",
    "../../../src/assets/Frame26.png",
    "../../../src/assets/Frame22.png",
    "../../../src/assets/Frame23.png",
    "../../../src/assets/Frame24.png",
    "../../../src/assets/Frame25.png",
    "../../../src/assets/Frame26.png",
  ];

  // Dividir imágenes en bloques de 3 para móviles y 5 para pantallas grandes
  const renderCarouselItems = () => {
    const isMobile = window.innerWidth <= 768;
    const itemsPerPage = isMobile ? 3 : 5;
    const elements = [];

    for (let i = 0; i < images.length; i += itemsPerPage) {
      const chunk = images.slice(i, i + itemsPerPage).map((image, index) => (
        <div key={i + index} className="inline-block">
          <img
            key={i + index}
            src={image}
            alt={`Image ${i + index + 1}`}
            className="w-full"
          />
        </div>
      ));

      if (isHomeRoute && !isMobile && i === 0) {
        chunk.push(
          <button
            key="see-all"
            onClick={() => navigate(navigateTo)}
            className="bg-[#2c323a] h-56 absolute bottom-6 rounded-lg px-4 text-white"
          >
            See All
          </button>
        );
      }

      elements.push(
        <div key={i} className="flex justify-center items-center">
          {chunk}
        </div>
      );
    }

    return elements;
  };

  return (
    <div className="text-white">
      <div className="bets-title mb-2 flex items-center justify-start">
        <img src={icon} className="bet-icon mr-2" alt={title} />
        <h1>{title}</h1>
      </div>
      <Carousel
        arrows
        infinite={false}
        dots={false}
        className="custom-carousel w-screen md:w-[85rem] bg-[#181C20]"
        draggable
      >
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
};

CarrouselGeneral.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default CarrouselGeneral;
