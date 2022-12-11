import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/images/pedia.png"

function HomeScreen() {
  return (
    <>
    <div className='home-page container mt-3 d-flex justify-content-evenly'>
        <Link to="/characters"><button className='btn btn-info btn-sm'>Characters</button></Link>
        <Link to="/locations"><button className='btn btn-info btn-sm'>Locations</button></Link>
        <Link to="/episodes"><button className='btn btn-info btn-sm'>Episodes</button></Link>
    </div>
    <div className='homepg mt-4'>
      <img src={image} alt="home" className='homebg rounded' filter/>
    </div>
    </>
  )
}

export default HomeScreen