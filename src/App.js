
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cancel from './COMPONENTS/Cancel';
import Navbar from './COMPONENTS/Navbar';
import Products from './COMPONENTS/Products';
import Success from './COMPONENTS/Success';

function App() {
  return (
    <div>
      <Navbar />
      <Products />
      <BrowserRouter>
      <Routes>
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
