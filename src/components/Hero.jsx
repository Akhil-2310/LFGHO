import React from 'react'
import dbank from "../images/dbank.png";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={dbank} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">
                Decentralized System using GHO
              </h1>
              <p className="py-6">
                Use one universal GHO token for everything!
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="btn btn-primary">Borrow</button>
          <button className="btn btn-primary">Transfer</button>
          <button className="btn btn-primary">Delegate</button>
        </div>
      </div>
    </div>
  );
}

export default Hero
