import {
  ArrowPathIcon,
  GlobeAsiaAustraliaIcon,
  LockClosedIcon,
  SwatchIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

const Qualities = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto w-[85%]  py-28 grid lg:grid-cols-4 gap-19 ">
        <div className=" flex flex-col items-center ">
          <GlobeAsiaAustraliaIcon className="w-16 h-16  " />
          <h4 className="text-xl font-medium my-4">Worlwide Shipping</h4>
          <p className="text-center">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <SwatchIcon className="w-16 h-16  " />
          <h4 className="text-xl font-medium my-4">Best Quality</h4>
          <p className="text-center">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <TagIcon className="w-16 h-16  " />
          <h4 className="text-xl font-medium my-4">Best Offers</h4>
          <p className="text-center">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <LockClosedIcon className="w-16 h-16  " />
          <h4 className="text-xl font-medium my-4">Secure Payments</h4>
          <p className="text-center">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
