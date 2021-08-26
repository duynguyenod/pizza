import { CSSProperties } from 'react'
import styles from '../styles/Card.module.css'
type CardProps = {
    isTransparent: boolean,
    children?: JSX.Element,
    style?: CSSProperties;
    onClick?(): void;
}

export default function Card({ isTransparent, children, style, onClick }: CardProps) {
    return <div onClick={onClick} className={`${styles.container} ${isTransparent? 'transparentBg':'boxShadowBg'}`} style={style}>
        {children}
    </div>
}