import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BubbleSort from "./Components/BubbleSort";
import MergeSort from "./Components/MergeSort";
import QuickSort from "./Components/QuickSort";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Main />
      <Routes>
        <Route path="/" element={<BubbleSort />} />
        <Route path="/bubble-sort" element={<BubbleSort />} />
        <Route path="/merge-sort" element={<MergeSort />} />
        <Route path="/quick-sort" element={<QuickSort />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
