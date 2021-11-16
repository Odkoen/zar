import React, { Component } from "react";
import "./style.css";

class Signup extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
  };
  signup = () => {
    this.state.password1 === this.state.password2
      ? alert("amjilt")
      : this.setState({ error: "Нууц үг хоорондоо тохирохгүй байна" });
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePass1 = (e) => {
    this.setState({ password1: e.target.value });
  };
  changePass2 = (e) => {
    this.setState({ password2: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="h-screen w-screen zurag  flex justify-center">
          <div className="bg-white rounded h-96 w-96 mt-10 flex flex-col items-center px-0">
            <div className=" mt-6 text-lg text-blue-700 font-semibold">
              <p>Бүртгэл үүсгэх</p>
            </div>

            <input
              onChange={this.changeEmail}
              className="border w-3/4  h-5 px-3 py-5 mt-4"
              type="text"
              name="ner"
              placeholder="Нэвтрэх нэр эсвэл И-Мейл"
            ></input>
            <input
              onChange={this.changePass1}
              className="border w-3/4  h-5 px-3 py-5 mt-4"
              type="password"
              name="pass"
              placeholder="Нууц үг"
            ></input>
            <input
              onChange={this.changePass2}
              className="border w-3/4  h-5 px-3 py-5 mt-4"
              type="password"
              name="pass"
              placeholder="Нууц үг давт"
            ></input>
            <span className="text-red-500">{this.state.error}</span>
            <button
              className="bg-blue-500 rounded text-center font-semibold text-white w-3/4 mt-4 h-10"
              onClick={this.signup}
            >
              Бүртгүүлэх
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
}

export default Signup;
