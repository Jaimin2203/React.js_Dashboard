import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';
import Premium from './pages/Premium';
import Account from './pages/Account';
import Performance from './pages/Performance';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/account" element={<Account />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App