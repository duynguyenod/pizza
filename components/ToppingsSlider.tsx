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
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <Header3 text="Choose up to" color='var(--purple-color)' /> <Header4 text="7 toppings" color='var(--purple-color)' /><br />
                <PreTitle text="Free 3 add-ons" />
            </div>
            <div className={styles.toppingCardList}>
                {toppings && toppings.map(({ name, price, icon, isSelected, isEnabled }) => <ToppingCard key={name} name={name} icon={icon} isSelected={isSelected} price={price} isEnabled={isEnabled} onToggleSelection={onChange} />)}
            </div>
        </div>
    </Card>
}

type ToppingCardProps = {
    name: PizzaTopping;
    price: number;
    icon: string;
    isSelected: boolean;
    isEnabled: boolean;
    onToggleSelection(name: PizzaTopping, isSelected: boolean): void;
}

const toppingCardStyle = {
    border: '0.5px solid var(--grey-color)',
    boxShadow: '0px 4px 15px rgba(218, 218, 229, 0.7)',
    marginLeft: '19px',
    marginBottom: '26px',
    borderRadius: '20px',
    height: '76px',
    minWidth: '231px',
    padding: '0 20px 0 7px',
    marginRight: '12px',
}

function ToppingCard({ name, price, icon, isSelected, isEnabled, onToggleSelection }: ToppingCardProps) {
    return <Card isTransparent={false} style={toppingCardStyle}>
        <div className={styles.toppingCardContainer}>
            <Image src={icon} width="74px" height="74px" alt={name} />
            <div>
                <BodyText text={name} color='var(--purple-color)' style={{ fontWeight: 'bold' }} /><br />
                <BodyText text={`+ $${price.toFixed(2)}`} color='var(--purple-color)' />
            </div>
            {isEnabled &&
                <div style={{ marginTop: '20px' }}>
                    <Image onClick={() => onToggleSelection(name, !isSelected)} src={isSelected ? '/assets/SelectedCheck.png' : '/assets/DefaultCheck.png'} width="20px" height="20px" alt="select" />
                </div>
            }
        </div>
    </Card>
}