import React from 'react';
import '../assets/css/index.css';
import { NavBar } from '../components/Nav';
import { Routes } from './router';

function App() {
  return (
    <>
      <main>
        <NavBar/>
        <div className="container mx-auto h-screen">
          <Routes/>
        </div>
        <footer className="w-full bg-white">
          <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
      </main>
    </>
  );
}

export default App;
