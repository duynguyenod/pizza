export type AddressType = {
    type: 'Home' | 'Work' | 'Other' | "CurrentLocation";
    name: string;
    address: string;
}

export type PizzaSize = "Small" | "Medium" | "Large" | undefined;
export type PizzaCrust = "Thin" | "Thick" | undefined;
export type PizzaTopping = "Pepperoni" | "Mushroom" | "Black Olives" | "Onions" | "Bacon" | "Cheese" | "Peppers" | "Pineapple" | "Sausages" | "Spinach";
