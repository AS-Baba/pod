import Image from "next/image";

export default function ProductDetails() {
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
          <span className="text-[#080445] text-[12px] cursor-pointer">Shop thanau store home {'>>'} New balance crocs</span>
        </div>
      </div>
    </>
  );
}
