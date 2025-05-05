import Header from "./components/Header";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Tour from "./components/Tour";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header />
        {/* <LanguageSwitch /> */}
        <main>
          <Hero />
          <Music />
          <Tour />
          <About />
          {/* <Gallery /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
