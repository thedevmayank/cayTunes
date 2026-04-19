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
  delay:2

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

   <main className='overflow-hidden'>
  
    <div class="bg relative min-h-screen bg-gradient-to-br from-[#2E0854] via-[#1A3FAF] to-black overflow-hidden">


  <div class="sparkles absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]  "></div>


  <div ref={formContainer} class="relative w-[90%]  mx-auto z-10 flex  items-center flex-wrap justify-around min-h-screen">

    <div>
      <img src={logo} alt="logo" />
    </div>
     <div  class=" backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl w-[350px] border border-white/20">


    <h1  class="text-3xl font-bold text-white text-center mb-6">
      cayTunes 🎧
    </h1>

    
    <form class="flex flex-col gap-4">

      <input 
        type="text" 
        placeholder="Username"
        class="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white/40"
      />

      <input 
        type="email" 
        placeholder="Email"
        class="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white/40"
      />

      <input 
        type="password" 
        placeholder="Password"
        class="p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white/40"
      />

     
      <button 
        class="mt-4 bg-gradient-to-r from-purple-700 via-blue-500 to-teal-400 text-white py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
      >
        Sign Up
      </button>

    </form>

  </div>
  </div>

</div>
   </main>
   </>
  )
}

export default App
