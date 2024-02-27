import React from 'react'
import './input.scss'
import FlexDiv from '../FlexDiv'

interface InputProps {
  type:string;
  title:string;
  value:any;
  formField:string;
  handleChange:any
  options?:any
}

const Input = ({ type, title, handleChange, value, options }:InputProps) => {



  return (
    <>
      {type === 'select' ?   
        <>
          <label>{title}</label>
          <select  
            value={value}                     
            onChange={handleChange}>
            {options?.map((option:any, i :number) =>
              <option key={i}>{option?.string}</option>)}
          </select> 
        </> 
        :

        <>
          <label>{title}</label>
          <input 
            type={type}
            value={value} 
            onChange={handleChange} 
          />
        </> 
      }
    </> 
              
  )
}
export default Input