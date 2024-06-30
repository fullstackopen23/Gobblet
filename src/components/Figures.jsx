export default function Figures({ team, active, handleFigureClick }) {
  let circleClass = active === true ? 'active' : 'inactive'

  const figures = ['lg', 'lg', 'md', 'md', 'sm', 'sm']

  return (
    <div className="figures-container">
      {figures.map((figure, i) => {
        return (
          <div
            data-num={i}
            data-team={team}
            onClick={(e) => {
              handleFigureClick(e, active)
            }}
            key={i}
            className={circleClass + ' ' + team + ' circle ' + figure}
          ></div>
        )
      })}
    </div>
  )
}
