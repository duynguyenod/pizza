import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Image from 'next/image'
import GradientBackground from '../components/GradientBackground'
import Card from '../components/Card'
import GradientButton from '../components/GradientButton'
import { BodyText, Header1, Header2, Header3, PreTitle, SelectedButtonText } from '../components/Typography'
import styles from '../styles/PizzaVerify.module.css'
import { PizzaCrust, PizzaSize, Topping } from '../types'
import { useState } from 'react'
import { useEffect } from 'react'
import { getCrustPrice, getSizePrice } from '../utils'

const PizzaVerify: NextPage = () => {
  const router = useRouter();
  const [size, setSize] = useState<PizzaSize>()
  const [crust, setCrust] = useState<PizzaCrust>()
  const [toppings, setToppings] = useState<Topping[]>()
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setSize(localStorage.getItem('size') as PizzaSize);
    setCrust((localStorage.getItem('crust') || "Thin") as PizzaCrust);
    setToppings(JSON.parse(localStorage.getItem('toppings') || '[]'));
  }, [])

  useEffect(() => {
    if (!size || !crust || !toppings) return;
    const price = getSizePrice(size) + getCrustPrice(crust) + toppings.map(({ price }) => price).reduce((sum, price) => sum += price);
    setTotal(price)
  }, [size, crust, toppings])

  const goToNextStep = () => { 
    localStorage.setItem('totalPrice', ''+total);
    router.push('/checkout')
  }
  return (
    <div className={styles.container}>
      <GradientBackground height={162}>
        <div className={styles.verifyBannerContainer}>
          <Image src="/assets/icons/Pizza.svg" width="30px" height="30px" alt="pizza" />
          <Header1 text="Check your" color='white' />
          <Header2 text='custom pizza' color='white' />
        </div>
      </GradientBackground>
      <div className='contentContainer'>
        <div style={{ zIndex: 3, bottom:'70px', right: '-20%', display: 'flex', alignItems: 'center', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '50%', position: 'relative', width: '530px', height: '530px' }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', boxShadow: '0px 4px 15px rgba(218, 218, 229, 0.2)', backgroundColor: 'white', borderRadius: '50%', width: '480px', height: '480px' }}>
            <div style={{position: 'absolute', marginTop:'70px', width:'600px'}}><Image src="/assets/pizzaAssetsthickCrust.png" width="600px" height="600px" alt="Pizza"/></div>
          </div>
        </div>
        <Card isTransparent style={{ position: 'absolute', zIndex: 4, width: '237px', left: '0', bottom: '128px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', background: 'rgba(255, 255, 255, 0.6)' }}>
          <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'flex-start', padding: '47px 0 44px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start', padding: '0 23px 15px 22px', borderBottom: '0.5px solid var(--grey-color)' }}>
              <Image src="/assets/icons/RedCart.svg" width="17px" height="17px" alt="Red cart" />
              <PreTitle text="order summary" color='var(--red-color)' />
            </div>
            <div style={{ width: '100%', margin: '18px 0 28px 0', display: 'flex', flexDirection: 'column' }}>
              {size && <div className={styles.priceRow}>
                <BodyText text={`${size} Size`} />
                <BodyText text={`$${getSizePrice(size).toFixed(2)}`} style={{ fontSize: '10px' }} />
              </div>}
              {crust && <div className={styles.priceRow}>
                <BodyText text={`${crust} Crust`} />
                <BodyText text={`$${getCrustPrice(crust).toFixed(2)}`} style={{ fontSize: '10px' }} />
              </div>}
              {toppings && toppings.filter(({isSelected}) => isSelected).map(({ name, price }) => (<div key={name} className={styles.priceRow}>
                <BodyText text={name} />
                <BodyText text={`$${price.toFixed(2)}`} style={{ fontSize: '10px' }} />
              </div>))}
            </div>
            <div className={styles.total}>
              <div className={styles.priceRow}>
                <BodyText text="Total" />
                <Header3 text={`$${total.toFixed(2)}`} color='var(--purple-color)' />
              </div>
            </div>
          </div>
        </Card>

      </div>
      <GradientButton onClick={goToNextStep} style={{ borderRadius: '0', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: '0', width: '100%' }}><SelectedButtonText text="Next" /></GradientButton>
    </div>
  )
}

export default PizzaVerify
