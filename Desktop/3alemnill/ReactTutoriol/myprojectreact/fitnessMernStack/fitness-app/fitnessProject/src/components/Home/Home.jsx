import React from 'react'
import About from '../About/about'
import Contact from '../contactus/contact'
import Footer from '../Footer/footer'
import styles  from './Home.css'
import JoinUs from '../JoinUs/JoinUs'
import Class from '../Class/Class'
import Plan from '../Plan/Plan'
import Explore from '../Explore/Explore'
import Header from '../Header/Header'

function Home(){
  return (
    <div className={styles.homeContainer}>
     
     
     <Header/>
    <Class/>
    <Explore/>
    <JoinUs/>
    <Plan/>
    <About />
    <Contact />
    <Footer />
  </div>
  )
}

export default Home
