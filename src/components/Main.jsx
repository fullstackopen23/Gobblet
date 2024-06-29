import { useState } from "react";
import Figures from "./Figures";
import Grid from "./Grid";

export default function Main() {
  const [redsTurn, setRedsTurn] = useState(true);
  const [blueTurn, setBlueTurn] = useState(false);
  const [gridActive, setGridActive] = useState(false);
  function handleFigureClick(e, active) {
    if (!active) return;
    const attributesOfCircle = {
      num: e.target.getAttribute("data-num"),
      team: e.target.getAttribute("data-team"),
    };
    setRedsTurn(!redsTurn);
    setGridActive(!gridActive);
  }
  function handleGridClick(e, active) {
    if (!active) return;
    console.log(e.target.getAttribute("data-grid-num"));
  }
  return (
    <main>
      <Figures
        handleFigureClick={handleFigureClick}
        active={redsTurn}
        team={"red"}
      ></Figures>
      <Grid active={gridActive} handleGridClick={handleGridClick}></Grid>
      <Figures
        handleFigureClick={handleFigureClick}
        active={blueTurn}
        team={"blue"}
      ></Figures>
    </main>
  );
}
