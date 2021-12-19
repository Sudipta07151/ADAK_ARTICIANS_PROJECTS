import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";
import SeeMore from "./pages/SeeMore";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      id="App"
      className=" bg-gradient-to-b from-yellow-300 to-orange-400 w-screen z-10"
    >
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
          <Route path="/sign">
            <SignIn />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
