import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'
// import Web3Modal from 'web3modal'
// import UAuth from '@uauth/js'

import SwapFromUniswap from './SwapFromUniswap'
import styles from '../styles/Home.module.css'
export default function App() {
  return (
    <Router className={styles.container}>
      <div>
        <Navbar />
        <SwapFromUniswap />
        <Footer />
      </div>
    </Router>
  )
}
