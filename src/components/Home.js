// src/components/Home.js
import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://garagem360.com.br/wp-content/uploads/2024/02/jac-ejs1-jc1-1160x652-1.jpg"
            alt="Primeiro slide"
            style={{ objectFit: "cover", height: "500px" }} // Ajuste a altura conforme necessário
          />
          <Carousel.Caption
            style={{ background: "rgba(0, 0, 0, 0.7)", borderRadius: "10px" }}
          >
            <h3>Renault Zoe e-tech Elétrico</h3>
            <p>
              SUV elétrico compacto, oferece bastante espaço para os ocupantes.
              Células da bateria que elimina o nível de ruído do módulo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://jornaldocarro.estadao.com.br/wp-content/uploads/2023/06/IMG_20230616_161835459_HDR-1160x652.jpg"
            alt="Segundo slide"
            style={{ objectFit: "cover", height: "500px" }} // Ajuste a altura conforme necessário
          />
          <Carousel.Caption
            style={{ background: "rgba(0, 0, 0, 0.7)", borderRadius: "10px" }}
          >
            <h3>Toyota Yaris 2023</h3>
            <p>
              Picape compacta monobloco, conjunto ótico full LED e rodas
              diamantadas de até 19 polegadas. Oferece um espaço de caçamba
              generoso, com capacidade para 935 litros.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mundofixa.com/wp-content/uploads/2023/10/XiaoPaoChe-SC-01-reveals-in-China-CNC-1-3-1160x652-2.jpg"
            alt="Terceiro slide"
            style={{ objectFit: "cover", height: "500px" }} // Ajuste a altura conforme necessário
          />
          <Carousel.Caption
            style={{ background: "rgba(0, 0, 0, 0.7)", borderRadius: "10px" }}
          >
            <h3>GWM Ora 03 2024</h3>
            <p>
              Farol alto automático, que reduz o facho do farol quando detecta
              veículo no sentido oposto. Retrovisores externos com setas,
              rebatimento elétrico e aquecimento.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
