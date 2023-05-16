
// import Nav from '../components/Nav';
// import Buscador from '../components/buscador';
// import Carrito from '../components/carrito';
// import Logo from '../components/logo';



import Home from '../views/Home/Home';
import { ThemeProvider } from '@emotion/react';
import Login from '../views/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css' 

function App() {

  return(
    <div className='App'>
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    
  )

}

export default App;

