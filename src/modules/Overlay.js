import React from 'react'
import "../styles/Overlay.css"
import { gsap, Power4 } from 'gsap'

function Overlay() {

    React.useEffect(function (){

      let tl = gsap.timeline({defaults: {ease: Power4.inOut}})
        
        
        tl.to(".welcome", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 0.6 })
        tl.to(".box", {clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", stagger: 0.4, delay:0.5})
        tl.to(".bottom", {clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", stagger: 0.4})

    },[])




  return (
    <div className = "overlay">
        <div className = "box one"></div>
        <div className = "box two"></div>
        <div className = "box three"></div>
        <div className = "bottom"></div>
    </div>
  )
}

export default Overlay






      
    
  