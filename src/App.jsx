import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";
import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home';
import Order from './pages/Order';
import Collection from './pages/Collection';
import Category from './pages/Category';
import Comission from './pages/Comission';
import { store } from './redux/store';
import { darkTheme } from './theme';
function App() {
  const theme = darkTheme;
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme} >
        <HelmetProvider context={{}}>
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
        </HelmetProvider>
      </ConfigProvider>
    </Provider>



  );

}

export default App;
