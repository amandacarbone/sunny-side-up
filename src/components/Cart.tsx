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
            <h2>Order:</h2>
            {orders.map(order =>
                <ul key={order.id}>
                    <li>{order.name} - ${order.price}</li>
                    <button className={showRemoveButton() === true ? "material-icons" : "hide"} 
                    onClick={() => removeItem(order.id)}>cancel</button>
                </ul>)}
            <h2>Total:</h2>
        </div>
    );

}