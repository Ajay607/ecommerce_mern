import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) document.body.classList.add('remove-scrollbar');

    return () => {
      document.body.classList.remove('remove-scrollbar');
    }
  }, [active])


  return (
    <div className='header-wrapper'>
      <div className='header-top'>
        <div className='logo'>logo</div>
        <div className='pages-wrapper'>
          <ul className='pages'>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className='search-bar'><input type="search" /></div>
        <div className='cart'><i className="fa fa-cart-plus fa-lg"></i></div>
        <div className='hamburger-mobile' onClick={() => { setActive(!active) }}>
          {!active ? <span><i class="fa fa-bars" aria-hidden="true"></i></span> : <span><i class="fa fa-times" aria-hidden="true"></i></span>}
        </div>
      </div>
      <div className='pages-mobile-wrapper' >
        <ul className={active ? 'pages-mobile active' : 'pages-mobile'}>
          <li>Home</li>
          <li>Product</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Header


// https://fontawesome.com/v4/icons/