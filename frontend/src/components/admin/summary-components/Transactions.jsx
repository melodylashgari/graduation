import styled from "styled-components"
import { useState, useEffect } from "react";
import { setHeaders, url } from "../../../slices/api";
import axios from "axios";
import moment from "moment";

const Transactions = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
          try {
            const res = await axios.get(`${url}/orders/?new=true`, setHeaders());
            setOrders(res.data);
          } catch (err) {
            console.log(err);
        }
        setIsLoading(false)
        }
        fetchData()
      }, []);

    return ( 
        <StyledTransactions>
            {isLoading ? (
                <p>Transactions loading...</p>
            ) : (
                <>
                <h3>Latest Transations</h3>
                {
                    orders?.map((order, index) => <Transaction key={index}>
                        <p>{order.shipping.name}</p>
                        <p>{(order.total / 100).toLocaleString()} kr</p>
                        <p>{moment(order.createdAt).fromNow()}</p>
                    </Transaction>)
                }
                </>
            )}
        </StyledTransactions>
     );
}
 
export default Transactions;

const StyledTransactions = styled.div`
background: rgb(229, 213, 213);
color: black;
padding: 1rem;
border-radius: 5px;
`;

const Transaction = styled.div`
display: flex;
font-size: 14px;
margin-top: 1rem;
padding: 0.5rem;
border-radius: 3px;
background: rgba(216, 192, 192);
p{
    flex: 1;
}
&:nth-child(even){
    background: rgb(204, 165, 165);
}
`;