"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { userLogin } from "../api/auth";

const Login = () => {
  const router = useRouter();

  const formOnSubmitHandler = async (e) => {
    e.preventDefault();
    await userLogin(e, router);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form
        onSubmit={formOnSubmitHandler}
        className="flex flex-col p-10 shadow-xl"
      >
        <span className="mb-10 text-4xl text-center">Login</span>
        <div className="grid grid-rows-2 gap-3">
          <div className="grid grid-cols-2">
            <span>UserName</span>
            <input
              name="username"
              type="text"
              className="p-1 border-2 border-[#757575] border-solid rounded-md"
              required
            />
          </div>
          <div className="grid grid-cols-2">
            <span>Password</span>
            <input
              name="password"
              type="password"
              className="p-1 border-2 border-[#757575] border-solid rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-10">
          <button
            type="submit"
            className="p-2 transition-all duration-300 rounded-md shadow-lg w-28 hover:shadow-xl hover:font-semibold"
          >
            Login
          </button>
        </div>
        <div className="flex mt-5">
          <Link href={"/sign-up"} className="duration-300 hover:font-semibold">
            Create Account.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
