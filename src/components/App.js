import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar/Navbar'
import Sidebar from './layout/sidebar/Sidebar'
import Footer from './layout/footer/Footer'
// import Web3Modal from 'web3modal'
// import UAuth from '@uauth/js'

import SwapFromUniswap from './SwapFromUniswap'
import ExploreFunds from './explore-funds/ExploreFunds'
import styles from '../styles/Home.module.css'
export default function App() {
  return (
    <BrowserRouter className={styles.container}>
      <Routes>
        <Route
          path="/explore-funds"
          element={
            <div className={styles.justflex}>
              <Sidebar />
              <ExploreFunds />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className={styles.justflex}>
              <Sidebar />
              <SwapFromUniswap />
            </div>
          }
        />
      </Routes>
      
      {/* <div>       
        <Footer />
      </div> */}
    </BrowserRouter>
  )
}
