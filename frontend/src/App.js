import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function BooksView() {

    const [books, setBooks] = useState([
        { id: 1, title: 'Wiedźmin: Ostatnie życzenie', author: 'Andrzej Sapkowski' },
        { id: 2, title: 'Hobbit', author: 'J.R.R. Tolkien' }
    ]);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleAddBook = (e) => {
        e.preventDefault();
        if (!title.trim() || !author.trim()) return;

        const newBook = {
            id: Date.now(),
            title: title,
            author: author
        };

        setBooks([...books, newBook]);
        setTitle('');
        setAuthor('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Zarządzanie Książkami</h2>
                <Link to="/" className="back-btn">← Powrót do menu</Link>
            </div>
            {}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '20px' }}>
                {}
                <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <h3>Dodaj nową książkę</h3>
                    <form onSubmit={handleAddBook} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor="title">Tytuł książki:</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="np. Pan Tadeusz"
                                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor="author">Autor:</label>
                            <input
                                type="text"
                                id="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder="np. Adam Mickiewicz"
                                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                padding: '10px',
                                background: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            Dodaj książkę
                        </button>
                    </form>
                </div>

                {}
                <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <h3>Aktualna lista książek</h3>
                    {books.length === 0 ? (
                        <p style={{ color: '#666' }}>Brak książek w bazie. Dodaj pierwszą!</p>
                    ) : (
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {books.map((book) => (
                                <li
                                    key={book.id}
                                    style={{
                                        padding: '10px',
                                        borderBottom: '1px solid #eee',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div>
                                        <strong>{book.title}</strong>
                                        <span style={{ color: '#666', marginLeft: '10px' }}>— {book.author}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </div>
    );
}

function MoviesView() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Zarządzanie Filmami</h2>
            <Link to="/" className="back-btn">← Powrót do menu</Link>
        </div>
    );
}

function HomeMenu() {
    return (
        <div className="menu-container">
            <Link to="/books" className="menu-card books-card">
                <h1>Książki</h1>
                <p>Zarządzaj bazą książek i autorów</p>
            </Link>

            <Link to="/movies" className="menu-card movies-card">
                <h1>Filmy</h1>
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