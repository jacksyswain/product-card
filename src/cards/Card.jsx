import React from 'react'
import perfume from '../assets/perfume.jpg'
import './Card.css'

function Card() {
  return (
    <>
    <div style={{display:"flex", width:"35vw", height:"60vh" ,borderRadius:"10px" ,boxShadow:" 2px 2px 5px 2px rgba(0, 0, 0, 0.3)",marginLeft:"30%",marginTop:"10%",boxSizing:"border-box"}}>
      <div  style={{width:"50%", height:"100%"}}>
        <img src={perfume} alt="perfume img" style={{ height:"100%",width:"100%", objectFit:"cover",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} />
      </div>
      <div style={{width:"50%", height:"100%" }}  className='container'>
        <p className='category' style={{paddingTop:"20px"}}>Perfume</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p className='product-desc'>A floral, solar, and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
        <h2 className='list-price' style={{color:"rgb(60, 128, 103)",paddingTop:"20px"}}>$169.99</h2>
        <button className='btn'  style={{backgroundColor:"rgb(60, 128, 103)",marginTop:"20px",color:"white",borderRadius:"5px", width:"80%", height:"25px"}}>Add To Cart</button>
      </div>
    </div>
    </>
  )
}

export default Card
