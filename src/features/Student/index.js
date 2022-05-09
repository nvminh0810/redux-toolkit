import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCity } from "../City/citySlice";
import AddEditPage from "./pages/AddEditPage";
import MainPage from "./pages/MainPage";

function StudentPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCity());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="add" element={<AddEditPage />} />
      <Route path=":idStudent" element={<AddEditPage />} />
    </Routes>
  );
}

export default StudentPage;
