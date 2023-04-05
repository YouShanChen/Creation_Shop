import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ComissionList from "../components/ComissionList";
import comissions from "../json/comissions.json";

function Category() {
  const { categoryName } = useParams();
  const _comissions = comissions.filter(
    x => x?.['1tag'].toUpperCase() === categoryName.toUpperCase()
  );
  const title = "Category";
    return (
  
      <div className="container mainLayout">
        
        <Header
          className="layoutHeader"
          title={title}
        />
        <div className="layoutContent">
        <ComissionList comissions={_comissions} />
        </div>
        <Footer className="layoutFooter" />
      </div>
    );
  }
  
  export default Category;