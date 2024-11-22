import logo from "./logo.svg";
import "./App.css";
import ProductList from "./Components/productlist";
{/*import conceptImg from "../src/assets/react-core-concepts.png";
import Profile from "./Components/Avatar";
import CoreConcept from "./Components/coreconcepts";
import reactComponent from "./assets/react-components.jpeg";
import { CORE_CONCEPTS } from "./data";*/}

const reactDescriptions = ["Fundamental", "Intermediate", "advanced"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <main>
        <section id="core-concepts">
          <ProductList />
          {/*<ServerStatus />
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              image={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>*/}
        </section>
      </main>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;