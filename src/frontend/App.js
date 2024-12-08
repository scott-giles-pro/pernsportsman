import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import HomePage from "./pages/HomePage.js";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/create" element={<CreatePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
