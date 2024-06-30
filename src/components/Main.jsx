import { useState } from 'react'
import Figures from './Figures'
import Grid from './Grid'

export default function Main() {
  const [redsTurn, setRedsTurn] = useState(true)
  const [blueTurn, setBlueTurn] = useState(false)
  const [gridActive, setGridActive] = useState(false)
  const [figure, setFigure] = useState(null)
  const [grid, setGrid] = useState([
    { content: '' },
    { content: '' },
    { content: '' },
    { content: '' },
    { content: '' },
    { content: '' },
    { content: '' },
    { content: '' },
    { content: '' },
  ])

  function handleFigureClick(e, active) {
    if (!active) return
    const attributesOfCircle = {
      num: e.target.getAttribute('data-num'),
      team: e.target.getAttribute('data-team'),
    }
    console.log('hu')
    setRedsTurn(!redsTurn)
    setFigure(attributesOfCircle)
    setGridActive(!gridActive)
  }
  function handleGridClick(e, active) {
    if (!active) return
    const gridNumberClicked = e.target.getAttribute('data-grid-num')
    console.log(figure)
    const updatedGrid = grid.map((gridField, i) => {
      if (i === Number(gridNumberClicked)) {
        return { ...gridField, content: 'X' }
      } else {
        return gridField
      }
    })
    setGrid(updatedGrid)
    setBlueTurn(!blueTurn)
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
        active={blueTurn}
        team={'blue'}
      ></Figures>
    </main>
  )
}
