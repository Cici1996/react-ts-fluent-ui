import React from 'react';
import './App.css';
import { Sidebar, Topbar } from './components';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Engagement, EngagementForm } from './pages';
import { UseTranslationHook } from './utils/UseTranslation';

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
      <div className="app-footer">
        &nbsp;
      </div>
    </div>
  )
}

export const App: React.FC = () => {
  UseTranslationHook()
  return (
    <Routes>
      <Route path="/" element={<MainApp />}>
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/engagement/new" element={<EngagementForm />} />
      </Route>
      <Route path="/login" element={<div>Login Page</div>}></Route>
    </Routes>
  );
};
