

import Header from "../components/Header"
import Footer from "../components/Footer"
import TagList from "../components/TagList"

function Home() {

  return (
    <div className="container mainLayout">
      <Header
        className="layoutHeader"
        title="Creation Shop"
      />
      <div className="layoutContent">
        <TagList />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;