
import NavigationBar from "../Navigation/navigationBar"
import Portfolio from "./Portfolio/portfolio"
import "./homePage.css"


const HomePage = () => {
  return ( 
    <div className="home-container">
      < NavigationBar/>
      <section className="introduction-section">
        <h2>Encore Studio</h2>
      </section>
      <section className="portfolio-section">
        <h2>Portfolio</h2>
        < Portfolio />
      </section>
      <section className="services-section">
        <h2>Package & Pricing</h2>
      </section>
      <section className="contacts-section">
        <h2>Contact Us!</h2>
      </section>
      <footer>Copyright</footer>
    </div>
  );
};

export default HomePage;