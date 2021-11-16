import React from "react";
import Product from "./Baraa";
import { Redirect } from "react-router";

const Main = (props) => {
  const { products, Nemeh, Hasah, auth } = props;
  if (!auth) {
    alert("Та бүртгэл үүсгэнэ үү");
    return <Redirect to="/signup" />;n
  }
  return (
    <main className="flex flex-col flex-shrink-0 w-3/6 bg-white text-black h-screen m-10">
      <h2 className="flex-shrink-0 text-center text-xl font-mono">
        Бэлэн бараа
      </h2>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            Nemeh={Nemeh}
            Hasah={Hasah}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
