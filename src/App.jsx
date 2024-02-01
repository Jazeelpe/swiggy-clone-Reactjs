import Header from './components/Header'

import { Outlet } from 'react-router-dom'
import Menu from './pages/Menu'

function App() {
  return (
    <div className="w-full h-full bg-white">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
