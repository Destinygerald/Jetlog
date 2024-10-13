import './App.css'
import './fonts.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar.tsx'
import HomePage from './pages/home/Page.tsx'
import { Footer } from './Footer.tsx'
import { Sidebar } from './Sidebar.tsx'

import { SidebarContextProvider } from './context/SidebarContext.tsx'

function App() {  

  return (
    <div className='app'>
      <SidebarContextProvider>
        <Navbar />

        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>

        <Footer />
      </SidebarContextProvider>
    </div>
  )
}

export default App
