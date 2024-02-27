import React from 'react'
import './sidebar.scss'
import { SiGooglebigquery } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa6'
import { BsFillFileBarGraphFill } from 'react-icons/bs'
import logo from '../../assets/PROMS-Logo-RGB.png'
import { useNavigate } from 'react-router-dom'

import FlexDiv from '../atoms/FlexDiv'


const Sidebar = () => {
  const navigate = useNavigate()

  const locateTo = (location:string) => {
    navigate(location)
  }

  return (
    <FlexDiv className='sidebar' dir='column' align='center'>
      <FlexDiv className='sidebar-options' center>
        <p className='sidebar-icon' onClick={() => locateTo('options')}><SiGooglebigquery/></p>
        <p className='sidebar-icon' onClick={() => locateTo('progress')}><FaDatabase/></p>
        <p className='sidebar-icon'><BsFillFileBarGraphFill/></p>
      </FlexDiv>
    </FlexDiv>
    

  )
}
export default Sidebar