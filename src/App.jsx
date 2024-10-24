import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import "./App.css"
import Detail from './components/Detail';
import Navbar from './components/NavBar';
import { MovieList } from './components/MovieList';
function App() {
  return (
      
    <Router>
    <div className="flex bg-black">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/detail/:movieId" element={<Detail />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
