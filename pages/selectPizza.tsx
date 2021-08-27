import type { NextPage } from 'next'

import GradientBackground from '../components/GradientBackground'

import { Header1, PreTitle, SelectedButtonText } from '../components/Typography'
import styles from '../styles/SelectPizza.module.css'
import { createRef, useState } from 'react'
import GradientButton from '../components/GradientButton'
import OptionSelect from '../components/OptionSelect'
import ToppingsSlider from '../components/ToppingsSlider'
import { PizzaCrust, PizzaSize, PizzaTopping, Topping } from '../types'
import Pizza from '../components/Pizza'
import HalfOuterCircle from '../components/HalfOuterCircle'
import { useEffect } from 'react'

const pizzaSizeOptions = ["Small", "Medium", "Large"];
const pizzaCrustOptions = ["Thin", "Thick"];

const SelectPizza: NextPage = () => {
  const [size, setSize] = useState<PizzaSize>("Small");
  const [confirmedSize, setConfirmSize] = useState<PizzaSize>();
  const [crust, setCrust] = useState<PizzaCrust>("Thin");
  const [confirmedCrust, setConfirmCrust] = useState<PizzaCrust>();
  const [toppings, setToppings] = useState<Topping[]>([
    {
      name: "Pepperoni",
      price: 0.00,
      icon: "/assets/toppings/pepperoni.png",
      isSelected: false
    },
    {
      name: "Mushroom",
      price: 0.00,
      icon: "/assets/toppings/mushroom.png",
      isSelected: false
    },
    {
      name: "Black Olives",
      price: 0.00,
      icon: "/assets/toppings/olives.png",
      isSelected: false
    },
    {
      name: "Onions",
      price: 0.00,
      icon: "/assets/toppings/onion.png",
      isSelected: false
    },
    {
      name: "Peppers",
      price: 0.00,
      icon: "/assets/toppings/peppers.png",
      isSelected: false
    },
    {
      name: "Pineapple",
      price: 0.00,
      icon: "/assets/toppings/pineapple.png",
      isSelected: false
    },
    {
      name: "Sausages",
      price: 0.00,
      icon: "/assets/toppings/sausages.png",
      isSelected: false
    },
    {
      name: "Spinach",
      price: 0.00,
      icon: "/assets/toppings/spinach.png",
      isSelected: false
    },
    {
      name: "Bacon",
      price: 0.00,
      icon: "/assets/toppings/bacon.png",
      isSelected: false
    },
    {
      name: "Cheese",
      price: 0.00,
      icon: "/assets/toppings/cheese.png",
      isSelected: false
    },
  ]);
  const [confirmedToppings, setConfirmToppings] = useState<Topping[]>();
  const [step, setStep] = useState(0);
  const [price, setPrice] = useState(8.00);
  // step 0: choose size
  // step 1: choose crust
  // step 2: choose toppings

  useEffect(() => {
    let calculatedPrice = 8.00;
    switch (size) {
      case "Small":
        calculatedPrice = 8.00;
        break;
      case "Medium":
        calculatedPrice = 10.00;
        break;
      case "Large":
        calculatedPrice = 12.00;
        break;
    }
    if(crust === "Thick") {
      calculatedPrice += 2;
    }
    const selectedToppings = toppings.filter(({isSelected}) => isSelected);
    const additionalPriceforToppings = selectedToppings.length > 3 ? (selectedToppings.length - 3) * 0.5 : 0;
    calculatedPrice += additionalPriceforToppings;
    setConfirmToppings(selectedToppings);
    setPrice(calculatedPrice);
  }, [size, crust, toppings])

  const containerRef = createRef<HTMLInputElement>();


  const goToNextStep = () => {
    switch (step) {
      case 0:
        setConfirmSize(size);
        setStep(1);
        return;
      case 1:
        setConfirmCrust(crust);
        setStep(2);
        return;
      case 2:
        setConfirmToppings(toppings.filter((topping) => topping.isSelected));
        // Save all info to localstorage
        // Navigate to detail pizza page
        return;
    }
  }

  const onToppingChanged = (name: PizzaTopping, isSelected: boolean) => {
    const _toppings = [...toppings];
    const toppingIndex = _toppings.findIndex((topping) => topping.name === name);
    _toppings[toppingIndex] = { ..._toppings[toppingIndex], isSelected };

    const selectedToppings = _toppings.filter(({isSelected}) => isSelected);

    console.log(selectedToppings.length)
    if(isSelected && selectedToppings.length === 3) {
      const priceUpdatedToppings = _toppings.map((topping) => {
        if(topping.isSelected) return topping;
        return {
          ...topping,
          price: 0.5
        }
      });
      setToppings(priceUpdatedToppings);
      return;
    }

    if(!isSelected && selectedToppings.length <= 3) {
      const priceUpdatedToppings = _toppings.map((topping) => ({
        ...topping,
        price: 0.00
      }));
      setToppings(priceUpdatedToppings);
      return;
    }

    setToppings(_toppings);
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
                {confirmedToppings && confirmedToppings.length > 0 ? confirmedToppings.map((topping) => <PreTitle key={confirmedToppings.indexOf(topping)} text={`, ${topping.name}`} color='white' />) : <PreTitle text=", toppings" color='rgba(255, 255, 255, 0.3)' />}
              </div>
            </div>
            <Header1 text={`$${price.toFixed(2)}`} />
          </div>
        </GradientBackground>

      </div>
      <Pizza size={size} crust={crust} toppings={confirmedToppings} />
      {(step === 0 || step === 1) && <HalfOuterCircle size={size} containerRef={containerRef} />}
      <div>
        {step === 0 && <OptionSelect type="size" style={{ marginBottom: '38px' }} onChange={(index) => setSize(pizzaSizeOptions[index] as PizzaSize)} options={pizzaSizeOptions} />}
        {step === 1 && <OptionSelect type="crust" style={{ marginBottom: '38px' }} onChange={(index) => setCrust(pizzaCrustOptions[index] as PizzaCrust)} options={pizzaCrustOptions} />}
        {step === 2 && <ToppingsSlider toppings={toppings} style={{ paddingTop: '25px', margin: '21px 20px 39px 20px' }} onChange={onToppingChanged} />}
        <GradientButton onClick={goToNextStep} style={{ borderRadius: '0', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SelectedButtonText text="Next" /></GradientButton>
      </div>
    </div>
  )
}

export default SelectPizza
