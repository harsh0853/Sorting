import React, { useState } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from "victory";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function QuickSort() {
  const [Val, setVal] = useState("");
  const [arr, setArr] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [xAxis, setxAxis] = useState([]);
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [gradientColor, setGradientColor] = useState("#3f3f3f");
  const [borderColor, setBorderColor] = useState("#ff6b6b");

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

  const quickSort = async (array, start = 0, end = array.length - 1) => {
    if (start >= end) return;
    const pivotIndex = await partition(array, start, end);
    await quickSort(array, start, pivotIndex - 1);
    await quickSort(array, pivotIndex + 1, end);
  };

  const partition = async (array, start, end) => {
    const pivotValue = array[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (array[i] < pivotValue) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex++;

        await new Promise((resolve) => setTimeout(resolve, 400));

        setArr([...array]);
      }
    }
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

    await new Promise((resolve) => setTimeout(resolve, 400));

    setArr([...array]);
    return pivotIndex;
  };

  const handleSortButtonClick = async () => {
    setSortingInProgress(true);
    await quickSort(arr);
    setSorted(true);
    setSortingInProgress(false);
  };

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const gradientColor = `rgb(${Math.round(y * 255)}, ${Math.round(
      y * 255
    )}, ${Math.round(y * 255)})`;
    const borderColor = `rgb(${Math.round(x * 255)}, ${Math.round(
      x * 255
    )}, ${Math.round(x * 255)})`;
    setGradientColor(gradientColor);
    setBorderColor(borderColor);
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
      onMouseMove={handleMouseMove}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
          padding: "20px",
          margin: "10px",
          background: "#ffffff",
          borderRadius: "10px",
          boxShadow: `0 0 20px 10px ${borderColor}`,
          maxWidth: "600px",
        }}
      >
        <h2>Quick Sort Visualization</h2>
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

export default QuickSort;
