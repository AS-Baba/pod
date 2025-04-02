'use client';

import { Users, Eye } from 'lucide-react';


export default function StockStatus() {
  const totalStock = 200;
  const purchased = 181;
  const viewing = 7;
  const remainingStock = totalStock - purchased;
  const progress = (purchased / totalStock) * 100;

  return (
    <div className=" py-4 rounded-lg max-w-lg mx-auto">
      <div className="flex justify-between text-black font-medium mb-2">
        <span>{totalStock} pcs restocked</span>
        <span>{remainingStock} pcs left</span>
      </div>
      
      <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div className="h-full bg-[#6d60f6]" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className="flex justify-between items-center text-gray-700 text-[8px] lg:text-[10px] mt-3 max-sm:space-x-2">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{purchased} people have purchased this item</span>
        </div>
        <span className="text-gray-400">|</span>
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span>{viewing} people are currently viewing this item</span>
        </div>
      </div>
    </div>
  );
}
