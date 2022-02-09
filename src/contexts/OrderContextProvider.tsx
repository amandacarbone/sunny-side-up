import { ReactNode, useState } from "react";
import { Item } from "../models/Item";
import OrderContext from "./OrderContext";

export default function OrderContextProvider(props: { children: ReactNode }) {
    
    const [orders, setOrders] = useState<Item[]>([]);

    function addItem(order: Item) {
        setOrders([...orders, order]);
    }

    function removeItem(id: string) {
        setOrders(orders.filter(o => o.id != id));
    }

    return (
        <OrderContext.Provider value={{orders, addItem, removeItem}}>
            {props.children}
        </OrderContext.Provider>
    );

}