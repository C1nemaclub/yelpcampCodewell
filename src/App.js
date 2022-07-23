import Welcome from './pages/Welcome';
import Campgrounds from './pages/Campgrounds';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleCamp from './pages/SingleCamp';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/campgrounds' element={<Campgrounds />} />
          <Route path='/camp' element={<SingleCamp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
