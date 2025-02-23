import React, { useState } from 'react';
import './PowerRobot.css';
import Menu from '@components/Control_6dof/Menu/Menu';
import Header_Control from '@components/Control_6dof/Header/Header';
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

  const handleTopButtonClick = (buttonName) => {
    console.log(`Clicked ${buttonName}`);
    // Xử lý logic khi bấm nút
  };

  return (
    <div>
      <Header_Control />
      <MenuLeft />
      <div className="power-robot-container">
        <div className="top-section">

            {/* Left Controls */}
            <div className="top-section-left">
                <span classname="IO-signal">S</span>
                <span classname="IO-signal">I</span>
                <span classname="IO-signal">AUX</span>
            </div>

            {/* Center Status */}
            <div className="flex items-center ml-4 gap-4">
                <div className="text-gray-300 text-sm">
                <span>Tool: </span>
                <span className="text-white">0</span>
                </div>
                <div className="text-gray-300 text-sm">
                <span>Work: </span>
                <span className="text-white">0</span>
                </div>
            </div>

            {/* Override Section */}
            <div className="flex items-center ml-4 gap-2">
                <span className="text-gray-400 text-sm">Override</span>
                <span className="text-white text-sm">5 %</span>
            </div>

            {/* Right Section */}
            <div className="ml-auto flex items-center gap-2">
                <span className="text-gray-400 text-sm">Operator</span>
                <span className="text-white text-sm">siemens</span>
                <button className="text-gray-300 hover:text-white ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                </button>
            </div>
        </div>


      <div className="main-content">
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
    </div>
    </div>
  );
};

export default PowerRobot;
