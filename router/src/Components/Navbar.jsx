import React from 'react'
import { Link } from 'react-router-dom'


export default function  () {
  return (
    <div className='Main-Container'>
        <div>
            <Link to="/">Kalvium❤️</Link>
        </div>
        <div className='Container-2'>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
  )
}
