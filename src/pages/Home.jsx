

import Header from "../components/Header"
import Footer from "../components/Footer"


function Home() {

  return (
    <div className="container mainLayout">
      <Header
        className="layoutHeader"
        title="Creation Shop"
      />
      <div className="layout content"></div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;