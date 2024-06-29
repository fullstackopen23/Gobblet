export default function Grid() {
  function handleGridClick(e) {
    console.log(e.target.getAttribute('data-grid-num'))
  }

  return (
    <div className="grid">
      <div
        data-grid-num={0}
        className="grid-field"
        onClick={handleGridClick}
      ></div>{' '}
      <div
        data-grid-num={1}
        className="grid-field"
        onClick={handleGridClick}
      ></div>{' '}
      <div
        data-grid-num={2}
        className="grid-field"
        onClick={handleGridClick}
      ></div>{' '}
      <div
        data-grid-num={3}
        className="grid-field"
        onClick={handleGridClick}
      ></div>{' '}
      <div
        data-grid-num={4}
        className="grid-field"
        onClick={handleGridClick}
      ></div>{' '}
      <div
        data-grid-num={5}
        className="grid-field"
        onClick={handleGridClick}
      ></div>{' '}
      <div
        data-grid-num={6}
        className="grid-field"
        onClick={handleGridClick}
      ></div>{' '}
      <div
        data-grid-num={7}
        className="grid-field"
        onClick={handleGridClick}
      ></div>{' '}
      <div
        data-grid-num={8}
        className="grid-field"
        onClick={handleGridClick}
      ></div>
    </div>
  )
}
