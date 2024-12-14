import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[85vh] bg-[#333333]">
        <header className="flex justify-between">
          <div className="flex justify-start">
            <img
              className="size-[70px] ml-3 mt-3 rounded-tr-md "
              src="../public/logo.jpeg"
              alt=""
            />
            <h1 className="text-white font-bold m-6 text-2xl">Sierra Lofts</h1>
          </div>

         

          <div className="flex justify-end mr-6 text-white ">
            <div className="flex gap-4 mt-4 ">
              <button className="hover:bg-black px-2 hover:scale-110 duration-300 transition-all rounded-2xl ">
                Sign In
              </button>
              <button className="border-2 px-2  size-15 hover:scale-110 duration-300 rounded-2xl hover:bg-blue-950 transition-all ">
                Sign Up
              </button>
            </div>
          </div>
        </header>
        <div className="flex justify-center items-center h-[20vh]">
          <img
            className="h-80 w-[100vh] mt-32 mb-16 rounded-2xl transform hover:scale-105  transition-all duration-300 "
            src="../public/homepage.jpeg"
            alt=""
          />
        </div>
        <div className="flex justify-center mt-[140px] text-6xl font-extrabold text-white">
          <h1>Karibu Sierra Lofts</h1>
        </div>
        <div className="flex flex-col justify-center text-2xl text-white mt-2 text-center px-60">
          <p>
            A place where luxury meets comfort and prestige meets
            convenience.Indulge in the exclusivity of Sierra Lofts and make
            Sierra Lofts your home.{" "}
          </p>
          <p>
            Designed with you in mind,spaciousness and style are integrated
            together breathtaking views and a perfect living space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
