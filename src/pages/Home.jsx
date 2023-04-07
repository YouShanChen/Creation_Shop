import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
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
      <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      <Header
        className="layoutHeader"
        title={title}
      />
      <div className="layoutContent">
        <Helmet>
          <style>
            {`            layoutContent{
              background-color: ${colorTextBase};
            }`}
          </style>
        </Helmet>
        <TagList />
        <CreatorList />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;