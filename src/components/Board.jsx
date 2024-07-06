import { Circle } from "./Figures";

export default function Board({
  handleGridClick,
  boardSquares,
  setRedFigures,
}) {
  console.log(setRedFigures);
  return (
    <div className="grid">
      {boardSquares.map((square) => (
        <Square
          handleGridClick={handleGridClick}
          key={square.id}
          square={square}
        >
          {console.log(square.figureOnGrid, setRedFigures)}
          {square.figureOnGrid &&
          setRedFigures.includes(square.figureOnGrid.id) ? (
            <Circle figure={square.figureOnGrid}></Circle>
          ) : (
            ""
          )}
        </Square>
      ))}
    </div>
  );
}

function Square({ square, handleGridClick, children }) {
  return (
    <div
      className={
        "grid-field " +
        (square.figureOnGrid ? square.figureOnGrid.size + " " : " ") +
        (square.figureOnGrid ? square.figureOnGrid.team + " " : "") +
        (square.playable ? "playable" : "unplayable")
      }
      onClick={() => {
        handleGridClick(square);
      }}
    >
      {children}
    </div>
  );
}
