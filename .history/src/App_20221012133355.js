import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from "./pages/Home/Home"
import Favourites from "./pages/Favourites/Favourites"

function App() {
  return (
  <div className='app'>
    <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
  </div>
  );
}

export default App;
