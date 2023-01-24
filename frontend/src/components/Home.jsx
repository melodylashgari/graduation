import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../slices/cartSlice";

import { useGetAllProductsQuery } from "../slices/productsApi";

const Home = () => {
  const {items: data, status } = useSelector((state) => state.products);
  
  const dispatch = useDispatch();

  // const { data, error, isLoading } = useGetAllProductsQuery();
 // console.log("Api", isLoading)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

   return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product._id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image?.url} alt={product.name} />
                  <div className="details">
                    <span>{product.description}</span>
                  </div>
                    <span className="price">${product.price}</span>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
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
