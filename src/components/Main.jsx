import { useState } from 'react'
import Figures from './Figures'
import Grid from './Grid'
import { checkIfPlayable } from '../utils/utils'

export default function Main() {
  const [redIsNext, setRedIsNext] = useState(true)
  const [gridClickable, setGridClickable] = useState(false)
  const [selectedFigure, setSelectedFigure] = useState(null)
  const [grid, setGrid] = useState([
    { playable: true },
    { playable: true },
    { playable: true },
    { playable: true },
    { playable: true },
    { playable: true },
    { playable: true },
    { playable: true },
    { playable: true },
  ])
  const [redFigures, setRedFigures] = useState([
    {
      size: 'lg',
      set: false,
      id: 0,
      team: 'red',
    },
    {
      size: 'lg',
      team: 'red',
      id: 1,
      set: false,
    },
    {
      team: 'red',
      size: 'md',
      set: false,
      id: 2,
    },
    {
      size: 'md',
      team: 'red',
      set: false,
      id: 3,
    },
    {
      size: 'sm',
      team: 'red',
      id: 4,
      set: false,
    },
    {
      team: 'red',
      size: 'sm',
      id: 5,
      set: false,
    },
  ])
  const [blueFigures, setBlueFigures] = useState([
    {
      size: 'lg',
      set: false,
      id: 0,
      team: 'blue',
    },
    {
      size: 'lg',
      team: 'blue',
      id: 1,
      set: false,
    },
    {
      team: 'blue',
      size: 'md',
      set: false,
      id: 2,
    },
    {
      size: 'md',
      team: 'blue',
      set: false,
      id: 3,
    },
    {
      size: 'sm',
      team: 'blue',
      id: 4,
      set: false,
    },
    {
      team: 'blue',
      size: 'sm',
      id: 5,
      set: false,
    },
  ])

  function handleSelectFigureClick(e, active, figure) {
    if (!active) return
    console.log(figure)
    const updatedGrid = grid.map((gridField) => {
      if (gridField.figureOnGrid) {
        if (!checkIfPlayable(gridField.figureOnGrid, figure)) {
          return { ...gridField, playable: false }
        } else {
          return { ...gridField, playable: true }
        }
      } else {
        return { ...gridField, playable: true }
      }
    })
    setGrid(updatedGrid)
    setSelectedFigure(figure)
    setGridClickable(!gridClickable)
  }

  function handleGridClick(e, active) {
    if (!active) return

    const gridNumberClicked = e.target.getAttribute('data-grid-num')
    if (grid[gridNumberClicked].figureOnGrid) {
      if (
        !checkIfPlayable(
          grid[gridNumberClicked].figureOnGrid,
          selectedFigure
        )
      ) {
        return
      }
    }

    const updatedGrid = grid.map((gridField, i) => {
      if (i === Number(gridNumberClicked)) {
        return {
          ...gridField,
          figureOnGrid: selectedFigure,
        }
      } else {
        return gridField
      }
    })
    setGrid(updatedGrid)
    setGridClickable(!gridClickable)
    console.log(selectedFigure)
    if (redIsNext) {
      const updatedFigures = redFigures.map((redFigure) => {
        if (redFigure.id === selectedFigure.id) {
          return { ...redFigure, set: true }
        } else {
          return redFigure
        }
      })
      setRedFigures(updatedFigures)
    } else {
      const updatedFigures = blueFigures.map((blueFigure) => {
        if (blueFigure.id === selectedFigure.id) {
          return { ...blueFigure, set: true }
        } else {
          return blueFigure
        }
      })
      setBlueFigures(updatedFigures)
    }
    setRedIsNext(!redIsNext)
  }
  return (
    <main>
      <Figures
        handleFigureClick={handleSelectFigureClick}
        active={redIsNext}
        figures={redFigures}
      ></Figures>
      <Grid
        grid={grid}
        selectedFigure={selectedFigure}
        active={gridClickable}
        handleGridClick={handleGridClick}
      ></Grid>
      <Figures
        handleFigureClick={handleSelectFigureClick}
        active={!redIsNext}
        figures={blueFigures}
      ></Figures>
    </main>
  )
}
