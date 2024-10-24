import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import "./App.css"
import Detail from './components/Detail';
import Navbar from './components/NavBar';
import { MovieList } from './components/MovieList';
import Trending from './components/Trending';
import Anim from './components/Anim';
import DetailAnim from './components/DetailAnim';
function App() {
  return (
      
    <Router>
    <div className="flex bg-black">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/anim" element={<Anim />} />
          <Route path="/detail/:movieId" element={<Detail />} />
          <Route path="/anim-detail/:animId" element={<DetailAnim />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
