import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"

function Home() {
    const {
      token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    const title = "Creation Shop";
  
    return (
      <div className="mainLayout">
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
          slogan="Creation_Shop"
        />
        <div className="layoutContent container">
          <ProductList products={products} />
        </div>
        <Footer className="layoutFooter" />
      </div>
    );
  }

  export default Home;