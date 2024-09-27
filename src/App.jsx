
import { useState } from 'react';
import './App.css';

function App() {
  // State to hold the background color
  const [bgColor, setBgColor] = useState('black'); // Initial background color

  // Function to change the background color
  const changeColor = (color) => {
    setBgColor(color); // Update the color
  };

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: bgColor }} className="container-fluid position-fixed">
      <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
        <div className='btn btn-primary m-5 buttons' onClick={() => changeColor('blue')}>BLUE</div>
        <div className='btn btn-secondary m-5 buttons' onClick={() => changeColor('gray')}>GRAY</div>
        <div className='btn btn-warning m-5 buttons' onClick={() => changeColor('yellow')}>YELLOW</div>
        <div className='btn btn-success m-5 buttons' onClick={() => changeColor('green')}>GREEN</div>
      </div>
    </div>
  );
}

export default App;

