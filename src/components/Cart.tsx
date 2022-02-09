import { useContext } from "react";
import OrderContext from "../contexts/OrderContext";

export function Cart() {

    const { orders } = useContext(OrderContext);

    return (
        <div className="cart">
            <h2>Cart</h2>
        </div>
    );

}