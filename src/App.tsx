import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToDo from './pages/ToDo';
import MyStory from './pages/MyStory';
import { MainLayout } from './layouts/MainLayout';

const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/my-story" element={<MyStory />} />
          <Route path="/todo" element={<ToDo />} />
        </Route>
      </Routes>
    </Router>
  )
};

export default App
