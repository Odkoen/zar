import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className=" sticky top-0  mx-10 flex justify-between rounded-lg">
      <Link to="/">
        <h1 className="px-10 py-6 font-semibold text-2xl">Жижиг дэлгүүр</h1>
      </Link>
      <div className="flex  ">
        <Link to="/sags">
          <h2 className="px-10 py-6 font-semibold ">Сагс</h2>
        </Link>
        <Link to="/login" className="px-10 py-6 font-semibold ">
          Нэвтрэх
        </Link>
        <Link to="/signup" className="px-10 py-6 font-semibold ">
          Бүртгүүлэх
        </Link>
      </div>
    </header>
  );
};

export default Header;
