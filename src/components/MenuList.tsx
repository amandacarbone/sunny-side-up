import { useContext, useState } from "react";
import OrderContext from "../contexts/OrderContext";
import { Item } from "../models/Item";
import { MenuItem } from "./MenuItem";

const menu = [
    {
        id: "abc123",
        name: "Chicken and Waffles",
        description: "Fluffy waffles topped with lightly breaded chicken and maple syrup.",
        calories: 1100,
        price: 7.50,
        vegetarian: false,
    },
    {
        id: "abc124",
        name: "Eggs Benedict",
        description: "English muffin, each topped with Canadian bacon, a poached egg, and hollandaise sauce.",
        calories: 550,
        price: 6.75,
        vegetarian: false,
    },
    {
        id: "abc125",
        name: "Avocado Toast",
        description: "Smashed avocado, cojita cheese, shaved veg, cilantro, green chili, watercress.",
        calories: 640,
        price: 10.75,
        vegetarian: true,
    },
    {
        id: "abc126",
        name: "Beans on Toast",
        description: "Roasted mushrooms, poached egg, sweet peppers, pistachios, cashew butter.",
        calories: 800,
        price: 10.00,
        vegetarian: false,
    },
    {
        id: "abc127",
        name: "Hash Wrap",
        description: "Potato hash, smoked pork belly, egg, kale salad, bagna cauda sauce.",
        calories: 875,
        price: 10.00,
        vegetarian: false,
    },
    {
        id: "abc128",
        name: "Cinnamon Roll",
        description: "Freshly baked rolls made from scratch topped with vanilla frosting.",
        calories: 970,
        price: 4.50,
        vegetarian: true,
    },
    {
        id: "abc129",
        name: "Lox Bagel",
        description: "Smoked salmon, cream cheese and capers on top of a freshly baked sesame seed bagel.",
        calories: 1050,
        price: 8.50,
        vegetarian: false, 
    },
];

export function MenuList() {

    return(
        <div>
            <MenuItem items={menu}></MenuItem>
        </div>
    );

}