import Image from "next/image";
// Main Components
import Navbar from "./components/navigations/navigation"
import Introductions from "./components/introductions/introduction"
import Showcases from "./components/showcases/showcase"
import Prices from "./components/prices/price"

export default function Home() {
  return (
    <div className="main-div">
      <Navbar/>
      <main className="main-box">

        <section className="introductions-section">
          <div id="introductionsSection" className="anchor"></div>
          <Introductions />
        </section>

        <section className="showcases-section">
          <div id="showcasesSection" className="anchor"></div>
          <Showcases />
        </section>

        <section className="prices-section">
          <div id="pricesSection" className="anchor"></div>
          <Prices />
        </section>

      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
