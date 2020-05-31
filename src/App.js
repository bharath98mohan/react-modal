import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

//See react-modal documentation for more info

Modal.setAppElement('#root')
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal 
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={
        {
          overlay: {
            backgroundColor: 'grey'
          },
          content: {
            color: 'orange'
          }
        }
      }>
        <h2>Modal Title</h2>
        <p>Modal body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
