import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import RegisterCard from '../components/RegisterCard';

function Register() {
   const {
      token: { colorPrimary, colorTextBase,colorOrder  },
   } = theme.useToken();

   return (
      <div className="mainLayout">
         <Helmet>
            <title>register</title>
            <style>{`
               body { 
                  background-color: ${colorPrimary}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Register"
         />
         <div className="layoutContent container">
         <style>{`
            .layoutContent { 
              background-color: ${colorOrder}; 
            }
        `}</style>
            <RegisterCard />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Register;