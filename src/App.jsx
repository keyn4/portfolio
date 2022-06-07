import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
