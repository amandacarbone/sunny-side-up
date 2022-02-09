import { useContext, useState } from "react";
import OrderContext from "../contexts/OrderContext";
import { menu } from "./MenuList";

export function MenuItem() {

    const [menuItems, setMenuItems] = useState(menu);

    return (
        <div className="menu">
            {menuItems.map(menuItem =>
                <ul key={menuItem.id}>
                    <li>{menuItem.name}</li>
                    <li>{menuItem.description}</li>
                    <li>Calories: {menuItem.calories}</li>
                    <li>Vegetarian: {menuItem.vegetarian}</li>
                    <li>${menuItem.price}</li>
                    <button>Add to Order</button>
                </ul>)}
        </div>
    );

}