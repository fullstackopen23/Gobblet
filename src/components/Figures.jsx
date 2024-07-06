export default function Figures({
  figures,
  handleFigureClick,
  redIsNext,
}) {
  let circleActive = redIsNext === true ? 'active' : 'inactive'
  return (
    <div className="figures-container">
      {figures.map((figure) => {
        if (figure.set) return
        return (
          <div
            data-num={figure.id}
            data-team={figure.team}
            onClick={() => {
              if (!redIsNext) return
              handleFigureClick(figures[figure.id])
            }}
            key={figure.id}
            className={
              circleActive +
              ' ' +
              figure.team +
              ' circle ' +
              figure.size +
              ' ' +
              (figure.selected ? 'selected' : '')
            }
          ></div>
        )
      })}
    </div>
  )
}
