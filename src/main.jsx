import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./pages/Items";
import UserManagement from "./UserManagement";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Items />} />
      <Route path="/users" element={<UserManagement />} />
    </Routes>
  </BrowserRouter>
);
