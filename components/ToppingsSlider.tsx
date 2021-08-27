import { CSSProperties } from "react"
import styles from '../styles/ToppingsSlider.module.css'
import { Header3, Header4, BodyText, PreTitle } from './Typography';
import Card from './Card'
import Image from 'next/image'
import { PizzaTopping, Topping } from "../types";

type ToppingsSliderProps = {
    toppings: Topping[];
    style?: CSSProperties;
    onChange(name: PizzaTopping, isSelected: boolean): void;
}



export default function ToppingsSlider({ toppings, style, onChange }: ToppingsSliderProps) {
    return <Card isTransparent={false} style={style}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ marginBottom: '30px', textAlign: "center" }}>
                <Header3 text="Choose up to" color='var(--purple-color)' /> <Header4 text="7 toppings" color='var(--purple-color)' /><br/>
                <PreTitle text="Free 3 add-ons"/>
            </div>
            <div className={styles.toppingCardList} style={{ display: 'flex', overflow: 'auto', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100%' }}>
                {toppings && toppings.map(({ name, price, icon, isSelected }) => <ToppingCard key={name} name={name} icon={icon} isSelected={isSelected} price={price} onToggleSelection={onChange} />)}
            </div>
        </div>
    </Card>
}

type ToppingCardProps = {
    name: PizzaTopping;
    price: number;
    icon: string;
    isSelected: boolean;
    onToggleSelection(name: PizzaTopping, isSelected: boolean): void;
}
function ToppingCard({ name, price, icon, isSelected, onToggleSelection }: ToppingCardProps) {
    return <Card isTransparent={false} style={{
        border: '0.5px solid #DADAE5', boxSizing: 'border-box',
        boxShadow: '0px 4px 15px rgba(218, 218, 229, 0.7)', marginLeft: '19px', marginBottom: '26px', borderRadius: '20px', height: '76px', minWidth: '231px', padding: '0 20px 0 7px', marginRight: '12px'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Image src={icon} width="74px" height="74px" alt={name} />
            <div>
                <BodyText text={name} color='var(--purple-color)' style={{ fontWeight: 'bold' }} /><br />
                <BodyText text={`+ $${price.toFixed(2)}`} color='var(--purple-color)' />
            </div>
            <div style={{marginTop: '20px'}}>
                <Image onClick={() => onToggleSelection(name, !isSelected)} src={isSelected? '/assets/SelectedCheck.png':'/assets/DefaultCheck.png'} width="20px" height="20px" alt="select"/>
            </div>
        </div>
    </Card>
}