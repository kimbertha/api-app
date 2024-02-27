import React from 'react'
import FlexDiv from '../atoms/FlexDiv'
import './header.scss'
import { FaUserCircle } from 'react-icons/fa'
import { MdHelp } from 'react-icons/md'
import { MdLightMode } from 'react-icons/md'
import SearchBar from '../atoms/SearchBar/SearchBar'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaRegSun } from 'react-icons/fa6'
import { IoMdHelpCircleOutline } from 'react-icons/io'



import logo from '../../assets/PROMS-Logo-RGB.png'

const Header = () => {

  return (
    <FlexDiv className='header'>

      <FlexDiv className='logo-container' center>
        <img src={logo} className='logo'/>
      </FlexDiv>

      <FlexDiv className='header-right' align='center' justify='sb' >

        <SearchBar/>

        <FlexDiv className='header-options'>
          <IoMdHelpCircleOutline className='header-option' />
          <IoSettingsOutline className='header-option'/>
        


          <FlexDiv className='account-info' align='center' ml={10} pl={10}>
            <FaUserCircle className='header-option'/>
            <p className='account-title'>Account Name</p>
          </FlexDiv>
        </FlexDiv>

      </FlexDiv>
    </FlexDiv>
  )
}
export default Header