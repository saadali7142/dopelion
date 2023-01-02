import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-2 sm:p-6">
      <div className="flex items-center ">
        {/* LOGO */}
        <div className="pt-2 xs:ml-4">
          <img src="logo.png" alt="Brand logo" className="w-10" />
        </div>
        {/* Menu Items */}
        <div className="md:ml-10 hidden md:flex space-x-6">
          <a className="font-bold text-md hover:text-[#c7ff05]" href="#">
            SHOP
          </a>
          <a className="font-bold text-md hover:text-[#c7ff05]" href="#">
            CONTACT
          </a>
          <a className="font-bold text-md hover:text-[#c7ff05]" href="#">
            ABOUT
          </a>
        </div>
        <div className="flex ml-auto space-x-3">
          <div className="sm:hidden md:block font-bold text-md hover:text-[#c7ff05]">
            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className=" font-bold text-md">
            {/* <ShoppingBagIcon
              className="h-6 w-6"
              aria-hidden="true"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <Transition.Root show={cartOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={setCartOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                          as={Fragment}
                          enter="transform transition ease-in-out duration-500 sm:duration-700"
                          enterFrom="translate-x-full"
                          enterTo="translate-x-0"
                          leave="transform transition ease-in-out duration-500 sm:duration-700"
                          leaveFrom="translate-x-0"
                          leaveTo="translate-x-full"
                        >
                          <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-in-out duration-500"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in-out duration-500"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="absolute top-0 right-0 mr-4 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                <button
                                  type="button"
                                  className="rounded-md text-gray-800 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                                  onClick={() => setCartOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </Transition.Child>
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                              <div className="relative mt-6 flex-1 px-0">
                                <div className="md:hidden">
                                  <div
                                    id="menu"
                                    className={`absolute ${
                                      open ? "flex transform" : "hidden"
                                    } flex-col items-center self-end w-full  py-8 mt-6 space-y-6 font-bold bg-gray-100 sm:w-full sm:self-center drop-shadow-md`}
                                  >
                                    <a
                                      className="font-bold text-md  hover:text-[#c7ff05]"
                                      href="#"
                                    >
                                      SHOPasdasdasd
                                    </a>
                                    <a
                                      className="font-bold text-md hover:text-[#c7ff05]"
                                      href="#"
                                    >
                                      CONTACTasdasdasd
                                    </a>
                                    <a
                                      className="font-bold text-md hover:text-[#c7ff05]"
                                      href="#"
                                    >
                                      ABOUTasdasd
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </ShoppingBagIcon> */}
            <ShoppingBagIcon
              onClick={() => {
                setCartOpen(!cartOpen);
              }}
              className="h-6 w-6 hover:text-[#c7ff05]"
            />
            <div className="flex items-center justify-center">
              <div
                className={`fixed inset-0 w-full h-full ${
                  cartOpen ? "" : "invisible"
                } `}
              >
                <div
                  onClick={() => {
                    setCartOpen(!cartOpen);
                  }}
                  className={`absolute duration-500 ease-out transition-all inset-0 w-full h-full bg-gray-900 ${
                    cartOpen ? "opacity-50" : "opacity-0"
                  }`}
                ></div>
                <div
                  className={`absolute duration-500 ease-out transition-all w-80 sm:w-96 h-full bg-white right-0 top-0 ${
                    cartOpen ? "" : "translate-x-full"
                  } `}
                >
                  <div
                    className="focus:outline-none ml-3 flex items-center justify-center absolute top-0 right-0 mt-5 mr-5"
                    onClick={() => setCartOpen(!cartOpen)}
                  >
                    <XMarkIcon
                      className="w-6 h-6 hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h1>asdasdasd</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}

        {/* HAMBURGER ICON */}
        <button
          id="menu-btn"
          className="block md:hidden focus:outline-none ml-3"
        >
          <Bars3Icon
            className="h-7 w-7"
            aria-hidden="true"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </button>
        <div className="md:hidden">
          <div className="flex items-center justify-center">
            <div
              className={`fixed inset-0 w-full h-full ${
                open ? "" : "invisible"
              } `}
            >
              <div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`absolute duration-500 ease-out transition-all inset-0 w-full h-full bg-gray-900 ${
                  open ? "opacity-50" : "opacity-0"
                }`}
              ></div>
              <div
                className={`absolute duration-500 ease-out transition-all w-80 sm:w-96 h-full bg-white right-0 top-0 ${
                  open ? "" : "translate-x-full"
                } `}
              >
                <div
                  className="focus:outline-none ml-3 flex items-center justify-center absolute top-0 right-0 mt-5 mr-5"
                  onClick={() => setOpen(!open)}
                >
                  <XMarkIcon
                    className="w-6 h-6 hover:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
                <div
                  id="menu"
                  className={`absolute  ${
                    open ? "flex transform" : "hidden"
                  } flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold  bg-gray-100 sm:w-auto sm:self-center drop-shadow-md`}
                >
                  <a
                    className="font-bold text-md hover:text-[#c7ff05]"
                    href="#"
                  >
                    SHOP
                  </a>
                  <a
                    className="font-bold text-md hover:text-[#c7ff05]"
                    href="#"
                  >
                    CONTACT
                  </a>
                  <a
                    className="font-bold text-md hover:text-[#c7ff05]"
                    href="#"
                  >
                    ABOUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
