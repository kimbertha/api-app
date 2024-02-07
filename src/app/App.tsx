/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useState, useEffect } from 'react'
import axios from 'axios'
import { headers,  fakebody } from '../lib/utils'
import { get, run, check } from '../lib/api'
// import { ClipLoader } from 'react-spinners'
import { Options, List } from './appTypes' 
import Option from './Option'
import Modal from './Modal'

const limit = 3

const App = () => {
  const [modal,setModal] = useState<any>(false)

  const [options, setOptions] = useState <Array<Options> | false>(fakebody)
  
  const [list, setList] = useState<Array<Options>>([])
  const [progress, setProgress] = useState <Array<List>>([])
  const [complete, setComplete] = useState<Array<any>>([])
  const [error, setError] = useState <Array<any>>([])


  const sections = [{
    title: 'Waiting',
    list: list
  },{
    title: 'In Progress',
    list: progress
  },{
    title: 'Complete',
    list: complete
  },{
    title: 'Error',
    list: error
  }]

  useEffect(() => {
    setList((list) =>
      list.filter(ar => !progress.find(rm => rm.id === ar.id  )))
  }, [progress])

  useEffect(() => {
    setProgress((progress) =>
      progress.filter(ar => !complete.find(rm => rm.id === ar.id  )))
   
  }, [complete])

  useEffect(() => {
    setProgress((progress) => 
      progress.filter(ar => !error.find(rm => rm.id === ar.id  )))

  }, [error])


  const sendRequest = (option: Options) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('request sent')
        apiRun(option)

        resolve()
      }, 1000)
    })
  }

  /// PROCESS
  const apiRun = async (option:Options) => {
    list.forEach(async (obj:Options) => 
      await axios.post(run, obj.body, headers)
        .then(({ data }) => {
          if (data.status === 'Recieved') {
            setProgress((progress)=> [...progress, { ...obj, result: data }])
            recursiveCheck({ ...obj, startId: data.id })
          }
        })
    )
  }

  const recursiveCheck = ( obj: any) => { 
    const timeout = setTimeout(async () => {
      const { data } = await axios.get(check(obj.startId), headers)
      if (data.status === 'Enquiry not found') {
        setError((error) => [...error, { ...obj, result: data }])     
      } else if (data.status === 'Complete'){
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

      <Modal 
        modal={modal}
        setModal={setModal}/>

      <Option
        list={list}
        setList={setList}
        options={options}/>

      <button onClick={(e) =>{
        e.currentTarget.disabled = true
        setOptions(false)
        apiRun()
      }}>Run</button>

      <div> LIMIT: {limit} </div>

      {sections.map(section => (
        <div key={section.title}>
          <div> {section.title}:</div>
          {section.list.map((b,i) =>  (
            <div key={i}  className='container'>
              <p>Option {b.id}</p>
            </div>  ))} 
        </div>
      ))}
    </div>
  )
}

export default App



