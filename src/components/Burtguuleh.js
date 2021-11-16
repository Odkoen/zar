import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function Signup(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const signup = () => {
    if (email === "") {
      setError("Нэвтрэх нэр оруулна уу");
    }
    if (password1 === password2) {
      history.push("/");
      props.a();
    } else {
      setError("Нууц үг хоорондоо тохирохгүй байна");
    }
  };
  const signout = () => {
    props.b();
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePass1 = (e) => {
    setPassword1(e.target.value);
  };
  const changePass2 = (e) => {
    setPassword2(e.target.value);
  };

  return (
    <div>
      <div className="h-screen w-screen zurag  flex justify-center">
        <div className="bg-white rounded h-96 w-96 mt-10 flex flex-col items-center px-0">
          <div className=" mt-6 text-lg text-blue-700 font-semibold">
            <p>Бүртгэл</p>
          </div>

          <input
            onChange={changeEmail}
            className="border w-3/4  h-5 px-3 py-5 mt-4"
            type="text"
            name="ner"
            placeholder="Нэвтрэх нэр эсвэл И-Мейл"
          ></input>
          <input
            onChange={changePass1}
            className="border w-3/4  h-5 px-3 py-5 mt-4"
            type="password"
            name="pass"
            placeholder="Нууц үг"
          ></input>
          <input
            onChange={changePass2}
            className="border w-3/4  h-5 px-3 py-5 mt-4"
            type="password"
            name="pass"
            placeholder="Нууц үг давт"
          ></input>
          <span className="text-red-500">{error}</span>
          <button
            className="bg-blue-500 rounded text-center font-semibold text-white w-2/4 mt-4 py-2 h-12"
            onClick={signup}
          >
            Бүртгүүлэх
          </button>
          <button
            className="bg-red-500 rounded text-center font-semibold text-white w-2/4 py-2 mt-4 h-15"
            onClick={signout}
          >
            Гарах
          </button>

          <div className="w-3/4 mt-4 flex justify-between"></div>
          <hr className="my-full mt-4 mb-2 border-gray-400 w-3/4"></hr>

          <div className="flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
