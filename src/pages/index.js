import Head from "next/head";
import React from "react";
import HomePage from "./content/Home";

const HomeComponent = () => {
  return (
    <>
      <Head>
        <title>LinkHive.Inc</title>
        <link rel="shortcut-icon" href="/assets/1.png" />
      </Head>
      <div className="container">
        <HomePage />
      </div>
    </>
  );
};

export default HomeComponent;
