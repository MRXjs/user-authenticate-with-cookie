"use client";
import Link from "next/link";
import React from "react";
import { userCreate } from "../api/auth";
import { useRouter } from "next/navigation";

const SignUp = async () => {
  const router = useRouter();

  const formOnSubmitHandler = async (e) => {
    e.preventDefault();
    await userCreate(e, router);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form
        onSubmit={formOnSubmitHandler}
        className="flex flex-col p-10 shadow-xl"
      >
        <span className="mb-10 text-4xl text-center">Sign Up</span>
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
            <span>Email</span>
            <input
              name="email"
              type="email"
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
            SignUp
          </button>
        </div>
        <div className="flex mt-5">
          <Link href={"/login"} className="duration-300 hover:font-semibold">
            Do you have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
