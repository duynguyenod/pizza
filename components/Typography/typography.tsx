import { CSSProperties } from 'react';
import styles from '../../styles/Typo.module.css'

type TypoProps = {
    text: string;
    color?: string;
    style?: CSSProperties;
    onClick?(): void;
}

export function Header1({ text, color, style }: TypoProps) {
    return <span className={styles.header1} style={{color: color ? color : 'white', ...style} }>
        {text}
    </span>;
}

export function Header2({ text, color, style }: TypoProps) {
    return <span className={styles.header2} style={{color: color ? color : 'white', ...style}}>
        {text}
    </span>;
}

export function Header3({ text, color, style }: TypoProps) {
    return <span className={styles.header3} style={{color: color ? color : 'white', ...style}}>
        {text}
    </span>;
}

export function Header4({ text, color, style }: TypoProps) {
    return <span className={styles.header4} style={{color: color ? color : 'white', ...style}}>
        {text}
    </span>;
}

export function PreTitle({ text, color, style }: TypoProps) {
    return <span className={styles.preTitle} style={{color: color ? color : `var(--purple-color)`, ...style}}>
        {text}
    </span>;
}

export function BodyText({ text, color, style }: TypoProps) {
    return <span className={styles.bodyText} style={{color: color ? color : `var(--purple-color)`, ...style}}>
        {text}
    </span>;
}

export function DefaultButtonText({ text, color, style, onClick }: TypoProps) {
    return <span onClick={onClick} className={styles.defaultButtonText}
    style={{color: color ? color : `var(--purple-color)`, ...style}}>
        {text}
    </span>;
}

export function SelectedButtonText({ text, color, style, onClick }: TypoProps) {
    return <span onClick={onClick} className={styles.selectedButtonText} style={{color: color ? color : `white`, ...style}}>
        {text}
    </span>;
}