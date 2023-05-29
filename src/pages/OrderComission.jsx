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
      token: { colorPrimary, colorText },
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
              color: ${colorText}
            }
        `}</style>
      </Helmet>
           <Header
              className="layoutHeader"
              title="Comission Detail"
           />
           <div className="layoutContent container" >
            
              <OrderComissionDetail comission={comission} />
              <ComissionState comission={comission}/>
           </div>
           <Footer className="layoutFooter" />
        </div>
     );
}

export default OrderComission;