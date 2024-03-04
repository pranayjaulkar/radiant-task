import "./App.css";
import NavbarSection from "./components/NavbarSection/NavbarSection";
import BuilderList from "./components/BuilderList/BuilderList";
import Footer from "./components/Footer/Footer";
import RelatedBuilderList from "./components/RelatedBuilderList/RelatedBuilderList";

function App() {
  return (
    <div>
      <NavbarSection />
      <BuilderList />
      <RelatedBuilderList />
      <Footer />
    </div>
  );
}

export default App;
