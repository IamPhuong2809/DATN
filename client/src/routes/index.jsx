import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../features/Login/Login';
import Homepage from '../features/Homepage/Homepage';
import Control6dofRoutes from './6dofRoutes';

function AppRoutes() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        {Control6dofRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
