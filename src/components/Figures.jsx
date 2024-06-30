export default function Figures({ team, active, handleFigureClick }) {
  let circleClass = active === true ? 'active' : 'inactive'

  const figures = [
    {
      size: 'lg',
      set: false,
    },
    {
      size: 'lg',
      set: false,
    },
    {
      size: 'md',
      set: false,
    },
    {
      size: 'md',
      set: false,
    },
    {
      size: 'sm',
      set: false,
    },
    {
      size: 'sm',
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
              handleFigureClick(e, active)
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
