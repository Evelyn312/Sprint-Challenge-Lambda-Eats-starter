import React,{useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Form from "./components/Form";
import Home from "./components/Home";
import Order from "./components/Order";

const App = () => {
 const [order, setOrder] = useState({});

 const updateOrderHandler = (customOrder) => setOrder(customOrder);
  return (
    <Router>
      <Nav />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" render={props => (<Form {...props} updateOrder={updateOrderHandler}/>)}/>
        <Route path="/order" render={props => (<Order {...props} order={order} />)}/>
      </div>
    </Router>
  );
};
export default App;
