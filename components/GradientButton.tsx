import { CSSProperties } from 'react';
import styles from '../styles/GradientButton.module.css';
type GradientButtonProps = {
    children?: JSX.Element,
    style?: CSSProperties;
    onClick?(): void;
}
export default function GradientButton({ children, style, onClick }: GradientButtonProps) {
    return <div onClick={onClick} className={styles.button} style={style}>
        {children}
    </div>
}