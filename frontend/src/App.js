import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// BrouserRouter used an alias of Router and Router is used in the app below.
// BrowserRouter A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL. In order to use the router we wrapp the entire app below within it.
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer"; // These Footer and Header components are exported by default so no need to wrap them in curly braces ie. import {Footer} from "./components/Footer";.
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        {/** Provides padding at the y axis for seperation of container and header */}
        <Container>
          <Route path="/" component={HomeScreen} exact />

          {/** Below We create a new file for our products as they no long show when the url changes. In screens folder we create ProductScreens.js. The url will be /product/:id  - the :id is a placeholder so it can be anything so in this application it will be looked at as the _id param(prameter)*/}
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
