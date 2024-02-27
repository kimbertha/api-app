/* eslint-disable no-async-promise-executor */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useState, useEffect } from 'react'
import axios from 'axios'
import { headers,  fakebody } from './lib/utils'
import { get, run, check } from './lib/api'
// import { ClipLoader } from 'react-spinners'
import { Options, List } from './types/appTypes' 
import Option from './routes/option/Option'
import { Route, Routes } from 'react-router-dom'
import Requests from './routes/requests/Requests'

const App = () => {

  const [queue, setQueue] = useState<Array<Options>>([])
  const [limit, setLimit] = useState<number>(2)
  const [options, setOptions] = useState <Array<Options>>(fakebody)

  const [list, setList] = useState<Array<Options>>(fakebody)
  const [progress, setProgress] = useState <Array<List>>([])
  const [complete, setComplete] = useState<Array<any>>([])

  const [counter, setcounter] = useState(0)

  // move ui 
  useEffect(() => {
    setList((list) =>
      list.filter(ar => !progress.find(rm => rm.id === ar.id  )))
  }, [progress])

  useEffect(() => {
    setProgress((progress) =>
      progress.filter(ar => !complete.find(rm => rm.id === ar.id  )))
    setQueue((queue) =>
      queue.filter(ar => !complete.find(rm => rm.id === ar.id  )))
  }, [complete])

  // list queue
  useEffect(() => {
    setList((list) => list.filter(ar => !progress.find(rm => rm.id === ar.id  )))

    if (queue.length === 0 && list.length > 0 && counter > 0) {
      const timer = setTimeout(() => {
        moveQueue()
      }, 1000) 

      return (() => clearTimeout(timer))
    }

    if (queue.length === limit)  {
      queue.map(option => apiRun(option))
    }

  }, [queue])


  // QUEUE
  const moveQueue = () => {
    setQueue([...list.slice(0,limit)])
    setcounter(1)
  }
  
  /// PROCESS
  const apiRun = async (option:Options) => {
    return new Promise(async () => {
      const { data } =  await axios.post(run, option.body, headers)
      if (data.status === 'Recieved') {
        setProgress((progress)=> [...progress, { ...option, result: data }])
        recursiveCheck({ ...option, startId: data.id })
      }
    })
  }

  const recursiveCheck = ( obj: any) => { 
    const timeout = setTimeout(async () => {
      const { data } = await axios.get(check(obj.startId), headers)
      if (data.status === 'Enquiry not found' || data.status === 'Complete'){
        apiGet(obj)
      } else {
        recursiveCheck(obj)
      }
      clearTimeout(timeout)
    }, 1000)
  }


  const apiGet = async ( obj: any) => {
    const { data } = await axios.get(get(obj.startId), headers)
    setComplete((complete) => [...complete, { ...obj, result: data }])
  }

  return (
    <div className="App">

      <Routes>
        <Route path='/progress' element={  
          <Requests   
            progress={progress}
            complete={complete}
            limit={limit}
            list={list}
            batchOptions={moveQueue}
            setLimit={setLimit}
          />}/>
        

        <Route path='/options' element={ 
          <Option
            list={list}
            setList={setList}
            options={options}
            setOptions={setOptions}
            moveQueue={moveQueue}
          />
        }/>
      </Routes>
    </div>
  )
}

export default App

