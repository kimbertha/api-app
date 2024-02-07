import React from 'react'
import FlexDiv from '../components/FlexDiv'
import { Options } from './appTypes'

interface OptionProps {
    options: Options[] | false;
    list: Options[];
    setList:  React.Dispatch<React.SetStateAction<Options[]>>
}
const Option = ({ options,  list , setList }:OptionProps) => {

  const addOption = (option: Options) => {
    setList(list.indexOf(option) < 0 ? [...list, option] : list.filter(li => li.id !== option.id))
  }
    
  return (
    <>
      {options &&
    <FlexDiv dir='col' justify='fs'> 
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
      }       
    </>
  )
}

export default Option

