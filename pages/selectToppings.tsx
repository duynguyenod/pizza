import type { NextPage } from 'next'

import GradientBackground from '../components/GradientBackground'

import { Header1, PreTitle, SelectedButtonText } from '../components/Typography'
import styles from '../styles/SelectPizza.module.css'
import { createRef, useState } from 'react'
import GradientButton from '../components/GradientButton'
import ToppingsSlider from '../components/ToppingsSlider'
import { PizzaCrust, PizzaSize, PizzaTopping, Topping } from '../types'
import Pizza from '../components/Pizza'
import { useEffect } from 'react'
import router from 'next/router'
import { getCrustPrice, getSizePrice } from '../utils'
import { defaultToppings, gradientButtonStyle } from '../constants'

const SelectToppings: NextPage = () => {
  const [size, setSize] = useState<PizzaSize>("Small");
  const [crust, setCrust] = useState<PizzaCrust>("Thin");

  useEffect(() => {
    setSize(localStorage.getItem('size') as PizzaSize);
    setCrust((localStorage.getItem('crust') || "Thin") as PizzaCrust);
    const savedToppings = localStorage.getItem('toppings');
    const fetchToppings =
      (savedToppings && savedToppings !== '[]')
        ? JSON.parse(savedToppings)
        : defaultToppings
    setToppings(fetchToppings);
  }, [])

  const [toppings, setToppings] = useState<Topping[]>([]);
  const [confirmedToppings, setConfirmToppings] = useState<Topping[]>();
  const [price, setPrice] = useState(8.00);

  useEffect(() => {
    let calculatedPrice = getSizePrice(size);
    calculatedPrice += getCrustPrice(crust);
    const selectedToppings = toppings.filter(({ isSelected }) => isSelected);
    const additionalPriceforToppings = selectedToppings.length > 3 ? (selectedToppings.length - 3) * 0.5 : 0;
    calculatedPrice += additionalPriceforToppings;
    setConfirmToppings(selectedToppings);
    localStorage.setItem('toppings', JSON.stringify(toppings));
    setPrice(calculatedPrice);
  }, [size, crust, toppings])

  const containerRef = createRef<HTMLInputElement>();


  const goToNextStep = () => {
    localStorage.setItem('toppings', JSON.stringify(toppings));
    router.push('/verify');
  }

  const onToppingChanged = (name: PizzaTopping, isSelected: boolean) => {
    const _toppings = [...toppings];
    const toppingIndex = _toppings.findIndex((topping) => topping.name === name);
    _toppings[toppingIndex] = { ..._toppings[toppingIndex], isSelected };

    const selectedToppings = _toppings.filter(({ isSelected }) => isSelected);

    if (isSelected) {
      const priceUpdatedToppings = _toppings.map((topping) => {
        return {
          ...topping,
          ...(selectedToppings.length === 3 && {price: 0.5}),
          ...(selectedToppings.length === 7 && {isEnabled: topping.isSelected}),
        }
      });
      setToppings(priceUpdatedToppings);
      return;
    }else {
      if (selectedToppings.length < 7) {
        const priceUpdatedToppings = _toppings.map((topping) => ({
          ...topping,
          isEnabled: true,
          ...(selectedToppings.length < 3 && {price: 0}),
          ...(selectedToppings.length === 3 && {
            price: topping.isSelected ? 0 : 0.5
          })
        }));
        setToppings(priceUpdatedToppings);
        return;
      }
    }
    setToppings(_toppings);
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.banner}>
        <GradientBackground height={280}>
          <div className={styles.pizzaBannerContainer}>
            <div>
              <Header1 text="Create Your Pizza" color='white' />
              <div style={{ maxWidth: '300px' }}>
                <PreTitle text={size} color='white' />
                <PreTitle text={`, ${crust}`} color='white' />
                {confirmedToppings && confirmedToppings.length > 0 ? confirmedToppings.map((topping) => <PreTitle key={confirmedToppings.indexOf(topping)} text={`, ${topping.name}`} color='white' style={{ letterSpacing: '0' }} />) : <PreTitle text=", toppings" color='var(--unseleted-pizza-text-color)' />}
              </div>
            </div>
            <Header1 text={`$${price.toFixed(2)}`} />
          </div>
        </GradientBackground>

      </div>
      <Pizza size={size} crust={crust} toppings={confirmedToppings} />
      <div>
        <ToppingsSlider toppings={toppings} style={{ paddingTop: '25px', margin: '21px 20px 39px 20px' }} onChange={onToppingChanged} />
        <GradientButton onClick={goToNextStep} style={gradientButtonStyle}><SelectedButtonText text="Next" /></GradientButton>
      </div>
    </div>
  )
}

export default SelectToppings
