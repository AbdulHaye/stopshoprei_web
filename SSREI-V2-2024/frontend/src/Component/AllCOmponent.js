import React from 'react'
import Navbar from './NavbarMain/Navbar'
import NavbarMain from './NavbarUpper/NavbarMain'
import ServiceTest from './ServiceMain/ServiceTest'
import Pricing from './PricingPlan/Pricing'
import Testimonial from './TestimonailSection/Testimonial'
import Faq from './FrequentlyAQ/Faq'
import Footer from './FooterStop/Footer'

function AllCOmponent() {
  return (
    <div>
    <NavbarMain/>
      <Navbar/>
      
      <div id="id_questions">  <ServiceTest/></div>
      <Pricing/>
      <div id="id_feedback"><Testimonial/></div>
      <Faq/>
      <div id="contact_us"> <Footer/></div>
    </div>
  )
}

export default AllCOmponent
