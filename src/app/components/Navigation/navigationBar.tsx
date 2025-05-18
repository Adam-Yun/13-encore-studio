import "./navigationBar.css"

const NavigationBar = () => {
  return ( 
    <nav className="navigation-bar">
        <ol>
            <div className="list-company-title">
              <li>
                <p>
                  Encore Studio
                </p>
              </li>
            </div>
            <div className="list-others">
              <li>
                <p>
                  Home
                </p>
              </li>
              <li>
                <p>
                  Book
                </p>
              </li>
            </div>
        </ol>
    </nav>
  );
};

export default NavigationBar;