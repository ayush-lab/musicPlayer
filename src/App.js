import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/sidebar';

function App() {
  return (
    <div className="main">
        <Router>
            <Sidebar>
              <Routes>
                <Route exact path="/home" element={<Dashboard />} />
              </Routes>
            </Sidebar>
        </Router>
    </div>
  );
}

export default App;
