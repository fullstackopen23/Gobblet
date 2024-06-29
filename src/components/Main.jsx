import { useState } from 'react'
import Figures from './Figures'
import Grid from './Grid'

export default function Main() {
  const [turn, setTurn] = useState('blue')
  function handleFigureClick(e) {
    if (!active) return
    console.log(e.target.getAttribute('data-num'))
    console.log(e.target.getAttribute('data-team'))
  }
  return (
    <main>
      <Figures
        handleFigureClick={handleFigureClick}
        active={turn === 'red' ? true : false}
        team={'red'}
      ></Figures>
      <Grid></Grid>
      <Figures
        handleFigureClick={handleFigureClick}
        active={turn === 'blue' ? true : false}
        team={'blue'}
      ></Figures>
    </main>
  )
}
