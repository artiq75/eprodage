import { useState } from 'react'
import { Cart } from './components/Cart'
import { Header } from './Layouts/Header'
import { Main } from './Layouts/Main'

export function App() {
  const [cart, setCart] = useState([])

  const handleAdd = function(item) {
    setCart([item, ...cart])
  }

  const handleRemove = function(index) {
    setCart(cart => cart.filter(item => item.index !== index))
  }
  
  return (
    <div className="container">
      <Cart cart={cart} onRemove={handleRemove} />
      <Header />
      <Main onAdd={handleAdd} />
    </div>
  )
}
