import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Links from "./Routes"

function Admin() {
 
  // Links get added to mobile and normal nav
  const links = Links.map(({path, name, layout}) => (
    {
      path: layout + path,
      text: name ,
    }
  ))

  return (
  
      <div className="layout">
        <Navigation links={links} />
        <div className="main-container">
          <Header links={links} />
          <Content />
          <Footer />
        </div>
       </div>
  
  );
}

export default Admin;
