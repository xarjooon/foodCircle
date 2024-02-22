
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import RestView from './Pages/RestView';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurant-view/:id" element={<RestView/>}/>
      </Routes>
      <Footer/>
  
    </div>
  );
}

export default App;
