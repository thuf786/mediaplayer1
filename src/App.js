import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
   <>
   <div>
 
   <Header/>
   <Routes>
   
   < Route path='/landingpage' element={<LandingPage/>}/>
   < Route path='/home' element={<Home/>}/>
   < Route path='/watchhistory' element={<WatchHistory/>}/>
   </Routes>
   <Footer/>
   </div>
  
   
  
   </>
  );
}

export default App;
