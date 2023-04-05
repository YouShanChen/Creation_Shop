import Header from "../components/Header"
import Footer from "../components/Footer"
function Order() {
  const title = "Order";
    return (
  
      <div className="container mainLayout">
        
        <Header
          className="layoutHeader"
          title={title}
        />
        <div className="layoutContent">

        </div>
        <Footer className="layoutFooter" />
      </div>
    );
  }
  
  export default Order;