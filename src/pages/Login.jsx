import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginCard from '../components/LoginCard';

function Login() {
   const {
      token: { colorPrimary, colorText,colorOrder  },
   } = theme.useToken();
   const [searchParams] = useSearchParams();
   const redirect = searchParams.get('redirect');

   return (
      <div className="mainLayout">
         <Helmet>
            <title>Login</title>
            <style>{`
               body { 
                  background-color: ${colorPrimary}; 
                  color: ${colorText}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Login"
         />
         <div className="layoutContent container">
         <style>{`
            .layoutContent { 
              background-color: ${colorOrder}; 
            }
        `}</style>
            <LoginCard redirect={redirect} />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Login;