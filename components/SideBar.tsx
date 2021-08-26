import styles from '../styles/SideBar.module.css'
import { BodyText, Header4,  } from './Typography'
import Image from 'next/image'

type SideBarProps = {
    show: boolean;
}
export default function SideBar({ show }: SideBarProps) {
    return <div className={`${styles.sideBar} ${show && styles.expand}`}>
        <div className={styles.userInfoMenu}>
            <div className={styles.avatarContainer}>
                {/* In real project, move bg image url to inline style */}
                <div className={styles.avatarOuterLayer}></div>
                <div className={styles.avatarInnerLayer}></div>
            </div>
            <Header4 text="Duy Nguyen" color='var(--purple-color)'/>
            <BodyText text="milonguyen95@outlook.com" color='var(--light-purple-color)'/>
        </div>
        <div className={styles.mainMenu}>
            <div className={styles.menuItem}>
                <div className={styles.icon}><Image src="/assets/icons/User.svg" width="20px" height="20px" alt="" /></div>
                <BodyText text="Profile" />
            </div>
            <div className={styles.menuItem}>
                <div className={styles.icon}><Image src="/assets/icons/Payment.svg" width="20px" height="20px" alt="" /></div>
                <BodyText text="Payment Method" />
            </div>
            <div className={styles.menuItem}>
                <div className={styles.icon}>
                    <Image src="/assets/icons/OrderHistory.svg" width="20px" height="20px" alt="" />
                </div>
                <BodyText text="Order History" />
            </div>
            <div className={styles.menuItem}>
                <div className={styles.icon}><Image src="/assets/icons/Location.svg" width="20px" height="20px" alt="" /></div>
                <BodyText text="Addresses" />
            </div>
            <div className={styles.menuItem}>
                <div className={styles.icon}><Image src="/assets/icons/Help.svg" width="20px" height="20px" alt="" /></div>
                <BodyText text="Help Center" />
            </div>
        </div>
        <div className={styles.footerMenu}>
            <div className={styles.menuItem}>
                <div className={styles.icon}><Image src="/assets/icons/Settings.svg" width="20px" height="20px" alt="" /></div>
                <BodyText text="Settings" />
            </div>
            <div className={styles.menuItem}>
                <div className={styles.icon}><Image src="/assets/icons/Logout.svg" width="20px" height="20px" alt="" /></div>
                <BodyText text="Log out" />
            </div>
        </div>
    </div>
}