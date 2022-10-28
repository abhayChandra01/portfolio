import './App.scss'
import 'boxicons/css/boxicons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <>
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/work' element={<Work />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
      </>
  );
}

export default App;
