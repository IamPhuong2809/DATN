import './App.css';
import AppRoutes from './routes/Routes';
import { Toaster } from 'react-hot-toast';
function App() {
    
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}

export default App;
