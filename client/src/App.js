import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import './styles/App.css'
import Home from './components/Home'
import ViewAllDestinations from './components/ViewAllDestinations'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="/viewAllDestinations"
            element={<ViewAllDestinations />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
