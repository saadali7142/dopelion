import React from "react";

const BestSellingItem = () => {
  return (
    <div className="h-[400px] mb-20 flex justify-evenly items-center flex-wrap bg-black">
      <div className=" w-80 h-80">
        <img
          src="2.jpeg"
          alt="Best selling Item object-fit hover:object-scale-down"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-1/3">
        <h2 className=" text-white text-center my-5 font-bold text-[2.625rem]">
          Our Best Seller Item
        </h2>
        <p className="text-white text-center">
          Grab this top quality dopest cap right now text to be
          addeddddddddddddddddddddddddddddddddd
        </p>
        <a
          href=""
          className="sm:ml-10 sm:my-8 my-6  font-bold px-6 p-3 sm:p-3 sm:px-16 pt-2 bg-white text-black rounded-full baseline"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
};

export default BestSellingItem;
