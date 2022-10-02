import { Cart } from './components/Cart'
import { Header } from './Layouts/Header'
import { Main } from './Layouts/Main'

export function App() {
  return (
    <div className="container">
      <Cart />
      <Header />
      <Main />
    </div>
  )
}
