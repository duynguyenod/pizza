import { RefObject, useEffect, useState } from "react";
import { BodyText } from '../components/Typography'
import styles from '../styles/HalfOuterCircle.module.css'
import { PizzaSize } from "../types";

type HalfOuterCircleProps = {
  size: PizzaSize;
  containerRef: RefObject<HTMLInputElement>;
}

export default function HalfOuterCircle({ size, containerRef }: HalfOuterCircleProps) {
  const [halfCircleMarginLeft, setHalfCircleMarginLeft] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setHalfCircleMarginLeft(calculateMarginOfDecorOuterCircle())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  const getDecorOuterCircleSize = () => {
    switch (size) {
      case 'Large':
        return 411;
      case 'Medium':
        return 400;
      default:
        return 376;
    }
  }

  const calculateMarginOfDecorOuterCircle = () => {
    if (containerRef.current) {
      return (getDecorOuterCircleSize() - containerRef.current.offsetWidth) / 2
    }
    return 0;
  }

  const getPizzaSizaText = () => {
    switch (size) {
      case 'Large':
        return '14"';
      case 'Medium':
        return '12"';
      default:
        return '10"';
    }
  }

  return <div className={styles.halfCircle} style={{ width: `${getDecorOuterCircleSize()}px`, height: `${getDecorOuterCircleSize()}px`, marginLeft: `-${halfCircleMarginLeft}px` }}>
    <div className={styles.halfCircleContainer}>
      <div className={styles.sizeText}>
        <BodyText text={getPizzaSizaText()} color='var(--light-purple-color)' style={{ fontSize: '10px' }} />
      </div>
    </div>
  </div>
}