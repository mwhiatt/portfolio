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
              path="/"
              element={<Home />}
            />
            <Route 
              path="/edu"
            />
            <Route 
              path="/exp"
            />
          </Routes>
        </div> 
      </BrowserRouter>
    </div>
   
  );
}

export default App;
