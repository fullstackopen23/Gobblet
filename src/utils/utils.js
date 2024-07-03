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
