import Image from "next/image";
// Main Components
import Navbar from "./components/navigation/navigation"
import Introduction from "./components/introduction/introduction"
import Showcase from "./components/showcase/showcase"

export default function Home() {
  return (
    <div className="main-div">
      <Navbar/>
      <main className="main-box">
        <section className="introduction-section">
          <Introduction />
        </section>

        <section className="portfolio-section">
          <Showcase />
        </section>

        <section className="contacts-section">
          contacts
          {/* <Contact /> */}
        </section>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
