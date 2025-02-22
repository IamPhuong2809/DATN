import React, { useState } from 'react';
import './PowerRobot.css';
import Menu from '@components/Menu/Menu';
import logo1 from '@images/picture1.png';
import logo2 from '@images/picture2.png';
import logo3 from '@images/picture3.png';
import logo4 from '@images/picture4.png';
import logo5 from '@images/picture5.png';
import logo6 from '@images/picture6.png';

const PowerRobot = () => {
  const [coordinates, setCoordinates] = useState({
    X: 20.00,
    Y: 0.00,
    Z: 0.00,
    RX: 0.00,
    RY: 0.00,
    RZ: 0.00
  });

  const [toolName, setToolName] = useState('tool 1');

  const handleCoordinateChange = (coord, value) => {
    setCoordinates(prev => ({
      ...prev,
      [coord]: value
    }));
  };

  const handleReset = () => {
    setCoordinates({
      X: 0.00,
      Y: 0.00,
      Z: 0.00,
      RX: 0.00,
      RY: 0.00,
      RZ: 0.00
    });
  };

    //#region Menu
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo1];

    // Mảng chứa nội dung tooltip cho từng button
    const tooltips = [
    "Power Robot",
    "Configuration",
    "Cài đặt tham số",
    "Lập trình Robot",
    "Quản lý dữ liệu",
    "Trợ giúp",
    "Thông tin"
    ];

  const MenuLeft = () => {
    return (
      <div className='control-menu'>
        <Menu 
            logos={logos} 
            handleButtonClick={handleButtonClick}
            tooltips={tooltips}
         />
      </div>
    );
  };

  const handleButtonClick = (buttonId) => {
    console.log(`Button ${buttonId} clicked`);
  };
  //#endregion Menu

  return (
    <div className="power-robot-container">
      <MenuLeft />

      <div className="control-section">
        <div className="tool-header">
          <div>
            <div>Number</div>
            <div>1</div>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <div>Name</div>
            <input
              type="text"
              value={toolName}
              onChange={(e) => setToolName(e.target.value)}
              style={{ width: '300px' }}
            />
          </div>
        </div>

        <div className="coordinates-grid">
          {Object.entries(coordinates).map(([coord, value]) => (
            <div key={coord}>
              <div>{coord}</div>
              <input
                type="number"
                value={value}
                onChange={(e) => handleCoordinateChange(coord, parseFloat(e.target.value))}
                className="coordinate-input"
                step="0.01"
              />
            </div>
          ))}
        </div>

        <div className="button-group">
          <button className="button reset-button" onClick={handleReset}>
            Reset
          </button>
          <button className="button write-button">
            Write to Robot
          </button>
        </div>
      </div>
    </div>
  );
};

export default PowerRobot;
