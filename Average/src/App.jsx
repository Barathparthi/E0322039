import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Test from './components/Test'
import Average from './components/Average'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/Average" element={<Average />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
