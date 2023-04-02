import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home';
import Category from './pages/Category';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="category" element={< Category />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
