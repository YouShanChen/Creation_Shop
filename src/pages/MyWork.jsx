import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import { useSearchParams } from 'react-router-dom';
import { useUserInfo } from "../react-query";
import Header from "../components/Header"
import Footer from "../components/Footer"
import MyWorkList from '../components/MyWorkList';
import comissions from "../json/comissions.json";

function MyWork() {
   const {
      token: { colorPrimary, colorText,colorOrder  },
   } = theme.useToken();
   const { data: userInfo} = useUserInfo();
   const [searchParams] = useSearchParams();
   const redirect = searchParams.get('redirect');
   const _works = comissions.filter(
      x => (x?.name === userInfo.name)
    );
   return (
      <div className="mainLayout">
         <Helmet>
            <title>MyWork</title>
            <style>{`
               body { 
                  background-color: ${colorPrimary}; 
                  color: ${colorText}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="MyWork"
         />
         <div className="layoutContent container">
         <style>{`
            .layoutContent { 
              background-color: ${colorOrder}; 
            }
        `}</style>
            <MyWorkList works={_works} />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default MyWork;