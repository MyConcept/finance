import React from 'react';
import './App.scss';
import Navbar from "./Navbar/Navbar";
import Layout from "./Layout/Layout"
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
