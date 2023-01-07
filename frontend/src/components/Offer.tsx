import React from "react";

const Offer = () => {
  return (
    <>
      <div
        className="h-[70vh] bg-cover bg-no-repeat bg-fixed bg-center"
        style={{
          //   backgroundColor: "#6DB3F2",
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url(offer.jpeg)`,
          //   backgroundImage: `url(MainImg.jpg)`,
        }}
      >
        <div className="w-5/12 sm:ml-20 h-full flex flex-col justify-center items-start">
          <h4 className="text-white text-2xl">Limited Time Offer</h4>
          <h3 className="text-white font-medium text-4xl my-5">
            Special Edition
          </h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h5 className="text-white text-2xl my-5">
            Buy This Cap At 20% Discount, Use Code OFF20
          </h5>
          <a
            href=""
            className="my-3 font-bold px-3 p-3 sm:p-3 sm:px-6 pt-2 bg-white text-black rounded-full baseline"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </>
  );
};

export default Offer;
