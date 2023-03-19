/**
 * The following content is written in the home content
 * will change according to the need of the enitity and 
 * due to this... This is only a sample content which is used
 * for the prototype.
 * A simple note for the developer... 
 *
*/

import { Button } from "@nextui-org/react";
import React from "react";
import HomeCSS from './scss/Home.module.css'

const HomeComponent = () => {
  return (
    <>
      <div className="page-content">
        <div
          className="container my-20 w-100 h-100 items-center"
          style={{ height: "100vh" }}
        >
          <div className="row items-center">
            <div className="col-md-7">
              <h1 className="drop-shadow-sm">
                We are the innovation <br />
                for people
              </h1>
              <div className="content text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                hic error quae odio officia facilis dolorem omnis cupiditate
                maxime sapiente. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate, minus?
              </div>
              <div className="buttons">
                <Button.Group color={"secondary"} className="my-5">
                  <Button type="button" value={"submit"}>
                    Learn more
                  </Button>
                  <Button
                    type="button"
                    value={"submit"}
                    flat
                    color={"secondary"}
                  >
                    Join now
                  </Button>
                </Button.Group>
              </div>
            </div>
            <div className="col-md-5">
              <div className={`container w-full h-full ${HomeCSS.responsiveImageContent}`}>
                <img
                  className={`fit-cover motion-safe:animate-bounce delay-300
                  z-index--1 rounded-xl hover:skew-x-2`}
                  src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Head image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <h1>Our worklogs</h1> 
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
