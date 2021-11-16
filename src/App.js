import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Sags";
import data from "./data";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Nevtreh";
import Signup from "./components/Burtguuleh";

function App() {
  const { products } = data;
  const [cardItems, setCardItems] = useState([]);
  const [auth, setAuth] = useState(false);
  const a = () => setAuth(true);
  const b = () => setAuth(false);
  const Nemeh = (product) => {
    const exist = cardItems.find((x) => x.id === product.id);
    if (exist) {
      setCardItems(
        cardItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCardItems([...cardItems, { ...product, qty: 1 }]);
    }
  };

  const Hasah = (product) => {
    const exist = cardItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCardItems(cardItems.filter((x) => x.id !== product.id));
    } else {
      setCardItems(
        cardItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-full">
        <Header auth={auth} />
        <div className="flex flex-row">
          <Route path="/" exact>
            <Main Nemeh={Nemeh} products={products} auth={auth} />
            <Basket Nemeh={Nemeh} Hasah={Hasah} cardItems={cardItems} />
          </Route>
        </div>
      </div>
      <Route path="/sags">
        <Basket Nemeh={Nemeh} Hasah={Hasah} cardItems={cardItems} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/Signup" component={() => <Signup a={a} b={b} />} />
    </BrowserRouter>
  );
}

export default App;
