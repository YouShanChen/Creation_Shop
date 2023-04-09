import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home';
import Order from './pages/Order';
import Collection from './pages/Collection';
import Category from './pages/Category';
import Comission from './pages/Comission';
import { darkTheme } from './theme';
import OrderComission from './pages/OrderComission';

function Router() {
    const theme=darkTheme;
    return(
<ConfigProvider theme={theme} >
        <HelmetProvider context={{}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={< Home />} />
              <Route path="Order" element={< Order />} />
              <Route path="orders/id/:comissionId" element={< OrderComission />} />

              <Route path="Collection" element={< Collection />} />
              <Route path="comissions">
                <Route path="category/:categoryName" element={<Category />} />
                <Route path="id/:comissionId" element={<Comission />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </ConfigProvider>
    
    );
}
export default Router;