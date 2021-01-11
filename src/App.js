import "./App.css";
import Container from "./container/InfoContainer/InfoContainer";
import Navigation from "./component/Navigation/Navigation";
import MainElement from "./container/MainInfoElement/MainInfoElement";
import TotalCases from "../src/component/TotalCases/TotalCases";
import Map from "./component/Map/Map";

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <MainElement>
          <TotalCases />
          <Map />
        </MainElement>
      </Container>
    </div>
  );
}

export default App;
