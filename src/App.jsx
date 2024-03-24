import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import DataFetch from "./components/DataFetch"
import PDFReport from "./components/PDFreport"
import { useState } from "react"


function App() {

  
  const [darkMode, setDarkMode] = useState(false)

  return (
    <BrowserRouter>
      <div className="font-inter">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="container flex items-center justify-center min-h-screen">
          <Routes>
            <Route path="/" element={<PDFReport darkMode={darkMode} />} />
            <Route path="/data-fetch" element={<DataFetch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
