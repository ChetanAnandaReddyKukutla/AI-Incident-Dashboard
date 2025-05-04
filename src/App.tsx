
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/Animations/NotFoundPage';
import { Toaster } from 'sonner'
function App() {
  return (
  <>
  <Toaster duration={1000} position='top-center'/>
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