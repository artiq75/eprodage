import { useRef, useEffect } from 'react'

export function Header() {
  const cartRef = useRef(null)

  useEffect(() => {
    cartRef.current = document.querySelector('.cart')
  }, [cartRef.current])

  useEffect(() => {
    const headerNav = document.querySelector('.header-nav')
    matchMedia('(min-width: 770px)').addEventListener('change', () => {
      headerNav.classList.remove('reveal')
    })
    document.querySelector('.header-menu').addEventListener('click', () => {
      headerNav.classList.add('reveal')
    })
    document.querySelector('.header-close').addEventListener('click', () => {
      headerNav.classList.remove('reveal')
    })
  }, [])

  const handleClick = function () {
    cartRef.current.classList.toggle('reveal')
  }

  return (
    <header className="header">
      <div className="header-left">
        <img className="header-menu" src="images/icon-menu.svg" alt="" />
        <h1>
          <a href="/"><img src="images/logo.svg" alt="" /></a>
        </h1>
        <nav className="header-nav">
          <div className="header-nav__inner">
            <img className="header-close" src="images/icon-close.svg" alt="" />
            <ul className="header-items">
              <li className='header-item'>
                <a href="/">Collections</a>
              </li>
              <li className='header-item'>
                <a href="/">Men</a>
              </li>
              <li className='header-item'>
                <a href="/">Women</a>
              </li>
              <li className='header-item'>
                <a href="/">About</a>
              </li>
              <li className='header-item'>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="header-right">
        <img
          onClick={handleClick}
          className="header-cart"
          src="images/icon-cart.svg"
          alt=""
        />
        <img className="header-avatar" src="images/image-avatar.png" alt="" />
      </div>
    </header>
  )
}
