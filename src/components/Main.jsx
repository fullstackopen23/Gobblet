import { useState } from 'react'
import Figures from './Figures'
import Grid from './Grid'

export default function Main() {
  const [redIsNext, setRedIsNext] = useState(true)
  const [gridClickable, setGridClickable] = useState(false)
  const [selectedFigure, setSelectedFigure] = useState(null)
  const [grid, setGrid] = useState([
    { figureSize: '', class: 'grid-field', figureColor: '' },
    { figureSize: '', class: 'grid-field' },
    { figureSize: '', class: 'grid-field' },
    { figureSize: '', class: 'grid-field' },
    { figureSize: '', class: 'grid-field' },
    { figureSize: '', class: 'grid-field' },
    { figureSize: '', class: 'grid-field' },
    { figureSize: '', class: 'grid-field' },
    { figureSize: '', class: 'grid-field' },
  ])

  function handleFigureClick(e, active, figure) {
    if (!active) return
    console.log(figure)
    const attributesOfSelectedFigure = {
      num: e.target.getAttribute('data-num'),
      team: e.target.getAttribute('data-team'),
    }
    setSelectedFigure(attributesOfSelectedFigure)
    setGridClickable(!gridClickable)
  }

  function handleGridClick(e, active) {
    if (!active) return

    const gridNumberClicked = e.target.getAttribute('data-grid-num')
    const updatedGrid = grid.map((gridField, i) => {
      if (i === Number(gridNumberClicked)) {
        return { ...gridField, figureColor: selectedFigure.team }
      } else {
        return gridField
      }
    })
    setGrid(updatedGrid)
    setGridClickable(!gridClickable)

    setRedIsNext(!redIsNext)
  }
  return (
    <main>
      <Figures
        handleFigureClick={handleFigureClick}
        active={redIsNext}
        team={'red'}
      ></Figures>
      <Grid
        grid={grid}
        active={gridClickable}
        handleGridClick={handleGridClick}
      ></Grid>
      <Figures
        handleFigureClick={handleFigureClick}
        active={!redIsNext}
        team={'blue'}
      ></Figures>
    </main>
  )
}
