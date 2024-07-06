import { useState } from 'react'
import Figures from './Figures'
import Board from './Board'
import {
  checkIfPlayable,
  returnUnplayableBoardSquares,
  selectFigure,
} from '../utils/utils'
import Info from './Info'

export default function Game() {
  const [redIsNext, setRedIsNext] = useState(true)
  const [selectedFigure, setSelectedFigure] = useState(null)
  const [boardSquares, setBoardSquares] = useState([
    { playable: true, id: 0 },
    { playable: true, id: 1 },
    { playable: true, id: 2 },
    { playable: true, id: 3 },
    { playable: true, id: 4 },
    { playable: true, id: 5 },
    { playable: true, id: 6 },
    { playable: true, id: 7 },
    { playable: true, id: 8 },
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

  function handleSelectFigureClick(figure) {
    console.log(figure)
    // darken the unplayable board tiles by setting playable to false
    const updatedGrid = returnUnplayableBoardSquares(
      boardSquares,
      figure
    )
    // add border to the chosen figure by setting select to true
    if (redIsNext) {
      const updatedFigures = selectFigure(redFigures, figure)
      setRedFigures(updatedFigures)
    } else if (!redIsNext) {
      const updatedFigures = selectFigure(blueFigures, figure)
      setBlueFigures(updatedFigures)
    }
    // update
    setBoardSquares(updatedGrid)
    setSelectedFigure(figure)
  }

  function handleGridClick(clickedSquare) {
    if (
      !boardSquares[clickedSquare.id].figureOnGrid &&
      !selectedFigure
    )
      return

    // Play a figure which is already set
    if (
      redIsNext &&
      boardSquares[clickedSquare.id].figureOnGrid?.team === 'red'
    ) {
      console.log('R')
      setSelectedFigure(boardSquares[clickedSquare.id].figureOnGrid)
    } else if (
      !redIsNext &&
      boardSquares[clickedSquare.id].figureOnGrid?.team === 'blue'
    ) {
      console.log('R')
      setSelectedFigure(boardSquares[clickedSquare.id].figureOnGrid)
    }

    if (boardSquares[clickedSquare.id].figureOnGrid) {
      if (
        !checkIfPlayable(
          boardSquares[clickedSquare.id].figureOnGrid,
          selectedFigure
        )
      ) {
        return
      }
    }

    const updatedGrid = boardSquares.map((gridField) => {
      if (gridField.id === Number(clickedSquare.id)) {
        return {
          ...gridField,
          playable: true,
          figureOnGrid: selectedFigure,
        }
      } else {
        return { ...gridField, playable: true }
      }
    })
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

    setBoardSquares(updatedGrid)
    setSelectedFigure(null)
    setRedIsNext(!redIsNext)
  }
  return (
    <main>
      <Figures
        handleFigureClick={handleSelectFigureClick}
        redIsNext={redIsNext}
        figures={redFigures}
      ></Figures>
      <Board
        boardSquares={boardSquares}
        handleGridClick={handleGridClick}
      ></Board>
      <Figures
        handleFigureClick={handleSelectFigureClick}
        redIsNext={!redIsNext}
        figures={blueFigures}
      ></Figures>
      <Info redIsNext={redIsNext}></Info>
    </main>
  )
}
