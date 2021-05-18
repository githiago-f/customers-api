import React from 'react';
import '../assets/css/index.css';
import { NavBar } from '../components/Nav';
import { Routes } from './router';

const App = () => (
  <>
    <main>
      <NavBar/>
      <div className="container mx-auto sm:px-2 min-h-screen overflow-auto">
        <Routes/>
      </div>
      <footer className="w-full text-center align-middle h-11 bg-white">
        <div>Icons made by
          <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a>&nbsp;
            from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </main>
  </>
);


export default App;
