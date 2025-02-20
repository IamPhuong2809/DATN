import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../features/Login/Login';
import Homepage from '../features/Homepage/Homepage';
import Control6DOF  from '../features/Control_6dof/Control_6dof';
import PowerRobot from '../features/PowerRobot/PowerRobot';

function AppRoutes() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/6dof" element={<Control6DOF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
