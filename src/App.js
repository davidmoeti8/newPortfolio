import About from "./compoments/About";
import Contact from "./compoments/Contact";
import Home from "./compoments/Home";
import Navbar from "./compoments/Navbar";
import Skills from "./compoments/Skills";
import Work from "./compoments/Work";


function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <Skills />
       <Work />
       <Contact />
    </div>
  );
}

export default App;
