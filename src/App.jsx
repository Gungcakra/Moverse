import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import "./App.css"
import Detail from './components/Detail';
function App() {
  return (
      
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:movieId' element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
