import { CSSProperties, useState } from "react"
import { Header3, Header4, DefaultButtonText, SelectedButtonText } from './Typography';
import GradientButton from './GradientButton'
import Card from './Card'
import Image from 'next/image'
import { PizzaTopping } from "../types";

type ToppingsSliderProps = {
    style?: CSSProperties;
    onChange(name: PizzaTopping, isSelected: boolean): void;
}

type Topping = {
    name: PizzaTopping;
    price: number;
    icon: string;
    isSelected: boolean;
}

const toppings: Topping[] = [
    {
        name: "Pepperoni",
        price: 0.00,
        icon: "/assets/toppings/pepperoni.png",
        isSelected: false
    },
    {
        name: "Mushroom",
        price: 0.00,
        icon: "/assets/toppings/mushroom.png",
        isSelected: false
    },
    {
        name: "Black Olives",
        price: 0.00,
        icon: "/assets/toppings/oviles.png",
        isSelected: false
    },
    {
        name: "Onions",
        price: 0.00,
        icon: "/assets/toppings/onion.png",
        isSelected: false
    },
    {
        name: "Peppers",
        price: 0.00,
        icon: "/assets/toppings/peppers.png",
        isSelected: false
    },
    {
        name: "Pineapple",
        price: 0.00,
        icon: "/assets/toppings/pineapple.png",
        isSelected: false
    },
    {
        name: "Sausages",
        price: 0.00,
        icon: "/assets/toppings/sausages.png",
        isSelected: false
    },
    {
        name: "Spinach",
        price: 0.00,
        icon: "/assets/toppings/spinach.png",
        isSelected: false
    },
    {
        name: "Bacon",
        price: 0.00,
        icon: "/assets/toppings/bacon.png",
        isSelected: false
    },
    {
        name: "Cheese",
        price: 0.00,
        icon: "/assets/toppings/cheese.png",
        isSelected: false
    },
]

export default function ToppingsSlider({ style, onChange }: ToppingsSliderProps) {
    const [selected, setSelected] = useState(0);
    return <Card isTransparent={false} style={{ margin: '20% 20px 0 20px', paddingTop: '25px', ...style }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ marginBottom: '30px' }}>
                <Header3 text="Choose your" color='var(--purple-color)' /> <Header4 text="size" color='var(--purple-color)' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden', maxWidth: '100%' }}>
                {toppings && toppings.map(({name, price, icon, isSelected}) => <ToppingCard key={name} name={name} icon={icon} isSelected={isSelected} price={price} onToggleSelection={onChange}/>)}
                
            </div>
        </div>
    </Card>
}

function ToppingCard({name, price, icon, isSelected, onToggleSelection}) {
    return <Card isTransparent={false} style={{border: '0.5px solid #DADAE5',boxSizing: 'border-box',
    boxShadow: '0px 4px 15px rgba(218, 218, 229, 0.7)', marginLeft: '19px', marginBottom: '26px', borderRadius: '20px', height:'76px', minWidth:'231px', padding: '0 20px 0 7px', marginRight: '12px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <Image src={icon} width="74px" height="74px" alt={name}/>
        <div>{name}</div>
        <div>{isSelected}</div>
        </div>
    </Card>
}