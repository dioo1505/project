import { Route, Routes } from 'react-router-dom'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/analytics" element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default App
