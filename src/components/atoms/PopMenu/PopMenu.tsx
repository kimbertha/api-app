import React from 'react'
import FlexDiv from '../FlexDiv'
import './popmenu.scss'

interface PopMenuOption {
title: string;
icon?:string;
func: () => void
}

interface PopMenuProps {
  show: boolean,
  setShow:React.Dispatch<React.SetStateAction<boolean>>
  options: PopMenuOption[]
}

const PopMenu = ({ options, show , setShow }: PopMenuProps) => {

  if (!show) return null
  return (
    <div>
      <div className='screen' onClick={() => setShow(false)}/>
      <FlexDiv className='menu-container'>
        {options.map(option => (
          <div className='menu-option' onClick={() =>{
            option.func()
            setShow(false)
          }}>{option.title}</div>
        ))}


      </FlexDiv>
    </div>
  )
}
export default PopMenu