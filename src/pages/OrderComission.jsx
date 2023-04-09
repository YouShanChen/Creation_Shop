import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import OrderComissionDetail from "../components/OrderComissionDetail";
import ComissionState from "../components/ComissionState"
import comissions from "../json/comissions.json";

function OrderComission(){
   const {
      token: { colorPrimary, colorTextBase },
    } = theme.useToken();
    const { comissionId } = useParams();
    const comission = comissions.find(
       (x) => x.id === comissionId
    );
    const title = "Creation Shop";
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
              title="Product Detail"
           />
           <div className="layoutContent container" >
            
              <OrderComissionDetail comission={comission} />
              <ComissionState />
           </div>
           <Footer className="layoutFooter" />
        </div>
     );
}

export default OrderComission;