import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BasketModal from "../components/BasketModal"

function Order() {
  const {
    token: { colorPrimary,colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "Order";
    return (
  
      <div className="container mainLayout">
        <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorPrimary}; 
              color: ${colorTextBase}
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
        <BasketModal/>
        </div>
        <Footer className="layoutFooter" />
      </div>
    );
  }
  
  export default Order;