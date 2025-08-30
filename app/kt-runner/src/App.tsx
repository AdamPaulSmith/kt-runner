import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<div>Home (Saved Kill Teams)</div>} />
              <Route path="/create" element={<div>Create Kill Team</div>} />
              <Route path="/game" element={<div>Game Mode</div>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
