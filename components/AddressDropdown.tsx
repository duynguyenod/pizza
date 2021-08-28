import styles from '../styles/AddressDropdown.module.css'
import { BodyText, } from './Typography'
import Image from 'next/image'
import { AddressType } from '../types'
import { useState } from 'react'

type AddressDropdownProps = {
    show: boolean;
}

export default function AddressDropdown({ show }: AddressDropdownProps) {
    const [addresses, setAddresses] = useState<AddressType[]>([
        {
            type: 'CurrentLocation',
            name: 'Current Location',
            address: ''
        },
        {
            type: 'Home',
            name: 'Home',
            address: '3728  Brand Road, Swift Current',
        },
        {
            type: 'Other',
            name: 'Other',
            address: '81 Springside, Lancaster',
        },
        {
            type: 'Work',
            name: 'Work',
            address: '4932 Sixth Street, Westminster',
        },
    ]);
    return <div className={`${styles.addressDropdown} ${show && styles.expand}`}>
        {addresses &&
            addresses.map(
                (addressItem) => {
                    const { name, address, type } = addressItem;
                    return (<div key={addresses.indexOf(addressItem)} className={styles.menuItem}>
                        <div className={styles.icon}><Image src={type === 'Other' ? "/assets/icons/Location.svg" : `/assets/icons/${type}.svg`} width="20px" height="20px" alt="" /></div>
                        <div className={styles.addressInfo}>
                            <BodyText text={name} style={{fontWeight: 'bold'}}/>
                            {address && <BodyText text={address} />}

                        </div>
                    </div>)
                })}

        <div className={styles.menuItem}>
            <div className={styles.icon}><Image src="/assets/icons/Add.svg" width="20px" height="20px" alt="" /></div>
            <div >
                <BodyText text='Add a new address' color='var(--orange-color)' style={{fontWeight: 'bold'}}/>
            </div>
        </div>
    </div>
}