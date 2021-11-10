import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Services from "./component/Services/Services";
import Book from "./component/Book/Book";
import Login from "./component/Login/Login";
import AuthProvider from "./component/context/AuthProvider";
import PrivateRoute from "./component/privateRoute/PrivateRoute";
import Shiping from "./component/Shiping/Shiping";
import Admin from "./component/Admin/Admin";
import NotFound from "./component/notFound/NotFound";
import AddUpdate from "./component/Admin/AddUpdate";
import SeeAllShiping from "./component/Admin/SeeAllShiping";
import Seeallservice from "./component/Admin/Seeallservice";
// import Login from "./component/Login/Login";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/seeallservice">
              <Seeallservice></Seeallservice>
            </Route>
            <PrivateRoute path="/shiping">
              <Shiping></Shiping>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/book/:_id">
              <Book></Book>
            </PrivateRoute>
            <Route path="/addservice">
              <AddUpdate></AddUpdate>
            </Route>
            <Route path="/seeall">
              <SeeAllShiping></SeeAllShiping>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
