import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";
import SeeMore from "./pages/SeeMore";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div id="App" className=" bg-gradient-to-b from-yellow-300 to-orange-400 w-screen">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/restaurants">
            <Restaurants />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/restaurants/:id">
            <SeeMore />
          </Route>
          <Route path="*">
            <Redirect to="/restaurants" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
