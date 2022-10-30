import { Routes, Route } from "react-router-dom"
import Login from "./Login"
import SignUp from './SignUp'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={ <Login/> } />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App