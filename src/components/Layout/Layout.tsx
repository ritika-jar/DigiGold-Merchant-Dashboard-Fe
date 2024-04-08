import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
type LayoutProps = { children: any };

export default function DashboardLayout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  return (
    <Layout className="min-h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        width="250"
        style={{
          backgroundColor: "#5F38CD09",
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
        }}
      >
        <div
          className="logo"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "40px",
            marginBottom: "15px",
          }}
        />
        <Menu
          theme="light"
          mode="inline"
          className="bg-[#5F38CD00]"
          //   defaultSelectedKeys={[history.location.pathname]}
          defaultOpenKeys={["user-submenu"]}
        >
          <Menu.Item
            key="login"
            onClick={() => router.push("/dashboard/")}
            className="hover:bg-[#5F38CD10]"
          >
            <span className="nav-text hover:bg-[#5F38CD10]">Overview</span>
          </Menu.Item>
          <Menu.Item
            key="login"
            onClick={() => router.push("/purchase-orders/")}
          >
            <span className="nav-text">Purchase Orders</span>
          </Menu.Item>
          <Menu.Item
            key="login"
            onClick={() => router.push("/create-purchase-order/")}
          >
            <span className="nav-text">Create Purchase Order</span>
          </Menu.Item>
          <Menu.Item
            key="login"
            onClick={() => router.push("/purchase-invoices/")}
          >
            <span className="nav-text">Purchase Invoices</span>
          </Menu.Item>
          <Menu.Item
            key="login"
            onClick={() => router.push("/create-purchase-invoice/")}
          >
            <span className="nav-text">Create Purchase Invoice</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        style={{
          backgroundColor: "#fcfcfc",
        }}
      >
        <Header className="bg-[#fcfcfc]" style={{ padding: 0 }}></Header>
        {children}
        <Footer style={{ backgroundColor: "#fcfcfc", textAlign: "center" }}>
          myjar.app © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}
