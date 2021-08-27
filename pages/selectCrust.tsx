import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import GradientBackground from '../components/GradientBackground'

import { Header1, PreTitle, SelectedButtonText } from '../components/Typography'
import styles from '../styles/SelectPizza.module.css'
import { createRef, useState } from 'react'
import GradientButton from '../components/GradientButton'
import OptionSelect from '../components/OptionSelect'
import { PizzaCrust, PizzaSize } from '../types'
import Pizza from '../components/Pizza'
import HalfOuterCircle from '../components/HalfOuterCircle'
import { useEffect } from 'react'
import { getCrustPrice, getSizePrice } from '../utils'

const pizzaCrustOptions = ["Thin", "Thick"];

const SelectCrust: NextPage = () => {
  const router = useRouter();
  const [size, setSize] = useState<PizzaSize>("Small");
  const [crust, setCrust] = useState<PizzaCrust>("Thin");
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    let calculatedPrice = getSizePrice(size);
    calculatedPrice += getCrustPrice(crust);
    setPrice(calculatedPrice)
    
  }, [size, crust])

  useEffect(() => {
    setSize(localStorage.getItem('size') as PizzaSize);
    setCrust((localStorage.getItem('crust') || "Thin") as PizzaCrust);
  }, [])

  const containerRef = createRef<HTMLInputElement>();


  const goToNextStep = () => {
    localStorage.setItem('crust', crust);
    router.push('/selectToppings')
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <GradientBackground height={280}>
          <div className={styles.pizzaBannerContainer}>
            <div>
              <Header1 text="Create Your Pizza" color='white' />
              <div>
                <PreTitle text={size} color='white' />
                <PreTitle text=", crust" color='rgba(255, 255, 255, 0.3)' />
                <PreTitle text=", toppings" color='rgba(255, 255, 255, 0.3)' />
              </div>
            </div>
            {price && <Header1 text={`$${price.toFixed(2)}`} />}
          </div>
        </GradientBackground>

      </div>
      <Pizza size={size} crust={crust} />
      <HalfOuterCircle size={size} containerRef={containerRef} />
      <div>
        <OptionSelect type="crust" style={{ marginBottom: '38px' }} onChange={(index) => setCrust(pizzaCrustOptions[index] as PizzaCrust)} options={pizzaCrustOptions} selectedItem={crust}/>
        <GradientButton onClick={goToNextStep} style={{ borderRadius: '0', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SelectedButtonText text="Next" /></GradientButton>
      </div>
    </div>
  )
}

export default SelectCrust
