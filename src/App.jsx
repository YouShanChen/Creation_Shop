import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home';
import Order from './pages/Order';
import Collection from './pages/Collection';
import Category from './pages/Category';
import Comission from './pages/Comission';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="Order" element={< Order />} />
        <Route path="Collection" element={< Collection />} />
        <Route path="comissions">
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="id/:comissionId" element={<Comission />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );

}

export default App;
