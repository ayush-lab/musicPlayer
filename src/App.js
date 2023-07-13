import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/sidebar';
import Favorites from './Pages/Favorites/favorite';
import History from './Pages/History/History';
import { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import MusicPlayer from './Pages/Dashboard/MusicPlayer/MusicPlayer';

function App() {
  // const [redirectToDashboard,setRedirectToDashboard] = useState(false);
  // const location = useLocation();

  // useEffect(()=>{
  //   const pathname = location.pathname;
  //   console.log("pathname",pathname);

  //   if(pathname==="/" || pathname===""){
  //     setRedirectToDashboard(true);
  //     console.log('setting')
  //   }
  //   else setRedirectToDashboard(false)


  // },[location.pathname])

  return (
    <div className="main">
        {/* <Router> */}
            <Sidebar>

              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/top"  element={<Favorites/>} />
                <Route exact path="/favorites" element={<Favorites />} />
                <Route exact path="/history" element={<History />} />

              </Routes>
            </Sidebar>
        {/* </Router> */}
    </div>
  );
}

export default App;
