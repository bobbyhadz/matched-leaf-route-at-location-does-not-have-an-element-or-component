import './App.css';

import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ correctly using element prop */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <div>Home page</div>;
}
