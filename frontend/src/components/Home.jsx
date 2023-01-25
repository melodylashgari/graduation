import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../slices/cartSlice";

import { useGetAllProductsQuery } from "../slices/productsApi";

const Home = () => {
  const {items: products, status } = useSelector((state) => state.products);
  
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map(product => <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />            
            <div className="details">
              <span>{product.description}</span>
            </div>
            <span className="price">{product.price} SEK</span>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div> )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
