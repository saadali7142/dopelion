const Banner = () => {
  //   const background = "MainImg.jpg";
  return (
    <>
      <p className=" text-white bg-black text-center">
        FREE SHIPPING ON ORDERS ABOVE 2500
      </p>
      <div
        className="h-[60vh] sm:h-screen bg-cover bg-no-repeat bg-fixed bg-center"
        style={{
          //   backgroundColor: "#6DB3F2",
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),url(MainImg.jpg)`,
          //   backgroundImage: `url(MainImg.jpg)`,
        }}
      >
        <div className="duration-500 ease-out transition h-full w-full flex flex-col justify-center  text-white">
          <h1 className="transition duration-700 ease-in delay-500 hover:translate-x-72  max-w-3xl sm:max-w-none text-center sm:text-left md:w-3/4 lg:w-3/5 mx-auto sm:ml-10 sm:mt-8 text-4xl sm:text-7xl font-bold flex text-white text-bold justify-center sm:justify-start items-center">
            Looking for the Dope Caps!
          </h1>
          <a
            href=""
            className="sm:ml-10 sm:my-10 my-8 mx-auto font-bold px-6 p-3 sm:p-3 sm:px-16 pt-2 self-start bg-white text-black rounded-full baseline"
          >
            SHOP NOW
          </a>
        </div>
      </div>
      {/* <img src="MainImg.jpg" /> */}
    </>
  );
};

export default Banner;
