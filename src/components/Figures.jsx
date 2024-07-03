export default function Figures({
  figures,
  active,
  handleFigureClick,
}) {
  let circleClass = active === true ? 'active' : 'inactive'
  console.log(figures)
  return (
    <div className="figures-container">
      {figures.map((figure, i) => {
        if (figure.set) return
        return (
          <div
            data-num={i}
            data-team={figure.team}
            onClick={(e) => {
              handleFigureClick(e, active, figures[i])
            }}
            key={i}
            className={
              circleClass +
              ' ' +
              figure.team +
              ' circle ' +
              figure.size
            }
          ></div>
        )
      })}
    </div>
  )
}
