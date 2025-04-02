'use client';

import Image from 'next/image';

export default function BuyNowSection() {
  return (
    <div className=" p-4 rounded-lg  mx-auto flex items-center justify-between">
      {/* Left Section */}
      <div className="flex flex-col gap-1 text-[#080445] text-sm">
        <p>Buy this product and receive it today</p>
        <div className="flex items-center gap-2 text-xs text-[#080445]">
          <Image src="/assets/icons/glogo.png" alt="Powered by Gookada" width={16} height={16} />
          <span>Powered by Gookada</span>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex items-end gap-2 w-1/2">
        <div className="flex flex-col w-full">
          <label className="text-sm text-[#080445]">Enter delivery address</label>
          <input
            type="text"
            placeholder="Where would you like to receive this item?"
            className="w-full px-4 py-2 border-0 bg-[#fff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d60f6] placeholder:text-[12px]"
          />
        </div>
        <button className="w-[100px] px-2 py-2 bg-[#6d60f6] text-white rounded-lg hover:bg-[#6d60f6] transition">Buy now</button>
      </div>
    </div>
  );
}
