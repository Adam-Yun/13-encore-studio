
import NavigationBar from "../../Navigation/navigationBar"
import Portfolio from "../Portfolio/portfolio"
import Price from "../Price/price"
import Contact from "../Contact/contact"
import "./home.css"


const HomePage = () => {
  return ( 
    <div className="home-container">
      <NavigationBar/>

      <section className="introduction-section">
        <h2>Encore Studio</h2>
      </section>

      <section className="portfolio-section">
        <Portfolio />
      </section>

      <section className="services-section">
        <Price />
      </section>

      <section className="contacts-section">
        <Contact />
      </section>

      <footer>Copyright</footer>
    </div>
  );
};

export default HomePage;