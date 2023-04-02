import { theme } from 'antd';

import Header from "../components/Header"
import Footer from "../components/Footer"
import TagList from "../components/TagList"
import CreatorList from "../components/CreatorList"
function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "Creation Shop";
  return (

    <div className="container mainLayout">
      
      <Header
        className="layoutHeader"
        title={title}
      />
      <div className="layoutContent">
        <TagList />
        <CreatorList />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;