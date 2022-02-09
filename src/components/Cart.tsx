import { useContext } from "react";
import OrderContext from "../contexts/OrderContext";

export function Cart() {

    const { orders, addItem } = useContext(OrderContext);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {orders.map(order => <div key={order.id}>{order}</div>)}
        </div>
    );

}