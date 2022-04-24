import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './assets/main.css';
import Home from './pages/home';
import Users from './pages/users';
import Records from './pages/records';

export const App: React.VFC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="records" element={<Records />} />
      </Routes>
      <Link to="users">users</Link>
      <Link to="records">records</Link>
    </>
  )
}
