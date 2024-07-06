export default function Board({ handleGridClick, boardSquares }) {
  return (
    <div className="grid">
      {boardSquares.map((square, i) => (
        <div
          key={i} // Add a unique key for each grid field
          data-grid-num={i} // Use the grid value as the data attribute
          className={
            'grid-field ' +
            (square.figureOnGrid
              ? square.figureOnGrid.size + ' '
              : ' ') +
            (square.figureOnGrid
              ? square.figureOnGrid.team + ' '
              : '') +
            (square.playable ? 'playable' : 'unplayable')
          }
          onClick={() => {
            handleGridClick(square)
          }}
        ></div>
      ))}
    </div>
  )
}
