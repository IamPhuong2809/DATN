import React, { useState } from 'react';
import './PowerRobot.css';

const PowerRobot = () => {
  const [loadName, setLoadName] = useState('load 1');
  const [centerOfMass, setCenterOfMass] = useState({ X: 0, Y: 0, Z: 0 });
  const [mass, setMass] = useState(0);
  const [inertiaTorque, setInertiaTorque] = useState({ JX: 0, JY: 0, JZ: 0 });

  const handleReset = () => {
    setLoadName('load 1');
    setCenterOfMass({ X: 0, Y: 0, Z: 0 });
    setMass(0);
    setInertiaTorque({ JX: 0, JY: 0, JZ: 0 });
  };

  return (
    <div className="load-config-container">
      <h2>Load</h2>
      <label>Name</label>
      <input type="text" value={loadName} onChange={(e) => setLoadName(e.target.value)} />

      <h3>Center of Mass</h3>
      <div className="input-group">
        {['X', 'Y', 'Z'].map((axis) => (
          <div key={axis}>
            <label>{axis}</label>
            <input
              type="number"
              value={centerOfMass[axis]}
              onChange={(e) => setCenterOfMass({ ...centerOfMass, [axis]: parseFloat(e.target.value) || 0 })}
            />
          </div>
        ))}
      </div>

      <label>Mass (kg)</label>
      <input type="number" value={mass} onChange={(e) => setMass(parseFloat(e.target.value) || 0)} />

      <h3>Inertia Torque</h3>
      <div className="input-group">
        {['JX', 'JY', 'JZ'].map((axis) => (
          <div key={axis}>
            <label>{axis}</label>
            <input
              type="number"
              value={inertiaTorque[axis]}
              onChange={(e) => setInertiaTorque({ ...inertiaTorque, [axis]: parseFloat(e.target.value) || 0 })}
            />
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="reset" onClick={handleReset}>Reset</button>
        <button className="write">Write to Robot</button>
      </div>
    </div>
  );
};

export default PowerRobot;