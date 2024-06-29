export default function Grid({ handleGridClick, active }) {
  const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="grid">
      {grid.map((g) => (
        <div
          key={g} // Add a unique key for each grid field
          data-grid-num={g} // Use the grid value as the data attribute
          className="grid-field"
          onClick={(e) => {
            handleGridClick(e, active);
          }}
        ></div>
      ))}
    </div>
  );
}
