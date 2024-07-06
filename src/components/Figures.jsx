export default function Figures({
  unsetFigures,
  handleFigureClick,
  redIsNext,
}) {
  let circleActive = redIsNext === true ? "active" : "inactive";
  console.log(unsetFigures);
  return (
    <div className="figures-container">
      {unsetFigures.map((figure) => {
        return (
          <Circle
            handleFigureClick={handleFigureClick}
            key={figure.id}
            circleActive={circleActive}
            figure={figure}
          ></Circle>
        );
      })}
    </div>
  );
}

export function Circle({ figure, circleActive, handleFigureClick }) {
  return (
    <div
      data-num={figure.id}
      data-team={figure.team}
      onClick={() => {
        console.log(figure);
        if (!circleActive) return;
        handleFigureClick(figure);
      }}
      className={
        circleActive +
        " " +
        figure.team +
        " circle " +
        figure.size +
        " " +
        (figure.selected ? "selected" : "")
      }
    ></div>
  );
}
