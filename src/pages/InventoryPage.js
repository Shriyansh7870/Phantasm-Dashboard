import React from "react";
import Layout from "../Component/Layout";
import InventorySummary from "../Component/InverterySummary";
import InventoryTable from "../Component/InvertyTable";

const InventoryPage = () => {
  const products = [
    {
      product: "iPhone 13 Pro",
      category: "Gadgets",
      price: "₦1,225,000.00",
      stock: 8,
      Image: "/images/phone.svg",
      discount: "₦0.00",
      total: "₦50,000.00",
      status: "Published",
    },
    {
      product: "iPhone 12 Pro",
      category: "Gadgets",
      price: "₦725,000.00",
      Image: "/images/phone.svg",
      stock: 12,
      discount: "₦0.00",
      total: "₦50,000.00",
      status: "Published",
    },
    {
      product: "Polo T-Shirt",
      category: "Fashion",
      price: "₦125,000.00",
      stock: 120,
      Image: "/images/shirt.svg",
      discount: "₦0.00",
      total: "₦50,000.00",
      status: "Unpublished",
    },
    {
      product: "Polo T-Shirt",
      category: "Fashion",
      price: "₦125,000.00",
      stock: "Out of Stock",
      Image: "/images/shirt.svg",
      discount: "₦0.00",
      total: "₦0.00",
      status: "Unpublished",
    },
    {
      product: "iPhone 13 Pro",
      category: "Gadgets",
      price: "₦1,225,000.00",
      stock: 8,
      discount: "₦0.00",
      Image: "/images/phone.svg",
      total: "₦50,000.00",
      status: "Published",
    },
    {
      product: "iPhone 12 Pro",
      category: "Gadgets",
      price: "₦725,000.00",
      stock: 12,
      discount: "₦0.00",
      total: "₦50,000.00",
      Image: "/images/phone.svg",
      status: "Published",
    },
    {
      product: "iPhone 13 Pro",
      category: "Gadgets",
      price: "₦1,225,000.00",
      stock: 8,
      discount: "₦0.00",
      total: "₦50,000.00",
      status: "Published",
      Image: "/images/phone.svg",
    },
    {
      product: "iPhone 12 Pro",
      category: "Gadgets",
      price: "₦725,000.00",
      stock: 12,
      discount: "₦0.00",
      total: "₦50,000.00",
      Image: "/images/phone.svg",
      status: "Published",
    },
    {
      product: "Polo T-Shirt",
      category: "Fashion",
      price: "₦125,000.00",
      stock: 120,
      discount: "₦0.00",
      total: "₦50,000.00",
      Image: "/images/shirt.svg",
      status: "Unpublished",
    },
  ];

  return (
    <Layout>
      <InventorySummary
        totalProducts={350}
        activeProducts={316}
        lowStockAlert={23}
        expiredProducts={3}
      />
      <div className="p-2">
        <InventoryTable products={products || []} />
      </div>
    </Layout>
  );
};

export default InventoryPage;
