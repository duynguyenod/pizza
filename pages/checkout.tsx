import type { NextPage } from 'next'

import Image from 'next/image'
import GradientBackground from '../components/GradientBackground'
import Card from '../components/Card'
import GradientButton from '../components/GradientButton'
import CircleButton from '../components/CircleButton'
import { Header1,BodyText, Header2, Header4, PreTitle, SelectedButtonText } from '../components/Typography'
import styles from '../styles/Checkout.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Checkout: NextPage = () => {
    const [price, setPrice] = useState<number>()

    useEffect(() => {
        setPrice(+(localStorage.getItem('totalPrice') || 0));
    }, [])

    const goToNextStep = () => { }
    return (
        <div className={styles.container}>
            <GradientBackground height={192}>
                <div className={styles.banner}>
                    <Image src="/assets/icons/Receipt.svg" width="30px" height="30px" alt="cart" />
                    <Header1 text="Check out" color='white' />
                </div>
            </GradientBackground>
            <div className='contentContainer'>

                <Card isTransparent style={{ marginTop: '-77px' }}>
                    <div style={{ paddingTop: '30px', paddingBottom: '25px' }}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '24px', paddingRight:'15px', marginBottom: '18px'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Image src="/assets/icons/Location.svg" width="16px" height="20px" alt="Location" />
                                <Header4 style={{marginLeft: '9px'}} text="Delivery Address" color='var(--red-color)' />
                            </div>
                            <CircleButton >
                                <Image src="/assets/icons/Pencil.svg" width="11px" height="11px" alt="Edit" />
                            </CircleButton>

                        </div>
                        <div className={styles.addressInfo}>
                            <BodyText text="Home" style={{fontWeight: 'bold'}}/>
                            <BodyText text="3728  Brand Road, Swift Current" />
                        </div>
                        <div style={{padding: '20px 0 20px 24px', borderBottom: '0.5px solid var(--grey-color)'}}>
                        <BodyText text="+    Add delivery instruction" style={{fontWeight: 'bold'}}/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '29px 15px 25px 24px'}}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <BodyText text="Contactless Delivery:" style={{fontWeight: 'bold'}}/>
                            <BodyText text="Rider will place order at your door" />
                            </div>
                            <CircleButton >
                                <Image src="/assets/icons/Pencil.svg" width="11px" height="11px" alt="Edit" />
                            </CircleButton>

                        </div>
                    </div>
                </Card>

            </div>
            <GradientButton onClick={goToNextStep} style={{ borderRadius: '0', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: '0', width: '100%' }}><SelectedButtonText text="Next" /></GradientButton>
        </div>
    )
}

export default Checkout
