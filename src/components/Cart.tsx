import { useContext } from "react";
import OrderContext from "../contexts/OrderContext";

export function Cart() {

    const { orders, removeItem } = useContext(OrderContext);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {orders.map(order =>
                <ul key={order.id}>
                    <li>{order.name}</li>
                    <li>${order.price}</li>
                </ul>)}
        </div>
    );

}