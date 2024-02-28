import React from 'react'
// import Navbar from './pages/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from './utils/context';

function App ()  {
  return (
    
     <BrowserRouter>
     <AppContext>
    <Header/> 
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/category/:id"element={ <Category/>}/>
        <Route path="/product/:id"element={<SingleProduct/>}/>
      </Routes>
      <Newsletter/>
      <Footer/>
      </AppContext>
     </BrowserRouter>
  )
}

export default App;


