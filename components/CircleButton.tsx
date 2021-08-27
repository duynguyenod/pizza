import { CSSProperties } from 'react';
import styles from '../styles/CircleButton.module.css';
type CircleButtonProps = {
    children?: JSX.Element,
    style?: CSSProperties;
    onClick?(): void;
}
export default function CircleButton({ children, style, onClick }: CircleButtonProps) {
    return <div onClick={onClick} className={styles.button} style={style}>
        {children}
    </div>
}