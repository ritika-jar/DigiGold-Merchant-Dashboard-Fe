import { message } from "antd";
import Axios from "axios";

export async function getLoginInfo(payload: any) {
  try {
    const data = await Axios.post(
      `http://localhost:8081/tenant-auth-service/v1/api/auth/login`,
      payload,
      {}
    );

    return data;
  } catch (e: any) {
    console.log(e);
    message.error(e.response ? e.response.data.message : e.message);
  }
}
