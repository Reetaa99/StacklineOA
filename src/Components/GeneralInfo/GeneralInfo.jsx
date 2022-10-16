import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import './GeneralInfo.css'

export default function GeneralInfo({title,subtitle,image, tags=[]}) {


  return (
    <div className='container'>
        <img src={image} alt={title + ' image'} className='image' />
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{tags.map(item=> {
            return (
                <span>{item}  </span> 
            )
        })}</div>
    </div>
  )
}
