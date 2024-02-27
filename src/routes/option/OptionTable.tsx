import React from 'react'
import { useNavigate } from 'react-router-dom'
import FlexDiv from '../../components/atoms/FlexDiv'

const OptionTable = ({ waiting }) =>{
  const navigation = useNavigate()
  
  return (
    <>
      {waiting.map((option,i) => 
        <FlexDiv key={i} className='option-unit'>
          <p>Option {option.id}</p>
          <button>See more...</button>
          <button>Delete</button>
        </FlexDiv>)}
      <button onClick={() => {
        navigation('/progress')

      }}>Continue</button>
    </>
  )
}

export default OptionTable