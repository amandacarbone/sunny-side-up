import { useContext, useState } from "react";
import SlidingPane from "react-sliding-pane";
import OrderContext from "../contexts/OrderContext";
import { Cart } from "./Cart";
import "../styles/Cart.css";
import "react-sliding-pane/dist/react-sliding-pane.css";

export function Header() {

    const [showCart, setShowCart] = useState({
        isPaneOpen: false,
    });

    const { orders, addItem } = useContext(OrderContext);

    return (
        <div className="header">
            <h1>Sunny Side Up</h1>
            <button className="material-icons" onClick={() => setShowCart({ isPaneOpen: true })}>shopping_cart</button>
            <SlidingPane
            className="Cart"
            isOpen={showCart.isPaneOpen}
            from="right"
            onRequestClose={() => setShowCart({ isPaneOpen: false })}>
            {showCart && <Cart></Cart>}
            </SlidingPane>
        </div>
    );

}