import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Header";
import ServicePage from "./ServicePage";
import CoursesPage from "./CoursesPage";
import Hooks from "./Hooks";
import PageNotFound from "./Page404";
import UrlParams from "./UrlParams";
import AddProduct from "./AddProduct";
import Api from "./ApiExample";
import ProductApi from "./ProductApi";
import CustomerApi from "./CustomerApi";
import EditProduct from "./EditProduct";
import DelProduct from "./DelProduct";
import ProductDetails from "./ProductDetails";
import ReduxExample from "./redux";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  // function getPage() {
  //   const route = window.location.pathname;
  //   if (route === "/about") return <AboutPage name="Tamil" course="Reactjs" />;
  //   if (route === "/services") return <ServicePage />;
  //   if (route === "/courses") return <CoursesPage authorname="Cory H" />;
  //   if (route === "/hooks") return <Hooks />;
  //   return <HomePage />;
  // }

  return (
    <div>
      <Header />
      {/* {getPage()} */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicePage} />
        <Route path="/courses" component={CoursesPage} />
        <Redirect from="/course" to="courses" />
        <Route path="/hooks" component={Hooks} />
        <Route path="/UrlParams" component={UrlParams} />
        <Route path="/addProduct" component={AddProduct} />
        <Route path="/api" component={Api} />
        <Route path="/ProductApi" component={ProductApi} />
        <Route path="/CustomerApi" component={CustomerApi} />
        <Route path="/editProduct/:Code" component={EditProduct} />
        <Route path="/DelProduct/:Code" component={DelProduct} />
        <Route path="/Productdetails/:Code" component={ProductDetails} />
        <Route path="/Redux" component={ReduxExample} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
