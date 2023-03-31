import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"

import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"


function Category() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const { categoryName } = useParams();
  const _products = products.filter(
    x => x?.category.toUpperCase() === categoryName.toUpperCase()
  );



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
        slogan="An example made by Vite."
      />
      <div className="layoutContent container">
        <ProductList products={_products} />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;