
import NavigationBar from "../../Navigation/navigationBar"
import Portfolio from "../Portfolio/portfolio"
import Price from "../Price/price"
import Contact from "../Contact/contact"
import Feedback from "../Feedback/feedback"
import Introduction from "../Introduction/introduction"
import "./home.css"


const HomePage = () => {
  return ( 
    <div id="home-tag" className="home-container">
      <NavigationBar/>

      <section className="introduction-section">
        <Introduction />
      </section>

      <section className="portfolio-section">
        <Portfolio />
      </section>
{/* 
      <section className="services-section">
        <Price />
      </section> */}

      <section className="contacts-section">
        <Contact />
      </section>

      {/* <section className="feedback-section">
        <Feedback/>
      </section> */}

      <footer>Copyright</footer>
    </div>
  );
};

export default HomePage;