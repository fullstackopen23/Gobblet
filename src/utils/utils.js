export function checkIfPlayable(figureOnGrid, selectedFigure) {
  if (figureOnGrid.size === 'lg') {
    return false
  } else if (
    figureOnGrid.size === 'md' &&
    selectedFigure.size === 'md'
  ) {
    return false
  } else if (
    figureOnGrid.size === 'md' &&
    selectedFigure.size === 'sm'
  ) {
    return false
  } else if (
    figureOnGrid.size === 'sm' &&
    selectedFigure.size === 'sm'
  ) {
    return false
  } else {
    return true
  }
}

export function returnUnplayableBoardSquares(boardSquares, figure) {
  return boardSquares.map((square) => {
    if (square.figureOnGrid) {
      if (!checkIfPlayable(square.figureOnGrid, figure)) {
        return { ...square, playable: false }
      } else {
        return { ...square, playable: true }
      }
    } else {
      return { ...square, playable: true }
    }
  })
}

export function selectFigure(figures, figure) {
  return figures.map((fig) => {
    if (fig.id === figure.id) {
      return { ...fig, selected: true }
    } else {
      return { ...fig, selected: false }
    }
  })
}
