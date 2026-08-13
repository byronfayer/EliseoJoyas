import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Personalized from "./components/Personalized";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Catalog />
        <Personalized />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
