import { useState } from "react";
import styled from "styled-components";

const CreateProduct = () => {
  const [productImg, setProductImg] = useState("");
  console.log(productImg)
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  return (
    <StyledCreateProduct>
      <StyledForm>
        <h3>Create a new Product</h3>
        <input
          type="file"
          accept="image/"
          onChange={handleProductImageUpload}
        />
      </StyledForm>
      <ImagePreview>
        {productImg? <>
        <img src={productImg} alt="product-image"/></> : <p>Image preview will appear here!</p>}
      </ImagePreview>
    </StyledCreateProduct>
  );
};

export default CreateProduct;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
    max-width: 300px;
    margin-top: 2rem;
    select, input{
        padding: 7px;
        min-height: 30px;
        outline: none;
        border: 1px solid rgb(182, 182, 182)
        border-radius: 5px;
        margin: 0.3rem 0;
    &:focus{
        color: rgb(95, 95, 95)
    }
}
select{
    color: rgb(95, 95, 95);
}
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
  }
`;
