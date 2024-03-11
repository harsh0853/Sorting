import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BubbleSort from "./BubbleSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import Main from "./Main";
import Footer from "./Footer";

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
