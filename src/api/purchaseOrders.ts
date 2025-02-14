import { message } from "antd";
import Axios from "axios";

const headers = {
  "X-Tenant-Info":
    "eyJpZCI6IjY1YzIyZWVlNmMwZjkzNmMzZWE0MWNkNiIsInNjb3BlcyI6WyJhZGRyZXNzOndyaXRlIiwiYWRkcmVzczpyZWFkIiwidGVuYW50OmFzc2V0OnByaWNlOnJlYWQiLCJ0ZW5hbnQ6YXNzZXQ6YnV5OmV4ZWN1dGUiLCJ0ZW5hbnQ6YXNzZXQ6c2VsbDpleGVjdXRlIiwidGVuYW50OmFzc2V0OmJ1eTpyZWFkIiwidGVuYW50OmFzc2V0OnNlbGw6cmVhZCIsImdvb2RfcmVjZWlwdDp3cml0ZSIsImdvb2RfcmVjZWlwdDp1cGRhdGUiLCJnb29kX3JlY2VpcHQ6ZGVsZXRlIiwiZ29vZF9yZWNlaXB0OnJlYWQiLCJwdXJjaGFzZV9pbnZvaWNlOndyaXRlIiwicHVyY2hhc2VfaW52b2ljZTp1cGRhdGUiLCJwdXJjaGFzZV9pbnZvaWNlOmRlbGV0ZSIsInB1cmNoYXNlX2ludm9pY2U6cmVhZCIsInB1cmNoYXNlX29yZGVyOndyaXRlIiwicHVyY2hhc2Vfb3JkZXI6dXBkYXRlIiwicHVyY2hhc2Vfb3JkZXI6ZGVsZXRlIiwicHVyY2hhc2Vfb3JkZXI6cmVhZCIsImNvbXBhbnk6d3JpdGUiLCJjb21wYW55OnVwZGF0ZSIsImNvbXBhbnk6ZGVsZXRlIiwiY29tcGFueTpyZWFkIiwicHJvZHVjdDpyZWFkIiwicHJvZHVjdDp3cml0ZSIsInByb2R1Y3Q6dXBkYXRlIiwicHJvZHVjdDpkZWxpdmVyeTpyZWFkIiwicHJvZHVjdDpkZWxpdmVyeTp1cGRhdGUiLCJwcm9kdWN0OmRlbGl2ZXJ5OmV4ZWN1dGUiLCJwcm9kdWN0OmRlbGl2ZXJ5OmRlbGV0ZSIsInVzZXI6dHJhbnNhY3Rpb246aW52b2ljZTpyZWFkIiwibWF0ZXJpYWw6d3JpdGUiLCJtYXRlcmlhbDpyZWFkIiwibWF0ZXJpYWw6dXBkYXRlIiwibWF0ZXJpYWw6ZGVsZXRlIiwic3RvY2tfbGVkZ2VyOnJlYWQiLCJzdXBwbGllcjpyZWFkIiwic3VwcGxpZXI6d3JpdGUiLCJzdXBwbGllcjpkZWxldGUiLCJzdXBwbGllcjp1cGRhdGUiLCJ0ZW5hbnQ6YXNzZXQ6d3JpdGUiLCJ0ZW5hbnQ6YXNzZXQ6dXBkYXRlIiwidGVuYW50OmFzc2V0OnJlYWQiLCJ0ZW5hbnQ6YXNzZXQ6bWFya3VwOnVwZGF0ZSIsInVzZXI6d3JpdGUiLCJ1c2VyOnJlYWQiLCJ1c2VyOmFzc2V0OnRyYW5zYWN0aW9uOnJlYWQiLCJ3YXJlaG91c2U6cmVhZCIsIndhcmVob3VzZTp3cml0ZSIsIndhcmVob3VzZTp1cGRhdGUiLCJ3YXJlaG91c2U6ZGVsZXRlIiwibWF0ZXJpYWxfdHlwZTp3cml0ZSIsIm1hdGVyaWFsX3R5cGU6cmVhZCIsIm1hdGVyaWFsX3R5cGU6dXBkYXRlIiwibWF0ZXJpYWxfdHlwZTpkZWxldGUiLCJtYXRlcmlhbF90cmFuc2Zlcl90eXBlOnJlYWQiLCJtYXRlcmlhbF90cmFuc2Zlcl90eXBlOndyaXRlIiwibWF0ZXJpYWxfdHJhbnNmZXJfdHlwZTpkZWxldGUiLCJtYXRlcmlhbF90cmFuc2Zlcl90eXBlOnVwZGF0ZSIsIm1hdGVyaWFsX3RyYW5zZmVyOnJlYWQiLCJtYXRlcmlhbF90cmFuc2Zlcjp3cml0ZSIsIm1hdGVyaWFsX3RyYW5zZmVyOmRlbGV0ZSIsIm1hdGVyaWFsX3RyYW5zZmVyOnVwZGF0ZSIsInJhY2s6d3JpdGUiLCJyYWNrOnJlYWQiLCJyYWNrOnVwZGF0ZSIsInJhY2s6ZGVsZXRlIiwidGF4X3RlbXBsYXRlOndyaXRlIiwidGF4X3RlbXBsYXRlOnJlYWQiLCJ0YXhfdGVtcGxhdGU6dXBkYXRlIiwidGF4X3RlbXBsYXRlOmRlbGV0ZSIsInNhbGVfb3JkZXI6d3JpdGUiLCJzYWxlX29yZGVyOnJlYWQiLCJzYWxlX29yZGVyOnVwZGF0ZSIsInNhbGVfb3JkZXI6ZGVsZXRlIiwic2FsZV9pbnZvaWNlOndyaXRlIiwic2FsZV9pbnZvaWNlOnJlYWQiLCJzYWxlX2ludm9pY2U6dXBkYXRlIiwic2FsZV9pbnZvaWNlOmRlbGV0ZSIsInRheF90ZW1wbGF0ZV9tYXBwaW5nOndyaXRlIiwidGF4X3RlbXBsYXRlX21hcHBpbmc6cmVhZCIsInRheF90ZW1wbGF0ZV9tYXBwaW5nOnVwZGF0ZSIsInRheF90ZW1wbGF0ZV9tYXBwaW5nOmRlbGV0ZSIsInRlbmFudF9tYXJnaW46cmVhZCIsInRlbmFudF9tYXJnaW46d3JpdGUiLCJ0ZW5hbnRfbWFyZ2luOnVwZGF0ZSIsInRlbmFudF9tYXJnaW46ZGVsZXRlIiwidGVuYW50X3Byb2ZpbGU6cmVhZCIsInRlbmFudF9wcm9maWxlOndyaXRlIiwidGVuYW50X3Byb2ZpbGU6dXBkYXRlIiwidGVuYW50X3Byb2ZpbGU6ZGVsZXRlIiwibWF0ZXJpYWw6YnV5OnByaWNlOnJlYWQiLCJtYXRlcmlhbDpidXk6ZXhlY3V0ZSIsIm1hdGVyaWFsOmJ1eTpyZWFkIiwibWF0ZXJpYWw6c2VsbDpwcmljZTpyZWFkIiwibWF0ZXJpYWw6c2VsbDpleGVjdXRlIiwibWF0ZXJpYWw6c2VsbDpleGVjdXRlIiwibWF0ZXJpYWw6c2VsbDpyZWFkIiwibWF0ZXJpYWxfcmF0ZV90ZW1wbGF0ZTp3cml0ZSIsIm1hdGVyaWFsX3JhdGVfdGVtcGxhdGU6cmVhZCIsIm1hdGVyaWFsX3JhdGVfdGVtcGxhdGU6ZGVsZXRlIiwibWF0ZXJpYWxfcmF0ZV90ZW1wbGF0ZTp1cGRhdGUiLCJ2ZW5kb3I6d3JpdGUiLCJ2ZW5kb3I6cmVhZCIsInZlbmRvcjp1cGRhdGUiLCJ2ZW5kb3I6ZGVsZXRlIiwidXNlcjp3cml0ZSIsInVzZXI6cmVhZCJdLCJhbGciOiJIUzI1NiJ9",
};

