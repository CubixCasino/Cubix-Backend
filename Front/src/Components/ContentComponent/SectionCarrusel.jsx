import PropTypes from "prop-types";
import { useState } from "react";
import "./SectionCarrusel.css";

const Section = ({ title, icon }) => {
  const betGames = [
    "../../../src/assets/Frame22.png",
    "../../../src/assets/Frame23.png",
    "../../../src/assets/Frame25.png",
    "../../../src/assets/Frame25.png",
    "../../../src/assets/Frame26.png",
    "../../../src/assets/Frame22.png",
    "../../../src/assets/Frame23.png",
    "../../../src/assets/Frame24.png",
    "../../../src/assets/Frame25.png",
    "../../../src/assets/Frame26.png",
    "../../../src/assets/Frame22.png",
    "../../../src/assets/Frame23.png",
    "../../../src/assets/Frame24.png",
    "../../../src/assets/Frame25.png",
    "../../../src/assets/Frame26.png",
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPageMobile = 9; // 3 columnas x 3 filas en móviles
  const itemsPerPageDesktop = 15; // 5 columnas x 3 filas en pantallas grandes

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(betGames.length / itemsPerPageMobile) - 1
      )
    );
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderGrid = () => {
    const isMobile = window.innerWidth <= 768;
    const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
    const startIndex = currentPage * itemsPerPage;
    const currentGames = betGames.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div
        className={`grid ${
          isMobile ? "grid-cols-3" : "grid-cols-5"
        } gap-4 md:gap-6 lg:gap-12`}
      >
        {currentGames.map((game, index) => (
          <img
            key={index}
            src={game}
            alt={`Bet ${index + 1}`}
            className="w-full h-auto sm:h-32 md:h-48 lg:h-auto"
          />
        ))}
      </div>
    );
  };

  const renderPagination = () => {
    if (window.innerWidth > 768) return null; // Oculta la paginación en pantallas grandes

    const totalPages = Math.ceil(betGames.length / itemsPerPageMobile);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

    return (
      <div className="pagination flex justify-center items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="page-btn mx-2"
        >
          <img src="../../../src/assets/arrowLeft2.svg" alt="Prev" />
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`page-btn mx-2 ${page === currentPage ? "active" : ""}`}
          >
            <span
              className={`page-number ${page === currentPage ? "current" : ""}`}
            >
              {page + 1}
            </span>
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="page-btn mx-2"
        >
          <img src="../../../src/assets/arrow-right.svg" alt="Next" />
        </button>
      </div>
    );
  };

  return (
    <div className="bets-container">
      <h1 className="bets-title mb-2 flex items-center">
        <img src={icon} className="bet-icon mr-2" alt={title} />
        {title}
      </h1>
      {renderGrid()}
      {renderPagination()}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Section;
