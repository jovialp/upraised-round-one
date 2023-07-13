import { useState } from "react";

import "./styles.css";

export default function App() {
  const [knightArr, setKnightArr] = useState(
    new Array(8).fill(new Array(8).fill(""))
  );
  const [lastI, setLastI] = useState();
  const [lastJ, setLastJ] = useState();

  const handleOnclick = (i, j) => {
    const newArr = [...knightArr];
    if (lastI || lastJ) {
      newArr[lastI][lastJ] = "";
    }
    console.log(i, j);
    setLastI(i);
    setLastJ(j);
    const newjArr = new Array(8).fill("");
    newjArr[j] = "N";
    newArr[i] = newjArr;

    setKnightArr(newArr);
    console.log(newArr);
  };

  return (
    <div className="App">
      <div className="grid">
        {knightArr.map((e, i) =>
          e.map((el, j) => {
            return (
              <div
                className="grid-item"
                onClick={() => {
                  handleOnclick(i, j);
                }}
              >
                {el}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
