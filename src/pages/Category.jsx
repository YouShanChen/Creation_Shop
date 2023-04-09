import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ComissionList from "../components/ComissionList";
import comissions from "../json/comissions.json";
import ComissionListTitle from "../components/ComissionListTitle";
function Category() {
  const {
    token: { colorPrimary, colorBgBase, colorTextBase },
  } = theme.useToken();
  const { categoryName } = useParams();
  const _comissions = comissions.filter(
    x => (x?.tag1.toUpperCase() === categoryName.toUpperCase()) || (x?.tag2.toUpperCase() === categoryName.toUpperCase()) || (x?.tag3.toUpperCase() === categoryName.toUpperCase()) || (x?.tag4.toUpperCase() === categoryName.toUpperCase())
  );
  const title = "Category";
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
        <ComissionListTitle />
        <ComissionList comissions={_comissions} />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;