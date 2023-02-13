import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './styles/App.css'
import Home from './pages/Home'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} />
      </Routes>
    </main>
  </div>
  )
}

export default App
