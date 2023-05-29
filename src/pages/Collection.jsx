import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import CollectionModal from "../components/CollectionModal"
function Collection() {
  const {
    token: { colorPrimary, colorBgBase, colorText },
  } = theme.useToken();
  const title = "Collection";
    return (
  
      <div className="container mainLayout">
        <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorPrimary}; 
              color: ${colorText}
            }
        `}</style>
      </Helmet>
        <Header
          className="layoutHeader"
          title={title}
        />
        <div className="layoutContent">
        <style>{`
            .layoutContent { 
              background-color: ${colorBgBase}; 
            }
        `}</style>
        <CollectionModal />
        </div>
        <Footer className="layoutFooter" />
      </div>
    );
  }
  
  export default Collection;