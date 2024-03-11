import React, { useState } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from "victory";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Parallax } from "react-parallax";

function MergeSort() {
  const [Val, setVal] = useState("");
  const [arr, setArr] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [xAxis, setxAxis] = useState([]);
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [gradientColor, setGradientColor] = useState("#3f3f3f");

  const handleInputChange = (e) => {
    setVal(e.target.value);
  };

  const initializeArray = () => {
    const numbersArray = Val.split(",")
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));
    setArr(numbersArray);
    setxAxis(numbersArray.map((value, index) => index + 1));
    setSorted(false);
    setSortingInProgress(false);
  };

  const mergeSort = async (array) => {
    if (array.length <= 1) return array;
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    const sortedLeftArray = await mergeSort(leftArray);
    const sortedRightArray = await mergeSort(rightArray);

    return merge(sortedLeftArray, sortedRightArray);
  };

  const merge = async (leftArray, rightArray) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        result.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArray[rightIndex]);
        rightIndex++;
      }

      await new Promise((resolve) => setTimeout(resolve, 400));

      setArr([
        ...result,
        ...leftArray.slice(leftIndex),
        ...rightArray.slice(rightIndex),
      ]);
    }

    return result
      .concat(leftArray.slice(leftIndex))
      .concat(rightArray.slice(rightIndex));
  };

  const handleSortButtonClick = async () => {
    setSortingInProgress(true);
    const sortedArray = await mergeSort(arr);
    setArr(sortedArray);
    setSorted(true);
    setSortingInProgress(false);
  };

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${gradientColor}, #000000)`,
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "91.3vh",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
          padding: "20px",
          margin: "10px",
          background: "#ffffff",
          borderRadius: "10px",

          maxWidth: "600px",
        }}
      >
        <h2>Merge Sort Visualization</h2>
        <div style={{ marginTop: "20px" }}>
          <label style={{ fontWeight: "bold" }}>
            Enter Array Elements (separated by commas):
          </label>
          <br />
          <br />
          <TextField
            label="Array Elements"
            variant="outlined"
            value={Val}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", width: "300px" }}
          />
        </div>
        <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
          <VictoryChart domainPadding={20} width={600} height={300}>
            <VictoryAxis tickValues={xAxis} tickFormat={xAxis} />
            <VictoryAxis dependentAxis />
            <VictoryBar
              data={arr.map((value, index) => ({ x: index + 1, y: value }))}
              style={{ data: { fill: sorted ? "green" : "blue" } }}
              labels={({ datum }) => datum.y}
              labelComponent={<VictoryTooltip />}
            />
          </VictoryChart>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={initializeArray}
            style={{ marginRight: "10px" }}
          >
            Initialize Array
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleSortButtonClick}
            disabled={!arr.length || sortingInProgress || sorted}
          >
            Start Sorting
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MergeSort;
