import { PizzaCrust, PizzaSize } from "./types";

export function getSizePrice(size: PizzaSize) {
    switch (size) {
        case "Small":
            return 8;
        case "Medium":
            return 10;
        case "Large":
            return 12;
    }
}

export function getCrustPrice(crust: PizzaCrust) {
    if(crust = "Thick") {
        return 4;
    }
    return 0;
}