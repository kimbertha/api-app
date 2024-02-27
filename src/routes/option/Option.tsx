import React from 'react'
import FlexDiv from '../../components/atoms/FlexDiv'
import OptionForm from './OptionForm'
import { Options } from '../../types/appTypes'
import './option.scss'
import SetLimit from './SetLimit'
import OptionTable from './OptionTable'

interface OptionProps {
  waiting: Options[];
  setWaiting:  React.Dispatch<React.SetStateAction<Options[]>>
  limit: any
  setLimit: any
}

const Option = ({ waiting , setWaiting,  limit, setLimit }: OptionProps) => {

  return (
    <FlexDiv>

      <OptionForm
        waiting={waiting}
        setWaiting={setWaiting}/>

      <FlexDiv dir='column'>
        <h1>Queries waiting</h1>
        <SetLimit 
          limit={limit} 
          setLimit={setLimit}/>
        
        <OptionTable waiting={waiting}/>
      </FlexDiv>

      

    </FlexDiv>
  )
}

export default Option

