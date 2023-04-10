import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { useSelector } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home';
import Order from './pages/Order';
import Collection from './pages/Collection';
import Category from './pages/Category';
import Comission from './pages/Comission';
import { darkTheme,lightTheme } from './theme';
import OrderComission from './pages/OrderComission';
import { selectLightMode } from "./redux/colorSLice";
function Router() {
  const lightMode = useSelector(selectLightMode);
  const theme = lightMode ? lightTheme : darkTheme;
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