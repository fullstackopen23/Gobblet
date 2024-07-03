export default function Grid({ handleGridClick, active, grid }) {
  return (
    <div className="grid">
      {grid.map((g, i) => (
        <div
          key={i} // Add a unique key for each grid field
          data-grid-num={i} // Use the grid value as the data attribute
          className={
            g.class +
            ' ' +
            (g.figureOnGrid ? g.figureOnGrid.size : '') +
            ' ' +
            (g.figureOnGrid ? g.figureOnGrid.team : '')
          }
          onClick={(e) => {
            handleGridClick(e, active)
          }}
        >
          {g.content ? g.content : ''}
          {g.figureColor ? g.figureColor : ''}
        </div>
      ))}
    </div>
  )
}
