import "./navigationBar.css"

const NavigationBar = () => {
  return ( 
    <nav className="navigation-bar">
        <ol className="navigation-lists">
          <li className="navigation-list">
            <a href="#home-tag" className="navigation-text">
              Home
            </a>
          </li>

          <li className="navigation-list">
            <a href="#portfolio-tag" className="navigation-text">
              Our Work
            </a>
          </li>

          <li className="navigation-list">
            <a href="#contact-tag" className="navigation-text">
              Contact
            </a>
          </li>

          <li className="navigation-list">
            <a href="#price-tag" className="navigation-text">
              Book
            </a>
          </li>
        </ol>
    </nav>
  );
};

export default NavigationBar;