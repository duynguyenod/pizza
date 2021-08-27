import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import GradientBackground from '../components/GradientBackground'

import { Header1, PreTitle, SelectedButtonText } from '../components/Typography'
import styles from '../styles/SelectPizza.module.css'
import { createRef, useState } from 'react'
import GradientButton from '../components/GradientButton'
import OptionSelect from '../components/OptionSelect'
import { PizzaSize } from '../types'
import Pizza from '../components/Pizza'
import HalfOuterCircle from '../components/HalfOuterCircle'
import { useEffect } from 'react'
import { getSizePrice } from '../utils'

const pizzaSizeOptions = ["Small", "Medium", "Large"];

const SelectSize: NextPage = () => {
  const router = useRouter();
  const [size, setSize] = useState<PizzaSize>("Small");
  const [price, setPrice] = useState(8.00);

  useEffect(() => {
    setSize((localStorage.getItem('size') || "Small") as PizzaSize)
  }, [])

  useEffect(() => {
    setPrice(getSizePrice(size));
  }, [size])

  const containerRef = createRef<HTMLInputElement>();

  const goToNextStep = () => {
    localStorage.setItem('size', size);
    router.push('/selectCrust')
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <GradientBackground height={280}>
          <div className={styles.pizzaBannerContainer}>
            <div>
              <Header1 text="Create Your Pizza" color='white' />
              <div>
                <PreTitle text="size" color='rgba(255, 255, 255, 0.3)' />
                <PreTitle text=", crust" color='rgba(255, 255, 255, 0.3)' />
                <PreTitle text=", toppings" color='rgba(255, 255, 255, 0.3)' />
              </div>
            </div>
            <Header1 text={`$${price.toFixed(2)}`} />
          </div>
        </GradientBackground>

      </div>
      <Pizza size={size} />
      <HalfOuterCircle size={size} containerRef={containerRef} />
      <div>
        <OptionSelect type="size" style={{ marginBottom: '38px' }} onChange={(index) => setSize(pizzaSizeOptions[index] as PizzaSize)} options={pizzaSizeOptions} selectedItem={size}/>
        <GradientButton onClick={goToNextStep} style={{ borderRadius: '0', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SelectedButtonText text="Next" /></GradientButton>
      </div>
    </div>
  )
}

export default SelectSize
