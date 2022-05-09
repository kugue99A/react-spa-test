import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/main.css";
import Home from "@pages/home";
import Users from "@pages/users";
import Records from "@pages/records";
import MainLayout from "@components/MainLayout";

export const App: React.VFC = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="records" element={<Records />} />
        </Routes>
      </MainLayout>
    </>
  );
};
