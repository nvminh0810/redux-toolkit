import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEditPage from "./pages/AddEditPage";
import MainPage from "./pages/MainPage";

function UserPage() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="add" element={<AddEditPage />} />
    </Routes>
  );
}

export default UserPage;
