import React from "react";
import img from "../../assets/bg.jpg";
import { Imagem } from "./styles";

export const Home = () => {
  return (
    <>
    
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <Imagem src={img} alt="Background" />
        
      </div>
    </div>
    
    
    
    </>

  );

  
};

export default Home;