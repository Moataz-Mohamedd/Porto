import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfoliofront from './components/portfolio/Portfoliofront'
import Portfolioback from './components/portfolioback/Portfolioback'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './index.css'
import MyExperience from './components/MyExperience/MyExperience'

const App = () => {

   
    return (
        < >
            <Header />
            <Nav />
            <About />
            <Services />
            <Experience />
            <Portfoliofront />
            <Portfolioback/>
            <Testimonials />
            <MyExperience/>
            <Contact />
            <Footer />
        </>
    )
}

export default App
