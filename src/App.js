import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AchievementsPage from './components/AchievementsPage';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Skills from './components/Skills';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])

  return (
    
    <Router>
        {
          loading ?
          <div className='loading'>
            <ClipLoader color={"#222"} loading={loading} size={80} />
          </div>
          :
            <div className="App">
            <Header />     
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<Skills />}/>
              <Route path="/career" element={<AboutPage />} />
              <Route path="/achivement" element={<AchievementsPage />} />
            </Routes>     
          </div>
        }
    </Router>
  );
}

export default App;
