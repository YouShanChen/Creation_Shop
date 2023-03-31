import 'antd/dist/reset.css';
import './App.css';
import { ConfigProvider } from 'antd';
import Home from './pages/Home';
import Category from './pages/Category';
import Comission from './pages/Comission';
import theme from './theme';
function App() {
  <ConfigProvider theme={theme} >

      <Home />

  </ConfigProvider>
}

export default App
