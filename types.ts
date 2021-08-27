export type AddressType = {
    type: 'Home' | 'Work' | 'Other' | "CurrentLocation";
    name: string;
    address: string;
}

export type PizzaSize = "Small" | "Medium" | "Large";
export type PizzaCrust = "Thin" | "Thick";
export type PizzaTopping = "Pepperoni" | "Mushroom" | "Black Olives" | "Onions" | "Bacon" | "Cheese" | "Peppers" | "Pineapple" | "Sausages" | "Spinach";
export type Topping = {
    name: PizzaTopping;
    price: number;
    icon: string;
    isSelected: boolean;
  }