import React from 'react';
import './App.css';
import { Footer } from './layouts/footer/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { Navbar } from './layouts/navbar/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Routes>
        <Navbar />
        <div className='flex-grow-1'>
          <Route path='/'>
            <HomePage />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
        </div>
        <Footer />
      </Routes> 
    </div>
  );
}
