import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './layouts/navbar&footers/Navbar';
import { Dashboard } from './layouts/Dashboard/dashboard';
import { Footer } from './layouts/navbar&footers/Footer';

export const App = () => {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <Footer/>
    </>
  );
}

