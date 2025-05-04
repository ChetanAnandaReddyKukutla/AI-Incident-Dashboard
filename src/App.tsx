
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/Animations/NotFoundPage';
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;