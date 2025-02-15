import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
