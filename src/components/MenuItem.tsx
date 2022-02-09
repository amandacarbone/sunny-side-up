import { useContext, useState } from "react";
import OrderContext from "../contexts/OrderContext";
import { Item } from "../models/Item";

export function MenuItem(props: { items: Item[] }) {

    const { addItem } = useContext(OrderContext);

    return (
        <div className="menu">
            {props.items.map(item =>
                <ul key={item.id}>
                    <li>{item.name}</li>
                    <li>{item.description}</li>
                    <li>Calories: {item.calories}</li>
                    <li>Vegetarian: {item.vegetarian ? "Yes" : "No"}</li>
                    <li>${item.price}</li>
                    <button onClick={() => addItem(item)}>Add to Order</button>
                </ul>)}
        </div>
    );

}