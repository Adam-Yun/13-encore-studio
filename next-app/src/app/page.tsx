// Main Components
import Navbar from "./components/navigations/navigation"
import Introductions from "./components/introductions/introduction"
import Showcases from "./components/showcases/showcase"
import Prices from "./components/prices/price"
import Contacts from "./components/contacts/contact"

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

        <section className="contacts-section">
          <div id="contactsSection" className="anchor"></div>
          <Contacts />
        </section>

      </main>
      <footer>
        <p>© Copyright 2025 By Digital Adam</p>
      </footer>
    </div>
  );
}
