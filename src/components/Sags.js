import React from "react";
import axois from "axios";

const Basket = (props) => {
  const { cardItems, Nemeh, Hasah } = props;
  const totalPrice = cardItems.reduce((a, c) => a + c.price * c.qty, 0);
  const order = {
    Baraa: cardItems.map((el) => el.name),
    une: cardItems.map((el) => el.price),
    niitUne: totalPrice,
  };
  const firebaseruu = () => {
    console.log(cardItems);
    axois
      .post("https://odko-ccc14-default-rtdb.firebaseio.com/orders.json", order)
      .then((response) => alert("Амжилттай захиаллаа"));
  };
  return (
    <aside className="w-2/6 bg-green-300 m-10 rounded-xl ">
      <div className="font-bold text-center text-2xl flex flex-row justify-end">
        <h2 className="mr-36 text-gray-700">Таний сагс</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <div>
        {cardItems.length === 0 && (
          <div className="font-semibold text-center mt-7">
            Таны сагс хоосон байна
          </div>
        )}
      </div>
      {cardItems.map((item) => (
        <div className="mx-6" key={item.id}>
          <div className="flex flex-row justify-around border border-separate rounded-xl mt-4">
            <div className="font-semibold">{item.name}</div>

            <button
              onClick={() => Nemeh(item)}
              className="bg-blue-500 hover:bg-blue-700 transform duration-200 hover:scale-110 text-white font-semibold py-2 px-4 rounded h-12 "
            >
              +
            </button>
            <button
              onClick={() => Hasah(item)}
              className="bg-red-500 hover:bg-red-700 transform duration-200 hover:scale-110 text-white font-semibold py-2 px-4 rounded h-12 "
            >
              -
            </button>
            <div className="font-semibold ">Тоо:{item.qty}</div>
            <div className="font-semibold border border-green-700">
              Үнэ:{item.price.toFixed(2)}
            </div>
          </div>
        </div>
      ))}
      {cardItems.length !== 0 && (
        <div>
          <hr className="mt-4"></hr>
          <div className="text-center text-white font-bold text-2xl">
            Нийт үнийн дүн:
            {totalPrice.toFixed(1)}
          </div>
          <button
            onClick={firebaseruu}
            className="ml-40 mt-8 bg-indigo-800 hover:bg-blue-700 transform duration-200 hover:scale-110 text-white font-semibold py-2 px-4 rounded h-12"
          >
            Захиалга хийх
          </button>
        </div>
      )}
    </aside>
  );
};

export default Basket;
