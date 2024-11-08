import React from 'react';
import './App.css';
import { Footer } from './layouts/footer/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { Navbar } from './layouts/navbar/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

export const App = () => {
  return (
    <div>
      <Navbar/>
      {/*<HomePage/>*/}
      <SearchBooksPage />
      <Footer/>
    </div>
  );
}
