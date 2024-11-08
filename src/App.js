import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/addProduct";
import InventoryPage from "./pages/InventoryPage";
import Layout from "./Component/Layout";
import ProductDashboard from "./pages/viewInventory";
import { FormDataProvider } from "./context/productContext";


function App() {
  return (
    <FormDataProvider>
      {" "}
      {/* Wrap your routes with FormDataProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<InventoryPage />} />
          <Route
            path="/addProduct"
            element={
              <Layout>
                <AddProduct />
              </Layout>
            }
          />
          <Route
            path="/productDetails"
            element={
              <Layout>
                <ProductDashboard />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </FormDataProvider>
  );
}

export default App;
