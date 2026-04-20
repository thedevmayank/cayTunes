import { useRef, useState } from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import logo from "./assets/ChatGPT_Image_Dec_30__2025__07_57_01_PM-removebg-preview.png"

function App() {
  const [count, setCount] = useState(0)
 let formContainer = useRef()

useGSAP(() =>{
  gsap.to(".sparkles", {
    x:20,
    opacity:0.4,
  duration:2.8,
  repeat:-1,
  ease: "power3.out",
  delay:3.4

});
 gsap.from(".bg", {
  scale:2,
  duration:1.5,
  opacity:0,
  ease: "power3.out",
 });
 gsap.from(formContainer.current, {
  scale:1,
  y:-20,
  opacity:0,
  duration:3,
  ease: "elastic",
  stagger:{
    each:0.2,
    from: "center"
  },
  delay:1
 })
})

  return (
   <>

   <main className=" overflow-hidden h-[100dvh]">

  <div className="bg relative min-h-screen  flex flex-wrap flex-col gap-10 justify-center bg-gradient-to-br from-[#2E0854] via-[#1A3FAF] to-black overflow-hidden px-4">

    {/* Sparkle BG */}
    <div className="sparkles absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]"></div>

    {/* Container */}
    <div
      ref={formContainer}
      className="relative z-10 flex flex-col  md:flex-row items-center  justify-around   gap-3 md:gap-0  min-h"
    >

      {/* Logo Section */}
      <div className=" text-white  font-bold  uppercase ">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight ">
    Create, Play  <br />
    Feel, Repeat
</h1>

      </div>

      {/* Form Card */}
      <div  className="w-full max-w-[350px] backdrop-blur-lg bg-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20">

        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
          Get Started <br />
        
        </h1>
        

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white/40"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white/40"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white/40"
          />

          <button className="mt-4 bg-gradient-to-r from-purple-700 via-blue-500 to-teal-400 text-white py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Sign Up
          </button>

        </form>
      </div>
 
    </div>
    <div className='text-white text-center text-[14px] md:text-lg '>Welcome to cayTunes - Let's create your account </div>
  </div>
  
</main>
   </>
  )
}

export default App
