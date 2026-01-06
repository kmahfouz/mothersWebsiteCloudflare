import { useEffect, useState } from 'react'
import './App.css'



function App() {

  useEffect(() =>{
    console.log("Loading")
  })

  return (

    <div className='page-container'>

      <div className='logo-container'>
        <img src={"/mothersLogo.jpeg"} className="logo react" alt="React logo" />
      </div>
      <h1>Dolab Bakiza</h1>
      <h2>Coming soon!</h2>
      <div className='card-container'>
        <a href="https://www.instagram.com/dolab.bakiza/" target='_blank' rel="noopener noreferrer">
          <div className="card" style={{
            backgroundImage: `url(/instagramLogo.png)`,
          }}></div></a>

        <a href="https://www.facebook.com/dolab.bakiza.2025" target='_blank' rel="noopener noreferrer"><div className="card" style={{
          backgroundImage: `url(/facebookLogo.png)`,
        }}></div></a>

        <a href="https://wa.me/201205253142" target='_blank' rel="noopener noreferrer">

          <div className="card" style={{
            backgroundImage: `url("/whatsappLogo.png")`,
          }}></div>
        </a>

        <a href="https://www.tiktok.com/@dolab.bakiza" target='_blank' rel="noopener noreferrer">
          <div className="card" style={{
            backgroundImage: `url(/tiktokLogo.png)`,
          }}></div>
        </a>


      </div>
    </div>


  )
}

export default App
