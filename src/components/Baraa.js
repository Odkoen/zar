import React from "react";

const Product = (props) => {
  const { product, Nemeh } = props;
  return (
    <div className="flex flex-shrink-0 flex-col">
      <div className="flex bg-gray-300 mx-8 rounded-xl border-collapse mb-3 shadow-lg">
        <img className="h-32 m-4 rounded-xl" alt="" src={product.image} />
        <div className="font-bold m-8">{product.name}</div>
        <div className="m-8 ">{product.price}</div>
        <button
          onClick={() => Nemeh(product)}
          className="bg-blue-500 hover:bg-blue-700 transform duration-200 hover:scale-110 text-white font-semibold py-2 px-4 rounded h-12 mt-8"
        >
          Сагсанд нэмэх
        </button>
      </div>
    </div>
  );
};

export default Product;
