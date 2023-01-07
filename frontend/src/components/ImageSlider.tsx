const ImageSlider = () => {
  return (
    // .image-slider-effect .swiper-wrapper

    <div className="">
      <div className="h-[200px] m-auto overflow-hidden relative w-auto">
        <ul className="flex w-[calc(250px*8)] animate-scroll">
          <li className="w-[250px]">
            <img src="1.jpeg" alt="product image" />
          </li>
          <li className="w-[250px]">
            <img src="2.jpeg" alt="product image" />
          </li>
          <li className="w-[250px]">
            <img src="3.jpeg" alt="product image" />
          </li>
          <li className="w-[250px]">
            <img src="4.jpeg" alt="product image" />
          </li>
          <li className="w-[250px]">
            <img src="5.jpeg" alt="product image" />
          </li>
          <li className="w-[250px]">
            <img src="5.jpeg" alt="product image" />
          </li>
          <li className="w-[250px]">
            <img src="5.jpeg" alt="product image" />
          </li>
          <li className="w-[250px]">
            <img src="5.jpeg" alt="product image" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImageSlider;
