import React from "react";
import img from "../../assets/bgx.jpg";
import img2 from "../../assets/bg.jpg";
import { Imagem } from "./styles";
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
  return (
    <>
    
    {/* <div className="hero">
      <div className="card text-bg-dark border-0">
        <Imagem src={img} alt="Background" />
        
      </div>
    </div> */}
    
    <Carousel>
      <Carousel.Item>
      <Imagem src={img} alt="Background"
        />
        <Carousel.Caption>
          <h2>Fênix Instrumentos</h2>
          <h3>Continue a voar!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Imagem src={img2} alt="Background"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>

  );

  
};

export default Home;