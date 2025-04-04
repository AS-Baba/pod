import { CheckCircle, Circle } from "lucide-react";
import { useState } from "react";
import ConfirmDeliveryModal from "./ui/ConfirmDeliveryModal";

interface OrderTrackingProps {
  orderId: string;
  product: {
    name: string;
    price: string;
    size: string;
    image: string;
  };
  address: string;
  phone: string;
  estimatedTime: string;
  status: "placed" | "received" | "shipped" | "delivered";
}

const OrderTracking: React.FC<OrderTrackingProps> = ({
  orderId,
  product,
  address,
  phone,
  estimatedTime,
  status,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusSteps = ["placed", "received", "shipped", "delivered"];

  return (
    <div className=" w-full">
      <div className="max-w-xl  p-6 bg-white  rounded-lg">
        <div className="flex justify-between items-center">
          <p className="text-sm text-[#111]">Order #{orderId}</p>
          {/* Confirm button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className=" bg-[#6D60F6] text-[10px] md:text-[13px] text-white p-2 rounded-md"
          >
            I have received my order
          </button>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 rounded-md"
          />
          <div>
            <h3 className="font-semibold text-[14px] md:text-lg">
              {product.name}
            </h3>
            <p className="text-[#111]">{product.price}</p>
            <p className="text-gray-500">Size: {product.size}</p>
          </div>
        </div>
        <div className="mt-4 text-[12px] text-[#111]">
          <p>
            <span className=" text-gray-500 font-semibold">
              Delivery address:
            </span>{" "}
            {address}
          </p>
          <p>
            <span className="text-gray-500 font-semibold">
              Delivery phone no:
            </span>{" "}
            {phone}
          </p>
          <p>
            <span className="text-gray-500 font-semibold">
              Estimated delivery time:
            </span>{" "}
            {estimatedTime}
          </p>
        </div>
        {/* Order progress tracker */}
        <div className="flex items-center justify-between mt-6">
          {statusSteps.map((step, index) => (
            <div key={step} className="flex flex-col items-center text-xs">
              {statusSteps.indexOf(status) >= index ? (
                <CheckCircle className="text-green-500 w-5 h-5" />
              ) : (
                <Circle className="text-gray-300 w-5 h-5" />
              )}
              <p className="mt-1 text-gray-600">
                {step.charAt(0).toUpperCase() + step.slice(1)}
              </p>
            </div>
          ))}
        </div>

        {/* Refresh notice */}
        <p className="mt-3 text-xs text-gray-500 bg-gray-100 p-2 rounded-md">
          NB: Refresh page to see updated delivery status.
        </p>
      </div>
        <ConfirmDeliveryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          console.log("Order confirmed!");
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default OrderTracking;
