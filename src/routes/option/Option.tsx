import React from 'react'
import FlexDiv from '../../components/atoms/FlexDiv'
import { useNavigate } from 'react-router-dom'
import { Options } from '../../types/appTypes'


interface OptionProps {
    options: Options[];
    list: Options[];
    setList:  React.Dispatch<React.SetStateAction<Options[]>>
    setOptions:React.Dispatch<React.SetStateAction<Options[]>>
    moveQueue: () => void
}
const Option = ({ options,  list , setList, setOptions, moveQueue }:OptionProps) => {
  const navigate = useNavigate()

  const addOption = (option: Options) => {
    setList(list.indexOf(option) < 0 ? [...list, option] : list.filter(li => li.id !== option.id))
  }
    
  return (
    <>
      <FlexDiv dir='column'> 
        {options.map((option: Options,i: React.Key | null | undefined) => 
          <div key={i}>  
            <input 
              className='option' 
              type='checkbox' 
              value={option.id} 
              onClick={() => addOption(option)}
            />
            <label> Option {option.id}</label>
          </div>
        )}
      </FlexDiv>
      <button onClick={(e) =>{
        e.currentTarget.disabled = true
        navigate('/progress')
        moveQueue
      }}>Run</button>
    </>
  
  )
}

export default Option

