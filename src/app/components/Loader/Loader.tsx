import React from "react";
import "./Loader.css";
import { useAppContext } from "@/app/context/AppContext";

const Loader = () => {
  const { name } = useAppContext();
  return (
    <div className="loader bg-gradient-to-b from-blue-500 to-black flex flex-col">
      <h1 className="loader-text font-serif">{name}</h1>
      <h2 className="loader-text-inverse font-serif">Web developer</h2>
    </div>
  );
};

export default Loader;
