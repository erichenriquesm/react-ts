import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./views/HomePage.tsx";
import TaskDetails from "./views/TaskDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/task" element={<TaskDetails />} />
    </Routes>
  </BrowserRouter>
);
