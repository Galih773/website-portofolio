
import Navbar from "./components/Navbar";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Main from "./Pages/Main";
import PortfolioDetail from "./Pages/PortfolioDetail";


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="/:portofolio" element={<PortfolioDetail />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
