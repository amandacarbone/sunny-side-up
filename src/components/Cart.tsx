import { useContext } from "react";
import OrderContext from "../contexts/OrderContext";

export function Cart() {

    const { orders, removeItem } = useContext(OrderContext);

    function showRemoveButton() {
        let foundItem = orders.find((item) => item.id)
        if(foundItem) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="cart">
            <h2>Cart</h2>
            {orders.map(order =>
                <ul key={order.id}>
                    <li>{order.name}</li>
                    <li>${order.price}</li>
                    <button className={showRemoveButton() === true ? "show" : "hide"} 
                    onClick={() => removeItem(order.id)}>Remove</button>
                </ul>)}
        </div>
    );

}