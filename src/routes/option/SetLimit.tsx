import React, { useState } from 'react'
import FlexDiv from '../../components/atoms/FlexDiv'

interface SetLimitProps {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>
}
const SetLimit = ({ limit, setLimit }:SetLimitProps) => {
  const [showChangeLimit, setShowChangeLimit] = useState<boolean>(false)

  return (
    <FlexDiv className='limit-container' justify='sb'>
      <p> Limit : { !showChangeLimit ? 
        <span onClick={() => setShowChangeLimit(true)} className='pointer'>{limit}</span> 
        :  <input type="number" value={limit} min="0" max="99999999" onChange={(e) => setLimit(Number(e.target.value))}  />}
      </p>
      {showChangeLimit && 
      <div>
        <button onClick={() => setShowChangeLimit(false)}>Save</button>
      </div>}
    </FlexDiv>
  )
}
export default SetLimit