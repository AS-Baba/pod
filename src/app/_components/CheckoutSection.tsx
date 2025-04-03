"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2, Pencil } from "lucide-react";

export default function CheckoutSection({ goBack, address }: any) {
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const itemPrice = 28000;
  const deliveryFee = 2000;
  const total = selectedDelivery
    ? itemPrice * quantity + deliveryFee
    : itemPrice * quantity;

  const handleDeliveryChange = (type: any) => {
    setSelectedDelivery(type);
  };

  return (
    <div className="w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Section: Delivery Address & Type */}
      <div className="md:col-span-2 bg-white p-6 rounded-lg border border-zinc-200">
        <div className="flex justify-between items-center  pb-4 mb-4">
          <div>
            <h3 className="text-[#111] font-[600]">Delivery address</h3>
            <p className="text-[8px] md:text-[10px] text-[#111]">
              Saved address: {address}
            </p>
          </div>
          <button
            onClick={() => goBack()}
            className="text-[8px] md:text-[10px] text-[#111] flex items-center gap-1 hover:text-gray-700"
          >
            <Pencil size={14} /> Change address
          </button>
        </div>

        <h3 className="text-[#111] font-[600] mb-2">Select delivery type</h3>
        <div className="space-y-3">
          {["Gokada Express", "Standard Delivery"].map((type, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="deliveryType"
                value={type}
                onChange={() => handleDeliveryChange(type)}
                className="w-4 h-4"
              />
              <span>{type}</span>
              <span className="ml-auto font-bold">₦2,000</span>
            </label>
          ))}
        </div>
      </div>

      {/* Right Section: Order Summary */}
      <div className="bg-white p-6 rounded-lg space-y-4 border border-zinc-200">
        <h3 className="max-sm:text-[13px] text-[#111] font-[600] mb-4">
          Order summary and checkout
        </h3>
        <div className="flex items-center gap-3  pb-4 mb-4">
          <Image
            src="/assets/images/shoes.png"
            alt="New Balance Crocs"
            width={50}
            height={50}
            className="rounded-md"
          />
          <div className="flex-1">
            <p className="text-[12px] text-[#111]">New Balance Crocs</p>
            <p className="text-xs text-[#111]">Size: 40</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 text-[10px] text-[#080445] hover:text-red-500">
            <Trash2 size={16} />
            Remove from cart
          </button>
          <div className="flex justify-between items-center w-[100px] md:w-[120px] h-[40px] bg-[#fff] rounded p-2">
            <button
              onClick={() => setQuantity(quantity - 1)}
              className="flex justify-center items-center w-[24px] h-[24px] transition-all ease-in-out duration-700  border border-[#080445] hover:bg-[#6D60F6] hover:border-0 hover:text-[#fff] text-[#080445] rounded cursor-pointer"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="flex justify-center items-center w-[24px] h-[24px] border bg-[#6D60F6] text-[#fff] rounded cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between text-[14px] text-[#111] mb-3 border-t border-zinc-200 py-3">
          <span className="text-zinc-600">Item price:</span>
          <span>₦{itemPrice.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-[14px] text-[#111] mb-3 ">
          {selectedDelivery && (
            <>
              <span className="text-zinc-600">Delivery fee:</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </>
          )}
        </div>
        <div className="flex items-center justify-between text-lg font-semibold text-gray-900 border-t border-zinc-200 pt-3">
          <span>Total:</span>

          <span className="text-[#6d60f6]">₦{total.toLocaleString()}</span>
        </div>

        <button
          className={`mt-4 w-full py-2 text-white rounded-lg hover:bg-[#6c60f6d7] ${
            selectedDelivery ? "bg-[#6d60f6]" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedDelivery}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
