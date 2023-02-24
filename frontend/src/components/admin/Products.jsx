import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        Products
        <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create new Product
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Products;
