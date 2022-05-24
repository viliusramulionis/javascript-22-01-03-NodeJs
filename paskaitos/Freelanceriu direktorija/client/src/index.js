import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './components/registration/Registration'
import ProfileCreate from './components/profile-create/ProfileCreate'
import ProfileList from './components/profile-list/ProfileList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ProfileList />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/create-profile" element={<ProfileCreate />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


