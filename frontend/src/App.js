import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function BooksView() {
  return (
      <div style={{ padding: '20px' }}>
        <h2>Zarządzanie Książkami (Books)</h2>
        <Link to="/" className="back-btn">← Powrót do menu</Link>
        {}
      </div>
  );
}

function MoviesView() {
  return (
      <div style={{ padding: '20px' }}>
        <h2>Zarządzanie Filmami (Movies)</h2>
        <Link to="/" className="back-btn">← Powrót do menu</Link>
        {}
      </div>
  );
}

function HomeMenu() {
  return (
      <div className="menu-container">
        <Link to="/books" className="menu-card books-card">
          <h1>Books</h1>
          <p>Zarządzaj bazą książek i autorów</p>
        </Link>

        <Link to="/movies" className="menu-card movies-card">
          <h1>Movies</h1>
          <p>Zarządzaj bazą filmów i reżyserów</p>
        </Link>
      </div>
  );
}

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/books" element={<BooksView />} />
          <Route path="/movies" element={<MoviesView />} />
        </Routes>
      </Router>
  );
}

export default App;