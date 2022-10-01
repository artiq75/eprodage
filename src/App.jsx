import { useState } from 'react'
import { Slide } from './components/Slide'
import { Header } from './Layouts/Header'

export function App() {
  const [isClose, setIsClose] = useState(true)

  return (
    <div className="container">
      <Header />
      <main>
        <Slide onClick={() => setIsClose(false)} incrementer />
        {!isClose && (
          <div className="second">
            <Slide onClose={() => setIsClose(true)} close incrementer />
          </div>
        )}
      </main>
    </div>
  )
}
