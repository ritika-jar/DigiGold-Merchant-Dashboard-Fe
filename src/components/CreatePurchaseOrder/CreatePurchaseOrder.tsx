import { Button, Input } from "antd";
import { useState } from "react";

export default function CreatePurchaseOrder() {
  const [companyId, setCompanyId] = useState<string>("");
  const [targetWarehouseId, setTargetWarehouseId] = useState<string>("");
  const [supplierId, setSupplierId] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [materialCode, setMaterialCode] = useState<string>("");
  const [quantity, setQuantity] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [orderNo, setOrderNo] = useState<string>("");
  const [orderDate, setOrderDate] = useState<string>("");
  const [isDeliveredBySupplier, setIsDeliveredBySupplier] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center w-[90%] p-8 mx-auto gap-12 shadow-md rounded-2xl mb-4">
      <p className="text-xl text-[#5F38CD] font-bold">Create Purchase Order</p>
      <div className=" grid grid-cols-2 gap-x-16 gap-y-4">
        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Company Id</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder="Enter Company Id"
            onChange={(e) => setCompanyId(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Target Warehouse Id</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder="Enter Target Warehouse Id"
            onChange={(e) => setTargetWarehouseId(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Target Warehouse Id</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder="Enter Supplier Id"
            onChange={(e) => setSupplierId(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Material Code</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder="Enter Material Code"
            onChange={(e) => setMaterialCode(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Quantity</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder="Enter Quantity"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Rate</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder="Enter Rate"
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Order No.</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder="Enter Order No."
            onChange={(e) => setOrderNo(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Order Date</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder="Enter Order Date"
            onChange={(e) => setOrderDate(e.target.value)}
          />
        </div>
      </div>
      <Button className="flex justify-center items-center bg-[#5F38CD] text-white px-8 py-5 ">
        Create Purchase Order
      </Button>
    </div>
  );
}
