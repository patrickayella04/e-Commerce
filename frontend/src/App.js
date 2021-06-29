import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// BrouserRouter used an alias of Router and Router is used in the app below.
// BrowserRouter A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL. In order to use the router we wrapp the entire app below within it.
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer"; // These Footer and Header components are exported by default so no need to wrap them in curly braces ie. import {Footer} from "./components/Footer";.
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        {/** Provides padding at the y axis for seperation of container and header */}
        <Container>
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
