import { CSSProperties } from "react";
import Image from 'next/image'
import { PizzaCrust, PizzaSize, Topping } from "../types";

type PizzaProps = {
  size: PizzaSize;
  crust: PizzaCrust;
  toppings?: Topping[];
  style?: CSSProperties;
}

export default function Pizza({ size, crust, toppings, style }: PizzaProps) {
  const getPizzaRenderSize = () => {
    switch (size) {
      case 'Large':
        return 286;
      case 'Medium':
        return 240;
      default:
        return 216;
    }
  }
  const getPizzaOuterCircleSize = () => {
    switch (size) {
      case 'Large':
        return 345;
      case 'Medium':
        return 325;
      default:
        return 304;
    }
  }

  const getPizzaInnerCircleSize = () => {
    switch (size) {
      case 'Large':
        return 312;
      case 'Medium':
        return 275;
      default:
        return 250;
    }
  }

  const getPizzaImage = () => {
    let pizzaImg = "rawPizza.png";
    if(crust === "Thick") {
      pizzaImg = "thickRawPizza.png"
    }
    toppings && toppings.forEach(({name}) => {
      switch(name){
        case "Pepperoni":
          pizzaImg = 'pepperoniPizza.png';
          break;
        case "Mushroom":
          pizzaImg = 'mushroomPizza.png';
          break;
        case "Black Olives":
          pizzaImg = 'olivePizza.png';
          break;
        default:
          break;
      }
    })
    return `/assets/${pizzaImg}`;
  }
  return <div style={{ zIndex: 3, display: 'flex', alignItems: 'center', margin: '-55% auto 0 auto', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '50%', position: 'relative', width: `${getPizzaOuterCircleSize()}px`, height: `${getPizzaOuterCircleSize()}px` }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', boxShadow: '0px 4px 15px rgba(218, 218, 229, 0.2)', backgroundColor: 'white', borderRadius: '50%', width: `${getPizzaInnerCircleSize()}px`, height: `${getPizzaInnerCircleSize()}px` }}>
      <Image src={getPizzaImage()} width={getPizzaRenderSize()} height={getPizzaRenderSize()} alt="Pizza" />
    </div>
  </div>
}