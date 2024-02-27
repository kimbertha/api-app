/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import axios from 'axios'
import { Options } from '../../types/appTypes'
import { headers } from '../../lib/utils'
import { get, run, check } from '../../lib/api'

export const setFilter = (setter:React.Dispatch<React.SetStateAction<any[]>>, array:any) => {
  setter((prev) => prev.filter(ar => !array.find(rm => rm.id === ar.id  )))
}

export const apiRun = async (option:Options, setProgress: React.Dispatch<any>, setComplete: React.Dispatch<any>) => {
  console.log('started')
  try {
    const { data } =  await axios.post(run, option.body, headers)
    if (data.status === 'Recieved') {
      setProgress((progress)=> [...progress, { ...option, result: data }])
      recursiveCheck({ ...option, startId: data.id }, setProgress, setComplete)
    } 
  } catch (err ){
    console.log(err)
    // if fails take out of queue and put into complete with error
  }
}

  
const recursiveCheck = ( obj: any, setProgress:React.Dispatch<any>, setComplete:React.Dispatch<any>) => { 
  const timeout = setTimeout(async () => {
    const { data } = await axios.get(check(obj.startId), headers)
    if (data.status === 'Enquiry not found' || data.status === 'Complete'){
      apiGet(obj,setComplete)
    } else {
      recursiveCheck(obj, setProgress, setComplete)
    }
    clearTimeout(timeout)
  }, 1000)
}

const apiGet = async ( obj: any, setComplete: React.Dispatch<any>) => {
  const { data } = await axios.get(get(obj.startId), headers)
  setComplete((complete) => [...complete, { ...obj, result: data }])
}
