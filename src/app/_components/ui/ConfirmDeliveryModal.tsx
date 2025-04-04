import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface ConfirmDeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeliveryModal: React.FC<ConfirmDeliveryModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000066] bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        {/* Close button */}
        <button className="absolute top-3 right-3" onClick={onClose}>
          <X className="w-5 h-5" />
        </button>

       {!isSuccess ? <div className="w-full">
          {/* Title */}
          <h2 className="text-lg font-semibold">Confirm delivery</h2>
          <p className="text-[13px] text-gray-600 mt-2">
            Kindly confirm that you have received your item(s) in good condition.
          </p>
          {/* Checkbox */}
          <div className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              id="confirm-check"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="confirm-check" className="text-[15px] text-[#111]">
              I received what I ordered in good condition. Please proceed to pay
              the seller.
            </label>
          </div>
          {/* Confirm Button */}
          <button
            className={`w-full mt-4 py-2 rounded-md text-white font-semibold ${
              isChecked
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isChecked}
            onClick={() => setIsSuccess(true)}
          >
            Confirm
          </button>
        </div>:
        
           <div className="flex flex-col  items-center  space-y-6 text-center w-full">
          {/* Title */}
          <h2 className="text-lg font-semibold">Success</h2>
          <Image src={'/assets/icons/success.png'} alt="succes" width={700} height={700} className="w-fit"/>
         
          <p className="text-[13px] text-[#2C353CB2]">Thank you for your patronage. We hope you enjoy your item(s)</p>
          {/* Confirm Button */}
          <button
            className={`w-full mt-4 py-2 rounded-md text-[12px]  text-white font-semibold ${
              isChecked
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isChecked}
            onClick={onConfirm}
          >
            Leave a review
          </button>
          <p className="text-[12px] text-[#6D60F6]">Continue shopping</p>
        </div>
        }
      </div>
    </div>
  );
};

export default ConfirmDeliveryModal;
