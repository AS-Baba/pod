"use client";

import { AlertTriangle, Copy, XCircle } from "lucide-react";
import { useState } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bankName: string;
  accountNumber: string;
  amount: string;
  reference: string;
  onConfirm: () => void;

}

export default function PaymentModal({
  isOpen,
  onClose,
  bankName,
  accountNumber,
  amount,
  reference,
  onConfirm,
}: PaymentModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000066] bg-opacity-50 z-50 px-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center  pb-2">
          <h2 className="text-lg font-semibold">Payment</h2>
          <button
            onClick={onClose}
            className=" text-gray-500 hover:text-gray-700  "
          >
            <XCircle size={24} className="text-gray-600" />
          </button>
        </div>

        <p className="text-[12px] text-gray-600 mt-4">
          Please pay to the below account
        </p>

        <div className="mt-4 space-y-3 text-sm">
          <PaymentDetail label="Bank name" value={bankName} />
          <PaymentDetail
            label="Account number"
            value={accountNumber}
            copy={() => copyToClipboard(accountNumber, "account")}
            copied={copied === "account"}
          />
          <PaymentDetail
            label="Amount"
            value={amount}
            copy={() => copyToClipboard(amount, "amount")}
            copied={copied === "amount"}
          />
          <PaymentDetail
            label="Reference"
            value={reference}
            copy={() => copyToClipboard(reference, "reference")}
            copied={copied === "reference"}
          />
        </div>

        <div className="flex items-baseline bg-gray-100 p-3 mt-4 text-xs text-[#111] rounded-lg">
          <div className="flex mt-0">
            <AlertTriangle size={50} className="inline mr-2  h-[25px]" />
            Your payment will not be given to the seller until you confirm your
            order. If order is not confirmed within 24 hours, payment will be
            sent to the seller.
          </div>
        </div>

        <button
          onClick={onConfirm} 
          className="w-full bg-[#6d60f6] text-white py-2 mt-4 rounded-lg hover:bg-[#5c50d4] transition"
        >
          I have sent the money
        </button>
      </div>
    </div>
  );
}

function PaymentDetail({
  label,
  value,
  copy,
  copied,
}: {
  label: string;
  value: string;
  copy?: () => void;
  copied?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-[12px] text-gray-500">{label}</p>
        <p className="text-[13px] font-medium">{value}</p>
      </div>
      {copy && (
        <button
          onClick={copy}
          className="bg-[#F6F5FF] text-blue-500 text-xs hover:underline flex gap-1 items-center p-2 rounded-md"
        >
          <Copy size={16} className="inline" />

          {copied ? "Copied!" : "Copy"}
        </button>
      )}
    </div>
  );
}
