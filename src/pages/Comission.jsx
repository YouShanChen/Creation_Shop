import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ComissionDetail from "../components/ComissionDetail";
import comissions from "../json/comissions.json";

function Comission(){
    const { comissionId } = useParams();
    const comission = comissions.find(
       (x) => x.id === comissionId
    );
    return (
        <div className="mainLayout">
           <Header
              className="layoutHeader"
              title="Product Detail"
           />
           <div className="layoutContent container">
              <ComissionDetail comission={comission} />
           </div>
           <Footer className="layoutFooter" />
        </div>
     );
}

export default Comission;