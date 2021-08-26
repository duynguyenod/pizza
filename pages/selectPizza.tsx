import type { NextPage } from 'next'

import GradientBackground from '../components/GradientBackground'

import { Header1, PreTitle, SelectedButtonText } from '../components/Typography'
import styles from '../styles/SelectPizza.module.css'
import { createRef, useState } from 'react'
import GradientButton from '../components/GradientButton'
import OptionSelect from '../components/OptionSelect'
import ToppingsSlider from '../components/ToppingsSlider'
import { PizzaCrust, PizzaSize, PizzaTopping } from '../types'
import Pizza from '../components/Pizza'
import HalfOuterCircle from '../components/HalfOuterCircle'

const pizzaSizeOptions = ["Small", "Medium", "Large"];
const pizzaCrustOptions = ["Thin", "Thick"];

const SelectPizza: NextPage = () => {
  const [size, setSize] = useState<PizzaSize>();
  const [confirmedSize, setConfirmSize] = useState<PizzaSize>();
  const [crust, setCrust] = useState<PizzaCrust>();
  const [confirmedCrust, setConfirmCrust] = useState<PizzaCrust>();
  const [toppings, setToppings] = useState<PizzaTopping[]>([]);
  const [confirmedToppings, setConfirmToppings] = useState<PizzaTopping[]>();
  const [step, setStep] = useState(0);
  const [price, setPrice] = useState(10.00);
  // step 0: choose size
  // step 1: choose crust
  // step 2: choose toppings

  

  const containerRef = createRef<HTMLInputElement>();
  

  const goToNextStep = () => {
    switch(step) {
      case 0:
        setConfirmSize(size);
        setStep(1);
        return;
      case 1:
        setConfirmCrust(crust);
        setStep(2);
        return;
      case 2:
        setConfirmToppings(toppings);
        // Save all info to localstorage
        // Navigate to detail pizza page
        return;
    }
  }

  const onToppingChanged = (name: PizzaTopping, isSelected: boolean) => {
    if(!isSelected) {
      setToppings(toppings.filter((topping) => topping !== name));
    } else {
      if(toppings.indexOf(name) === -1) {
        setToppings([...toppings, name])
      }
    }
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <GradientBackground height={280}>
          <div className={styles.pizzaBannerContainer}>
            <div>
              <Header1 text="Create Your Pizza" color='white' />
              <div style={{ maxWidth: '200px' }}>
                {confirmedSize ? <PreTitle text={confirmedSize} color='white' /> : <PreTitle text="size" color='rgba(255, 255, 255, 0.3)' />}
                {confirmedCrust ? <PreTitle text={`, ${confirmedCrust}`} color='white' /> : <PreTitle text=", crust" color='rgba(255, 255, 255, 0.3)' />}
                {confirmedToppings && confirmedToppings.length > 0 ? confirmedToppings.map((topping) => <PreTitle key={confirmedToppings.indexOf(topping)} text={`, ${topping}`} color='white' />) : <PreTitle text=", toppings" color='rgba(255, 255, 255, 0.3)' />}
              </div>
            </div>
            <Header1 text={`$${price}`} />
          </div>
        </GradientBackground>

      </div>
      <Pizza size={size} crust={crust} toppings={toppings} />
      <HalfOuterCircle size={size} containerRef={containerRef}/>
      <div>
        {step === 0 && <OptionSelect type="size" style={{ marginBottom: '38px' }} onChange={(index) => setSize(pizzaSizeOptions[index] as PizzaSize)} options={pizzaSizeOptions} />}
        {step === 1 && <OptionSelect type="crust" style={{ marginBottom: '38px' }} onChange={(index) => setCrust(pizzaCrustOptions[index] as PizzaCrust)} options={pizzaCrustOptions} />}
        {step===2 && <ToppingsSlider style={{ marginBottom: '38px' }} onChange={onToppingChanged}/>}
        <GradientButton onClick={goToNextStep} style={{ borderRadius: '0', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SelectedButtonText text="Next" /></GradientButton>
      </div>
    </div>
  )
}

export default SelectPizza
