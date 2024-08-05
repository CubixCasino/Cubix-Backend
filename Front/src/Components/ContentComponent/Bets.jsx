
import './Bets.css'; 

const Bets = () => {
    // Array de imágenes de apuestas
    const betGames = [
        "../../../src/assets/Frame22.png",
        "../../../src/assets/Frame23.png",
        "../../../src/assets/Frame24.png",
        "../../../src/assets/Frame25.png",
        "../../../src/assets/Frame26.png",       
    ];

    // Estilo para cada imagen de apuesta
    const gameStyle = {
        width: '207.6px',
        height: '229.51px',
        gap: '0px',
        borderRadius: '10.61px 0px 0px 0px',
        opacity: '1',
        boxShadow: '0px 4px 20px 0px #00000066',
    };

    // Función para renderizar cada imagen de apuesta
    const renderBetGames = () => {
        return betGames.map((game, index) => (
            <img key={index} src={game} alt={`Bet ${index + 1}`} style={gameStyle} />
        ));
    };

    return (
        <div className="bets-container">
            <h1 className="bets-title">
                <img  src='../../../src/assets/football.png' className="bet-icon" alt="Football Icon" />
                
                Bets
            </h1>
            <div className="bet-games-container">
                {renderBetGames()}
            </div>
        </div>
    );
};

export default Bets;

