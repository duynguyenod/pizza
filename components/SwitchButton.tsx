import styles from '../styles/SwitchButton.module.css'

export default function SwitchButton() {
    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
        </label>
    );
}
