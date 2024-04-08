import {
  getPurchaseOrders,
  getSubmitPurchaseOrder,
} from "@/api/purchaseOrders";
import { Button, Modal, Spin, Table } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

export default function PurchaseOrders() {
  const [orderItems, setOrderItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { mutate: mgetPurchaseOrders } = useMutation(getPurchaseOrders, {
    onSuccess: (data) => {
      setIsLoading(false);
      console.log("data on page load", data);
      data &&
        data.data &&
        data.data.data &&
        setOrderItems(data.data.data.items);
    },
    onError: (error) => {
      setIsLoading(false);
    },
  });

  const { mutate: mgetSubmitPurchaseOrder } = useMutation(
    getSubmitPurchaseOrder,
    {
      onSuccess: (data) => {
        console.log("data after submit", data);
      },
      onError: (error) => {},
    }
  );

  useEffect(() => {
    setIsLoading(true);
    mgetPurchaseOrders(page - 1);
  }, [page, mgetPurchaseOrders]);

  useEffect(() => {
    console.log("orderItems", orderItems);
  }, [orderItems]);

  const handleAction = (record: any) => {
    console.log("record data", record.status, record.id);
    // if (status != "COMPLETED") {
    mgetSubmitPurchaseOrder(record.id);
    setOpenSubmitModal(true);
    setModalData(record);
    // }
  };

  const tableColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Company Id",
      dataIndex: "companyId",
      key: "companyId",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Target Warehouse Id",
      dataIndex: "targetWarehouseId",
      key: "targetWarehouseId",
    },
    {
      title: "Target Warehouse",
      dataIndex: "targetWarehouse",
      key: "targetWarehouse",
    },
    {
      title: "Supplier Id",
      dataIndex: "supplierId",
      key: "supplierId",
    },
    {
      title: "Supplier",
      dataIndex: "supplier",
      key: "supplier",
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
      title: "Additional Taxes And Charges",
      dataIndex: "additionalTaxesAndCharges",
      key: "additionalTaxesAndCharges",
    },
    {
      title: "Additional Tax And ChargeItems",
      dataIndex: "additionalTaxAndChargeItems",
      key: "additionalTaxAndChargeItems",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Submitted By",
      dataIndex: "submittedBy",
      key: "submittedBy",
    },
    {
      title: "Order No",
      dataIndex: "orderNo",
      key: "orderNo",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
    },
    {
      title: "Is Delivered By Supplier",
      dataIndex: "isDeliveredBySupplier",
      key: "isDeliveredBySupplier",
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
      title: "Delivery By",
      dataIndex: "deliveryBy",
      key: "deliveryBy",
    },
    {
      title: "Action",
      dataIndex: "status",
      key: "action",
      render: (status: string, record: any) => (
        <>
          <button
            className={`${
              // status === "COMPLETED"
              false ? "bg-blue-500" : "bg-red-500"
            } p-2 rounded text-white`}
            disabled={false}
            onClick={() => handleAction(record)}
            // {status === "COMPLETED"}
          >
            {
              // status === "COMPLETED"
              false ? "Completed" : "Submit"
            }
          </button>
        </>
      ),
    },
  ];

  return (
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

          {orderItems && (
            <Table
              id="basic"
              rowKey="id"
              columns={tableColumns}
              dataSource={orderItems}
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
      {
        <Modal
          // title={modalValue}
          visible={openSubmitModal}
          style={{ width: "100%", height: "50%" }}
          centered={true}
          // onCancel={() => {}}
          width={"fit-content"}
          footer={null}
        ></Modal>
      }
    </div>
  );
}
