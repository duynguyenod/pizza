import Head from 'next/head'
import TopNavBar from './TopNavBar'
import AddressDropdown from './AddressDropdown'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router';
import SideBar from './SideBar';
import styles from '../styles/Layout.module.css'

type LayoutProps = {
  children?: JSX.Element,
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const [atHome, setAtHome] = useState<boolean>(true);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [showAddressDropdown, setshowAddressDropdown] = useState<boolean>(false);
  useEffect(() => {
    setAtHome(router.pathname === '/')
  }, [router.pathname])

  return (
    <div className={styles.layout}>
      <Head>
        <title>Pizza App</title>
        <meta name="description" content="Let's create your own Pizza" />
        <meta id="viewport" name="viewport" content="width=375, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavBar toggleAddressDropdown={() => setshowAddressDropdown(true)} onMenuButtonClick={() => setShowSideBar(true)} onCartButtonClick={() => {}} atHome={atHome} />
      <SideBar show={showSideBar} />
      <AddressDropdown show={showAddressDropdown}/>
      <main style={{ height: 'calc(100% - 48px)', backgroundColor: 'var(--light-grey-color)' }}>
        {(showSideBar || showAddressDropdown) && <div onClick={() => {setShowSideBar(false); setshowAddressDropdown(false)}} className={styles.blurBackground}>

        </div>}
        {children}
      </main>
    </div>
  )
}