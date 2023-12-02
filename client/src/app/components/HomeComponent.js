"use client";
import React, { useEffect, useState } from "react";
import { getHomeData } from "../api/auth";
import { useRouter } from "next/navigation";

const HomeComponent = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    getHomeData().then((res) => {
      if (res.data.valid) {
        setName(res.data.username);
      } else {
        router.push("/login");
      }
    });
  }, []);

  return <h1 className="m-10 text-5xl font-semibold">{`Welcome ${name}`}</h1>;
};

export default HomeComponent;
