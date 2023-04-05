import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home';
import Order from './pages/Order';
import Collection from './pages/Collection';
import Category from './pages/Category';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="Order" element={< Order />} />
        <Route path="Collection" element={< Collection />} />
                <Route path="Category/:categoryName" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
