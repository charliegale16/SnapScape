import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'
import Popup from '../components/Popup'
import { useState } from 'react';

const Home = () => {

    const [showModal, setShowModal] = useState(false);
      
    const handleShowModal = () => {
        setShowModal(true);
    };
      
    const handleCloseModal = () => {
      setShowModal(false);
    };

  return (
    <div>
        <header>
        <Navbar />
        <h1>Collection of Albums</h1>
        </header>
        <button className="addButton" onClick={handleShowModal}>+</button>
        {<Popup show={showModal} handleClose={handleCloseModal} />}
    </div>
  )
}

export default Home