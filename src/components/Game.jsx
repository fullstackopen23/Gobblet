import { useState } from "react";

export default function Game() {
  const [selectedFigure, setSelectedFigure] = useState();

  const [figurePositions, setFigurePositions] = useState([
    { team: "red", size: "large", position: 0, id: 0 },
    { team: "red", size: "large", position: null, id: 1 },
    { team: "red", size: "small", position: null, id: 2 },
    { team: "red", size: "small", position: null, id: 3 },
    { team: "blue", size: "large", position: null, id: 4 },
    { team: "blue", size: "large", position: null, id: 5 },
    { team: "blue", size: "small", position: null, id: 6 },
    { team: "blue", size: "small", position: null, id: 7 },
  ]);

  const [squares, setSquares] = useState([
    { position: 0, plot: null },
    { position: 1, plot: null },
    { position: 2, plot: null },
    { position: 3, plot: null },
    { position: 4, plot: null },
    { position: 5, plot: null },
    { position: 6, plot: null },
    { position: 7, plot: null },
    { position: 8, plot: null },
  ]);

  return (
    <div>
      <Figures
        setSelectedFigure={setSelectedFigure}
        teamColor={"red"}
        figurePositions={figurePositions}
      ></Figures>
      <Board
        selectedFigure={selectedFigure}
        setFigurePositions={setFigurePositions}
        squares={squares}
        figurePositions={figurePositions}
      ></Board>
      <Figures
        setSelectedFigure={setSelectedFigure}
        teamColor={"blue"}
        figurePositions={figurePositions}
      ></Figures>
    </div>
  );
}

function Figure({ size, team, handleSelectClick }) {
  const classes = `figure ${size} ${team}`;
  return (
    <div onClick={handleSelectClick} className={classes}>
      O
    </div>
  );
}

function Square({ children, handlePlaceClick, square }) {
  if (!children) {
    return (
      <div
        onClick={() => {
          handlePlaceClick(square);
        }}
        className="square"
      ></div>
    );
  }
  return <div className="square">{children}</div>;
}

function Figures({ setSelectedFigure, figurePositions, teamColor }) {
  function handleSelectClick(figure) {
    console.log(figure);
    setSelectedFigure(figure);
  }

  const filteredFigures = figurePositions.map((figure, i) => {
    if (typeof figure.position !== "number" && figure.team === teamColor) {
      return (
        <Figure
          handleSelectClick={() => {
            handleSelectClick(figure);
          }}
          key={i}
          team={figure.team}
          size={figure.size}
        ></Figure>
      );
    } else {
      return null;
    }
  });
  return <div className="figures">{filteredFigures}</div>;
}

function Board({
  selectedFigure,
  setFigurePositions,
  figurePositions,
  squares,
}) {
  function handlePlaceClick(square) {
    if (!selectedFigure) return;
    const updatedFigurePositions = figurePositions.map((figure) => {
      if (figure.id === selectedFigure.id) {
        return { ...figure, position: square.position };
      } else {
        return figure;
      }
    });
    setFigurePositions(updatedFigurePositions);
  }

  const renderSquares = squares.map((square) => {
    const filterFigures = figurePositions.filter(
      (fig) => fig.position === square.position
    );
    if (filterFigures.length === 0) {
      return (
        <Square
          handlePlaceClick={handlePlaceClick}
          square={square}
          key={square.position}
        ></Square>
      );
    } else {
      return (
        <Square
          square={square}
          handlePlaceClick={handlePlaceClick}
          key={square.position}
          setFigurePositions={setFigurePositions}
        >
          <Figure
            team={filterFigures[0].team}
            size={filterFigures[0].size}
          ></Figure>
        </Square>
      );
    }
  });

  return <div className="board">{renderSquares}</div>;
}
