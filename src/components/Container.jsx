import React from "react";
import Header from "./Header";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Certificates from "./Certificates";
import Works from "./Works";

const Container = () => {
  return (
    <div className="lg:flex w-full gap-28  ">
      {/* left column start on large screen start*/}
      <div className="lg:flex  justify-between md:px-10 lg:px-0 gap-10 lg:gap-40 ">
        <div className=" lg:max-w-lg  lg:flex-[1.5]relative">
          <div className="sticky top-0 z-10">
            <Header />
          </div>
        </div>
        {/* left column start on large screen end*/}
        {/* right column start on large screen start*/}
        <div className="lg:flex-1 lg:w-[50vw]">
          <Main />
        </div>
        {/* right column start on large screen end*/}
      </div>
    </div>
  );
};

export default Container;
