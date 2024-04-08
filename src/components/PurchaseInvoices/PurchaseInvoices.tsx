import { getPurchaseInvoices } from "@/api/purchaseOrders";
import { Button, Input, Spin, Table } from "antd";
import { useState } from "react";
import { MutationFunction, useMutation } from "react-query";

export default function PurchaseInvoices() {
  const [id, setId] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);

  const mutatePurchaseInvoices: MutationFunction<
    any,
    { id: string; companyId: string; supplierId: string }
  > = ({ id, companyId, supplierId }) => {
    return getPurchaseInvoices(id, companyId, supplierId, 0);
  };

  const { mutate: mgetPurchaseInvoices } = useMutation(mutatePurchaseInvoices, {
    onSuccess: (data) => {
      console.log("purchase invoice data", data.data.data.items);
      data?.data?.data?.items && setInvoiceData(data?.data?.data?.items);
    },
    onError: (error) => {
      setIsLoading(false);
    },
  });

  const handleGetPurchaseInvoices = () => {
    if (id.length && companyId.length && supplierId.length) {
      mgetPurchaseInvoices({ id, companyId, supplierId });
    }
  };

  const tableColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Purchase Order Id",
      dataIndex: "purchaseOrderId",
      key: "purchaseOrderId",
    },
    {
      title: "Purchase Order Id",
      dataIndex: "purchaseOrderId",
      key: "purchaseOrderId",
    },
    {
      title: "Purchase Order",
      dataIndex: "purchaseOrder",
      key: "purchaseOrder",
    },
    {
      title: "Company Id",
      dataIndex: "companyId",
      key: "companyId",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Tax Added",
      dataIndex: "taxAdded",
      key: "taxAdded",
    },
    {
      title: "Tax Deducted",
      dataIndex: "taxDeducted",
      key: "taxDeducted",
    },
    {
      title: "Net Total",
      dataIndex: "netTotal",
      key: "netTotal",
    },
    {
      title: "Transaction Reference Number",
      dataIndex: "txnReferenceNumber",
      key: "txnReferenceNumber",
    },
    {
      title: "Payment Made At",
      dataIndex: "paymentMadeAt",
      key: "paymentMadeAt",
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Delivery Order No",
      dataIndex: "deliveryOrderNo",
      key: "deliveryOrderNo",
    },
    {
      title: "Delivery Order Date",
      dataIndex: "deliveryOrderDate",
      key: "deliveryOrderDate",
    },
    {
      title: "Is Paid",
      dataIndex: "isPaid",
      key: "isPaid",
      record: (record: any) => {
        <span>{record?.isPaid ? "True" : "False"}</span>;
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] p-8 mx-auto gap-4 shadow-md rounded-2xl mb-4">
        <div className="flex justify-center items-center w-[50%] gap-4">
          <p className="text-[#8a8a8a] font-bold ">Id</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder="Enter Id"
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Company Id</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder=" Enter Company Id"
            onChange={(e) => setCompanyId(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-[#8a8a8a] font-bold ">Supplier Id</p>
          <Input
            className="w-fit focus:border-[#5F38CD] hover:border-[#5F38CD] focus:ring-0"
            placeholder=" Enter Supplier Id"
            onChange={(e) => setSupplierId(e.target.value)}
          />
        </div>
        <Button
          className="flex justify-center items-center bg-[#5F38CD] text-white px-8 py-5"
          onClick={handleGetPurchaseInvoices}
        >
          Get Purchase Invoices
        </Button>
      </div>

      <div className="flex flex-col gap-4 min-w-full p-8">
        {isLoading ? (
          <Spin />
        ) : (
          <>
            {/* <Button
            className="flex w-fit justify-center items-center bg-[#5F38CD] text-white px-8 py-5"
            onClick={() => router.push("/create-purchase-order/")}
          >
            Create Purchase Order
          </Button> */}

            {invoiceData && (
              <Table
                id="basic"
                rowKey="id"
                columns={tableColumns}
                dataSource={invoiceData}
                expandable={{
                  expandedRowRender: (record) => (
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                      }}
                    ></div>
                  ),
                  onExpand: (expanded, record) => {
                    console.log("onExpand: ", record, expanded);
                  },
                }}
                scroll={{ x: 300 }}
                pagination={false}
                className="shadow-xl rounded-lg"
                rowClassName={(record: any, index: any) =>
                  record.status === "COMPLETED" ? "bg-[#E0E0E0]" : ""
                }
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
