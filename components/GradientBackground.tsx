import styles from '../styles/GradientBackground.module.css'

type GradientBackgroundProps = {
    height: number,
    children?: JSX.Element,
}

export default function GradientBackground({ children, height }: GradientBackgroundProps) {
    return <div className={styles.container} style={{height: height}}>
        {children}
    </div>

}