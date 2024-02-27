import React, { useState } from 'react'
import axios from 'axios'
import { headers } from '../../lib/utils'
import Input from '../../components/atoms/Input/Input'
import FlexDiv from '../../components/atoms/FlexDiv'
import { assumptionSummaryLink, assumptionLink } from '../../lib/api'

const initForm = {
  customer: 'AIG',
  obligor: false,
  date: '',
  assumption: '',
  assumptionSummary: ''
}

const OptionForm = ({ waiting, setWaiting }) => {

  const [assumptions, setAssumptions] = useState([])
  const [assumptionsSummaries, setAssumptionsSummaries] = useState([])
  const [formData, setFormData] = useState<any>(initForm)


  const getAssumptions = async () => {
    const assumptions = await axios.get(assumptionLink(formData.customer) ,headers)
    setAssumptions(assumptions.data)
    const assumptionSummaries = await axios.get(assumptionSummaryLink(formData.customer) ,headers)
    setAssumptionsSummaries(assumptionSummaries.data)
  }

  const addToWaitingList = () =>{
    setWaiting([...waiting, { id: waiting.length + 1 ,body: formData }])
    setFormData(initForm)
  }

  const formFields = [
    {    formField: 'obligor',
      title: 'Obligor',
      type: 'boolean'
    }, {
      formField: 'date',
      title: 'Date',
      type: 'date'
    }, {
      formField: 'assumption',
      title: 'Assumption',
      type: 'select',
      options: assumptions
    } ,{ 
      formField: 'assumptionSummary',
      title: 'Assumption Summary',
      type: 'select',
      options: assumptionsSummaries
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, field: string) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  return (
    <FlexDiv dir='column'>

      <h1>Add Query</h1>

      <FlexDiv dir='column' className='field'>
        <Input 
          formField='customer'
          title='Customer'
          type='text'
          value={formData.customer} 
          handleChange={(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>
            handleChange(e, 'customer')}
        />
        <button onClick={getAssumptions}>Search</button>
      </FlexDiv>

      {formFields.map(field => 
        <FlexDiv key={field.title} dir='column' className='field'>
          <Input 
            {...field} 
            value={formData[field.formField]} 
            handleChange={(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>
              handleChange(e, field.formField)}
          />
        </FlexDiv>
      )}
      <button onClick={addToWaitingList}>Add Query</button> 
    </FlexDiv>
  )
}

export default OptionForm