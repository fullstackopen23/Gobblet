import { useState } from 'react'
import Figures from './Figures'
import Grid from './Grid'

export default function Main() {
  const [redsTurn, setRedsTurn] = useState(true)
  const [gridActive, setGridActive] = useState(false)
  const [figure, setFigure] = useState(null)
  const [grid, setGrid] = useState([
    { content: '', class: 'grid-field' },
    { content: '', class: 'grid-field' },
    { content: '', class: 'grid-field' },
    { content: '', class: 'grid-field' },
    { content: '', class: 'grid-field' },
    { content: '', class: 'grid-field' },
    { content: '', class: 'grid-field' },
    { content: '', class: 'grid-field' },
    { content: '', class: 'grid-field' },
  ])

  function handleFigureClick(e, active) {
    if (!active) return
    const attributesOfCircle = {
      num: e.target.getAttribute('data-num'),
      team: e.target.getAttribute('data-team'),
    }
    setFigure(attributesOfCircle)
    setGridActive(!gridActive)
  }
  function handleGridClick(e, active) {
    if (!active) return
    const figureContent = figure.team === 'red' ? 'X' : 'O'
    const gridNumberClicked = e.target.getAttribute('data-grid-num')
    const updatedGrid = grid.map((gridField, i) => {
      if (i === Number(gridNumberClicked)) {
        return { ...gridField, content: figureContent }
      } else {
        return gridField
      }
    })
    setGrid(updatedGrid)
    setGridActive(!gridActive)

    setRedsTurn(!redsTurn)
  }
  return (
    <main>
      <Figures
        handleFigureClick={handleFigureClick}
        active={redsTurn}
        team={'red'}
      ></Figures>
      <Grid
        grid={grid}
        active={gridActive}
        handleGridClick={handleGridClick}
      ></Grid>
      <Figures
        handleFigureClick={handleFigureClick}
        active={!redsTurn}
        team={'blue'}
      ></Figures>
    </main>
  )
}
