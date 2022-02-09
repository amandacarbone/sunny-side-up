import { createContext } from "react";
import { Item } from "../models/Item";

interface OrderContext {
    orders: Item[];
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
}

const defaultValue: OrderContext = {
    orders: [],
    addItem: () => {},
    removeItem: () => {}
}

const OrderContext = createContext(defaultValue);
export default OrderContext;