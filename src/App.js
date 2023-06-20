import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route 
              path="/about"
              element={<Home />}
            />
            <Route 
              path="/edu"
              element={<Home />}
            />
            <Route 
              path="/exp"
              element={<Home />}
            />
          </Routes>
        </div> 
      </BrowserRouter>
    </div>
   
  );
}

export default App;
