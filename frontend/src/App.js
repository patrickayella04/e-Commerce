import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer"; // These components are exported by default so no need to wrap them in curly braces ie. import {Footer} from "./components/Footer";.
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        {/** Provides padding at the y axis for seperation of container and header */}
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
