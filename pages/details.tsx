import type { NextPage } from 'next'

import Image from 'next/image'
import GradientBackground from '../components/GradientBackground'
import Card from '../components/Card'
import { BodyText, Header1, Header3, Header4, PreTitle } from '../components/Typography'
import styles from '../styles/OrderDetails.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'

const OrderDetails: NextPage = () => {
    const [price, setPrice] = useState<number>(0)

    useEffect(() => {
        setPrice(+(localStorage.getItem('totalPrice') || 0));
    }, [])
    
    return (
        <div className={styles.container}>
            <GradientBackground height={192}>
                <div className={styles.banner}>
                    <Image src="/assets/icons/Receipt.svg" width="30px" height="30px" alt="cart" />
                    <Header1 text="Order Details" color='white' />
                </div>
            </GradientBackground>
            <div className='contentContainer'>
                <Card isTransparent style={{ marginTop: '-77px' }}>
                    <div className={styles.orderDetailsContainer}>
                        <div className={styles.basicInfoContainer}>
                            <div className={styles.orderInfo}>
                                <PreTitle text="ordered on" />
                                <Header4 text={moment().format('DD MMM')} color='var(--red-color)' />
                            </div>
                            <div className={styles.orderInfo}>
                                <PreTitle text="invoice #" />
                                <Header4 text="#15569" color='var(--red-color)' />
                            </div>
                            <div className={styles.orderInfo}>
                                <PreTitle text="total due" />
                                <Header4 text={`$${price}`} color='var(--red-color)' />
                            </div>
                        </div>
                        <div className={styles.orderStateContainer}>
                            <div className={styles.finishedLine}></div>
                            <div className={styles.unfinishedLine}></div>
                            <div className={styles.stateItem}>
                                <div className={styles.finishedStateIcon}>
                                    <Image src="/assets/icons/Check.svg" width="30px" height="30px" alt="Check" />
                                </div>
                                <div>
                                    <BodyText text="11:41 am" style={{ fontWeight: 'bold' }} /><br />
                                    <BodyText text="Order Confirmed" />
                                </div>
                            </div>
                            <div className={styles.stateItem}>
                                <div className={styles.finishedStateIcon}>
                                    <Image src="/assets/icons/Food.svg" width="30px" height="30px" alt="Prepare" />
                                </div>
                                <div >
                                    <BodyText text="12:01pm" style={{ fontWeight: 'bold' }} /><br />
                                    <BodyText text="Preparing...." />
                                </div>
                            </div>
                            <div className={styles.stateItem}>
                                <div className={styles.unfinishedStateIcon}>
                                    <Image src="/assets/icons/Bag.svg" width="30px" height="30px" alt="Dispatched" />
                                </div>
                                <BodyText text="Dispatched" />
                            </div>
                            <div className={styles.stateItem}>
                                <div className={styles.unfinishedStateIcon}>
                                    <Image src="/assets/icons/Bike.svg" width="30px" height="30px" alt="In transit" />
                                </div>
                                <BodyText text="In Transit" />
                            </div>
                            <div className={styles.stateItem}>
                                <div className={styles.unfinishedStateIcon}>
                                    <Image src="/assets/icons/Delivered.svg" width="30px" height="30px" alt="Delivered" />
                                </div>
                                <BodyText text="Delivered" />
                            </div>
                        </div>

                    </div>
                </Card>
                <div className={styles.cashbackContainer}>
                    <div className={styles.cashbackInfo}>
                        <div className={styles.cashbackIcon}>
                            <Image src="/assets/icons/Cashback.svg" width="20px" height="20px" alt="Cashback" />
                        </div>
                        <div className={styles.cashbackValue}>
                            <Header3 text="Earned cashback!" color='var(--green-color)' />
                            <BodyText text={`+ $${(price / 10).toFixed(2)}`} />
                        </div>
                    </div>
                    <div className={styles.rightCashback}>
                        <Image src="/assets/icons/Right.svg" width="10px" height="20px" alt="right" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
