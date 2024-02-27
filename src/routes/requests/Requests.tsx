/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import FlexDiv from '../../components/atoms/FlexDiv'
import ProgressOverview from '../../components/overview/ProgressOverview'
import { Options, List } from '../../types/appTypes'
import { setFilter } from './fetchProcess'
import { apiRun } from './fetchProcess'
import './requests.scss'
import RequestSections from './RequestSections'

interface RequestsProps {
  waiting: List[];
  setWaiting:React.Dispatch<React.SetStateAction<Options[]>>
  limit: any;
  setLimit: any;
}

const Requests = ({ waiting, setWaiting,  limit, setLimit }:RequestsProps) => {
  const [start, setStart] = useState(false)
  const [queue, setQueue] = useState<any>([])
  const [progress, setProgress] = useState <any>([])
  const [complete, setComplete] = useState<any>([])

  const moveQueue = () => {
    setTimeout(() => setQueue([...waiting.slice(0,limit)]),1000)
    setStart(true)
  }

  useEffect(() =>{
    setFilter(setWaiting,progress)
  }, [queue])

  useEffect(()=> {
    setFilter(setWaiting,progress)
  }, [progress])


  useEffect(() => {
    setFilter(setProgress,complete)
    setFilter(setQueue,complete)
  }, [complete])


  // monitor fetch
  useEffect(() =>{
    if (queue.length <= 0 && waiting.length > 0 && start) {
      if (waiting.length < limit) {
        setLimit(waiting.length)
        moveQueue()
      } else {
        moveQueue()
      }
    }

    if (queue.length === limit) queue.map((option:Options) => apiRun(option, setProgress, setComplete))
    
  },[queue])

  return (
    <FlexDiv className='requests-container'>

      <RequestSections 
        waiting={waiting}
        progress={progress}
        complete={complete}
        moveQueue={moveQueue}
        setStart={setStart}/>

      <ProgressOverview
        waiting={waiting}
        progress={progress}
        complete={complete}
        limit={limit}
      />

    </FlexDiv>
  )
}
export default Requests