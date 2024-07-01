export default function Figures({ team, active, handleFigureClick }) {
  let circleClass = active === true ? 'active' : 'inactive'

  const figures = [
    {
      size: 'lg',
      set: false,
      id: 0,
      team,
    },
    {
      size: 'lg',
      team,
      id: 1,
      set: false,
    },
    {
      team,
      size: 'md',
      set: false,
      id: 2,
    },
    {
      size: 'md',
      team,
      set: false,
      id: 3,
    },
    {
      size: 'sm',
      team,
      id: 4,
      set: false,
    },
    {
      team,
      size: 'sm',
      id: 5,
      set: false,
    },
  ]

  return (
    <div className="figures-container">
      {figures.map((figure, i) => {
        return (
          <div
            data-num={i}
            data-team={team}
            onClick={(e) => {
              handleFigureClick(e, active, figures[i])
            }}
            key={i}
            className={
              circleClass + ' ' + team + ' circle ' + figure.size
            }
          ></div>
        )
      })}
    </div>
  )
}
