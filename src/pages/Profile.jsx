import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileCard from '../components/ProfileCard';

function Profile() {
   const {
      token: { colorPrimary, colorText,colorOrder },
   } = theme.useToken();

   return (
      <div className="mainLayout">
         <Helmet>
            <title>Profile</title>
            <style>{`
               body { 
                  background-color: ${colorPrimary}; 
                  color: ${colorText}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Profile"
         />
         <div className="layoutContent container">
         <style>{`
            .layoutContent { 
              background-color: ${colorOrder}; 
            }
        `}</style>
            <ProfileCard />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Profile;