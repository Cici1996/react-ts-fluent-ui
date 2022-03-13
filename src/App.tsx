import React from 'react';
import './App.css';
import { Sidebar, Topbar } from './components';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

const MainApp: React.FC = () => {
  return (
    <div className="app">
      <Topbar />
      <div className="app-body">
        <Sidebar />
        <section className="app-content" style={{ flex: 5 }}>
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainApp />}>
        <Route path="/expenses" element={<Home />} />
      </Route>
      <Route path="/login" element={<Home />}></Route>
    </Routes>
  );
};
