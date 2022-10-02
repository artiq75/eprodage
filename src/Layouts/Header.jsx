import { useEffect } from 'react'

export function Header() {
  useEffect(() => {
    const headerNav = document.querySelector('.header__nav')
    const cart = document.querySelector('.cart')
    matchMedia('(min-width: 770px)').addEventListener('change', () => {
      headerNav.classList.remove('reveal')
    })
    document.querySelector('.header__menu').addEventListener('click', () => {
      headerNav.classList.add('reveal')
    })
    document.querySelector('.header__close').addEventListener('click', () => {
      headerNav.classList.remove('reveal')
    })
    document.querySelector('.header__cart').addEventListener('click', () => {
      cart.classList.toggle('reveal')
    })
  }, [])

  return (
    <header className="header">
      <div className="header__left">
        <img className="header__menu" src="images/icon-menu.svg" alt="" />
        <h1><img src="images/logo.svg" alt="" /></h1>
        <nav className="header__nav">
          <div className="header__nav-inner">
            <img className="header__close" src="images/icon-close.svg" alt="" />
            <ul className="header__nav-items">
              <li><a href="#">Collections</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="header__right">
        <img className="header__cart" src="images/icon-cart.svg" alt="" />
        <img className="header__avatar" src="images/image-avatar.png" alt="" />
      </div>
    </header>
  )
}
