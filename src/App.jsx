import 'antd/dist/reset.css';
import './App.css';
import { ConfigProvider } from 'antd';
import Home from './pages/Home';
import { darkTheme } from './theme';
function App() {
  const theme = darkTheme;
  return (
    <ConfigProvider theme={theme} >

      <Home />

    </ConfigProvider>
  )

}

export default App;