export async function getPurchaseOrders(page: Number) {
  try {
    const data = await Axios.get(
      `https://dev-svc.myjar.app/digigold-service/v1/api/purchaseOrder?pageNo=${page}&pageSize=10`,
      { headers }
    );

    return data;
  } catch (e: any) {
    console.log(e);
    message.error(e.response ? e.response.data.message : e.message);
  }
}

export async function getSubmitPurchaseOrder(id: string) {
  try {
    const data = await Axios.post(
      `https://dev-svc.myjar.app/digigold-service/v1/api/purchaseOrder/submit?id=${id}`,
      {},
      { headers }
    );
    console.log("purchase order data", data);
    return data;
  } catch (e: any) {
    console.log("purchase order error", e);
    message.error(e.response ? e.response.data.error : e.message);
  }
}

export async function getPurchaseInvoices(
  id: string,
  companyId: string,
  supplierId: string,
  page: number
) {
  try {
    const data = await Axios.get(
      `https://dev-svc.myjar.app/digigold-service/v1/api/purchaseInvoice?id=${id}&companyId=${companyId}&supplierId=${supplierId}&pageNo=${page}&pageSize=5`,
      { headers }
    );
    console.log("purchase order data", data);
    return data;
  } catch (e: any) {
    console.log("purchase order error", e);
    message.error(e.response ? e.response.data.error : e.message);
  }
}

export async function getLoginInfo() {
  try {
    const payload = {
      email: "ivaneshubham@gmail.com",
      password: "shubham@22",
    };
    const data = await Axios.post(
      `https://digigold-crm-staging/dashboard/v1/api/login`,
      payload
    );

    return data;
  } catch (e: any) {
    console.log(e);
    message.error(e.response ? e.response.data.message : e.message);
  }
}
