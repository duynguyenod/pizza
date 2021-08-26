import styles from '../styles/TopNavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { BodyText, PreTitle } from './Typography'

type TopNavBarProps = {
    atHome: boolean;
    onMenuButtonClick(): void;
    onCartButtonClick(): void;
    toggleAddressDropdown(): void;
}

export default function TopNavBar({ atHome, onMenuButtonClick, onCartButtonClick, toggleAddressDropdown }: TopNavBarProps) {
    return <div className={styles.topNavBar}>
        <div className={styles.leftTopBar}>
            <Image className={styles.menuButton} src="/assets/icons/Menu.svg"
                onClick={onMenuButtonClick}
                alt="Menu"
                width="14px"
                height="9.33px" />
            {atHome && <div className={styles.deliverAddress} onClick={toggleAddressDropdown}>
                <BodyText text="Deliver to:" /> <br />
                <PreTitle text="HOME" />
            </div>}
        </div>
        {!atHome && <Link href='/' passHref>
            <div className={styles.pageTitle}>
                <BodyText text="Uncle John Pizzas" color='var(--purple-color)' style={{ cursor: 'pointer' }} />
            </div>
        </Link>
        }
        <Image
            onClick={onCartButtonClick}
            src="/assets/icons/Cart.svg"
            alt="Cart"
            width="17px"
            height="16.15px" />
    </div >
}