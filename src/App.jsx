import React from "react";
import MouseBlurEffect from "./components/MouseBlurEffect";
import Container from "./components/Container";

function App() {
  return (
    <>
      <MouseBlurEffect />
      <div className="mx-auto md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Container />
        </div>
      </div>
    </>
  );
}

export default App;
