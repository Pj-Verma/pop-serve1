import React from 'react'
import logo from '../images/Pop&Serve.png';
import { useEffect,useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import{TbSearch} from "react-icons/tb";
import{AiOutlineHeart} from "react-icons/ai";
import{CgShoppingCart} from "react-icons/cg";
import Search from './Search/Search';
import Cart from '../Cart/Cart';
import { Context } from '../../utils/context';
import "./Header.scss"; 
const Header = () => {
  const [scrolled,setScrolled]=useState(false);
  const [showCart,setShowCart]=useState(false);
  const [showSearch,setShowSearch]=useState(false);
  const navigate=useNavigate();
  const {cartCount}=useContext(Context);
const handlescroll=()=>{
  const offset=window.scrollY;
  if(offset>200){
    setScrolled(true);
  }
  else
  setScrolled(false);
};
  useEffect(() => {
    window.addEventListener("scroll",handlescroll)
  
     
  }, [])
  
  return(
    <>
  <header className={`main-header ${scrolled? 'sticky-header':'' }`}>
  <div className="header-content">
    <div className="left">
    <Link to="/">
    </Link>
      <img src={logo} width={90} height={70} alt="logo"  onClick={()=>navigate('/')}/>
    </div>

    <ul className="center">
      <li className='list'  onClick={()=>navigate('/')}>Home </li>
      <li className='list' onClick={()=>navigate('/footer/')}>About</li>
      <li className='list'  onClick={()=> {window.scrollTo(0,600)}}>Categories</li>
    </ul>
    <div className="right">
      <TbSearch onClick={()=>setShowSearch(true)}/>
      <AiOutlineHeart />
      <span className='cart-icon' onClick={()=>setShowCart(true)}>
        <CgShoppingCart/>
       { !!cartCount &&<span>{cartCount}</span>}
      </span>
    </div>
  </div>

  </header>
 { showCart && <Cart setShowCart={setShowCart}/>}
 {showSearch && <Search setShowSearch={setShowSearch}/>}
  </>
)}

export default Header