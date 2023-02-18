import React from "react";
import home from "./scss/Home.module.css";
import { Container } from "@nextui-org/react";

const HomePage = () => {
  return (
    <>
    <div className={`container ${home.content}`}>
      <Container className={`container ${home.content}`}>
        <h1 className={`${home.heading}`}>The home of the innovators of web</h1>
      </Container>
    </div>
    </>
  );
};

export default HomePage;
