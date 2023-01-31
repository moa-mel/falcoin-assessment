import './App.css';
import Register from "./Regisiter/Register"
import Verify from "./Verify/Verify"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/verify" element={<Verify/>}/>
    <Route/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
