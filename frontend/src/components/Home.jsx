import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../slices/cartSlice";
import styled from "styled-components";
import background from "./assets/hero.jpeg";

const Home = () => {
  const {items: data, status } = useSelector((state) => state.products);
  
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

   return (
    <div className="home-container">
      {status === "success" ? (
        <>
        <Hero>
        <h1>Welcome to Studio Anahita</h1>
        </Hero>
        <Products>
          <h2>New Arrivals</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product._id} className="product">
                  <h3>{product?.name}</h3>
                  <img src={product.image?.url} alt={product.name} />
                  <div className="details">
                    <span>{product?.description}</span>
                  </div>
                    <span className="price">{product?.price} SEK</span>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
          </Products>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};
export default Home;

const Hero = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
margin: auto;
padding: 4em 0;
text-align: center;
border-bottom: 1px solid #b4b4b4;
h1{
  padding: 0 2em;
  font-weight: 400;
  font-size: 48px;
}
`

const Products = styled.div`
margin-top: 4em;
`