import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import DataFetch from "./components/DataFetch"
import PDFReport from "./components/PDFreport"


function App() {

  return (
    <BrowserRouter>
      <div className="font-inter">
        <Navbar/>
        <Routes>
          <Route path="/" element={<PDFReport />} />
          <Route path="/data-fetch" element={<DataFetch />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
