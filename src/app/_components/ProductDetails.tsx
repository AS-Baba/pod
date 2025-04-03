"use client";
import Image from "next/image";
import { useState } from "react";
import StockStatus from "./ui/stockStatus";
import BuyNowSection from "./ui/buyNow";
import CheckoutSection from "./CheckoutSection";

export default function ProductDetails() {
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(28000);
  const [checkout, setCheckout] = useState(false);
  const [address, setAddress] = useState("");

  const increment = () => {
    setCount(count + 1);
    setAmount(28000 * count);
  };
  const decrement = () => {
    setCount(count - 1);
    setAmount(28000 * count - 28000);
  };

  const navigateTocheckout = (param:any) => {
    setAddress(param)
    setCheckout(true);
  };

  const goBack = () => {
    setCheckout(false);
  };

  return (
    <>
      <div className="px-11 mt-[80px]">
        {/* Breadcrumb  starts*/}
        <div className="flex space-x-4 items-center">
          <Image
            src={"/assets/icons/arrow-left.png"}
            alt="arrow left"
            width={700}
            height={700}
            className="w-[15px] h-[14px]"
          />
          <p className="text-[#080445] text-[10px] lg:text-[12px]  ">
            <span className="cursor-pointer">Shop thanau store home</span>{" "}
            {">>"} <span className="cursor-pointer">New balance crocs</span>
          </p>
        </div>
        {/* Breadcrumb ends */}

        <div className="w-full lg:flex justify-center  ">
          {!checkout ? (
            <div className=" lg:w-4/5  h-auto bg-[#F2F4FF] rounded-lg mt-5 p-6">
              <p className="text-[12px] text-[#080445] ">
                Shop thanau is selling the below item:
              </p>
              <div className="lg:flex max-sm:space-y-6 border-b border-[#C4C4C4] py-5">
                <div className="md:w-4/5 space-y-5 ">
                  <Image
                    src={"/assets/images/shoes.png"}
                    alt="shoes"
                    width={700}
                    height={700}
                    className="md:w-fit"
                  />
                </div>
                <div className="md:w-3/5 space-y-6">
                  <div className="space-y-5 border-b border-[#C4C4C4] pb-5">
                    <p className="text-[14px] text-[#080445]">
                      New balance Crocs
                    </p>
                    <p className="text-[14px] text-[#080445]">Size: 40</p>
                    <p className="text-[14px] text-[#080445] font-[700]">
                      N{amount.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-[#080445]">
                      How many do you want?
                    </p>
                    <div className="flex justify-between items-center w-[150px] h-[40px] bg-[#fff] rounded p-2">
                      <button
                        onClick={() => decrement()}
                        className="flex justify-center items-center w-[24px] h-[24px] transition-all ease-in-out duration-700  border border-[#080445] hover:bg-[#6D60F6] hover:border-0 hover:text-[#fff] text-[#080445] rounded cursor-pointer"
                      >
                        -
                      </button>
                      {count}
                      <button
                        onClick={() => increment()}
                        className="flex justify-center items-center w-[24px] h-[24px] border bg-[#6D60F6] text-[#fff] rounded cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <StockStatus />
                  </div>
                </div>
              </div>
              <BuyNowSection
                navigateToCheckout={navigateTocheckout}
                
              />
            </div>
          ) : (
            <CheckoutSection goBack={goBack} address={address}/>
          )}
        </div>
      </div>
    </>
  );
}
