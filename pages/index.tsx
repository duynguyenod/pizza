import type { NextPage } from 'next'
import Link from 'next/link'

import Image from 'next/image'
import GradientBackground from '../components/GradientBackground'
import Card from '../components/Card'
import GradientButton from '../components/GradientButton'
import { BodyText, Header1, Header2, Header4, PreTitle, SelectedButtonText } from '../components/Typography'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    localStorage.clear(); 
  }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <GradientBackground height={144}>
          <div className={styles.homeBannerContainer}>
            <BodyText text="Hi Javkey!" color='white' />
            <div style={{ borderLeft: '1px solid white', paddingLeft: '11px' }}>
              <Header1 text="What" color='white' /> <Header2 text='pizza' color='white' /> <Header1 text="do you" color='white' /> <br />
              <Header1 text="want to try today?" color='white' />
            </div>
          </div>
        </GradientBackground>
        <div className='contentContainer'>
          <Card isTransparent style={{ marginTop: '-28px', zIndex: 2, marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '218px' }}>
              <Image src="/assets/thinCrust_w_ toppings.png" width="190px" height="218px" alt="Reorder pizza" />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: '-32px' }}>
                <Header4 text="Reorder again?" color='var(--red-color)' style={{ marginBottom: '3px' }} />
                <PreTitle text="SMALL, THIN CRUST," />
                <PreTitle text="TOMATOES, BASIL, CHEESE" style={{ marginBottom: '7px' }} />
                <Header4 text="$12" color='var(--purple-color)' style={{ marginBottom: '13px' }} />
                <GradientButton>
                  <SelectedButtonText text="Add To Cart" />
                </GradientButton>
              </div>
            </div>
          </Card>
          <Link href="/selectSize" passHref>
            <Card isTransparent={false} style={{cursor: 'pointer'}}>
              <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'center', paddingTop: '31px' }}>
                <div>
                  <Header1 text="Create your" color='var(--red-color)' /> <Header2 text="own pizza" color='var(--red-color)' /> <br />
                </div>
                <PreTitle text="the cost will depend on your customization" style={{ marginBottom: '19px', marginTop: '6px' }} />
                <div className={styles.createOwnPizzaImage}>
                  <Image src="/assets/thickCrust w_ toppings_w_ toppings 02 1.png" width="380px" height="312.5px" alt="Create new pizza" />
                </div>
              </div>
            </Card>
          </Link>

        </div>
      </main>
    </div>
  )
}

export default Home
