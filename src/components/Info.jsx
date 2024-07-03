export default function Info({ redIsNext, gridClickable }) {
  return (
    <div>
      {redIsNext ? <p>It's reds turn. </p> : <p>It's blues turn. </p>}
      {!gridClickable ? (
        <p>Choose a figure. </p>
      ) : (
        <p>Place your figure on the grid on a playable field! </p>
      )}
    </div>
  )
}
