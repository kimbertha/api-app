/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import FlexDiv from '../../components/atoms/FlexDiv'
import ProgressOverview from '../../components/overview/ProgressOverview'
import Section from './Section'
import './requests.scss'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineIncompleteCircle } from 'react-icons/md'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'



const Requests = ({ list, progress, complete, limit, batchOptions }:any) => {

  const sections = [
    { section: list, 
      title: 'Waiting',
      sub: 'Requests in queue',
      icon: <AiOutlineLoading3Quarters className='icon' />
    },
    { section: progress, 
      title: 'Progress' ,
      sub: 'Requests receiving data,',
      icon: <MdOutlineIncompleteCircle className='icon'/>

    },
    { section: complete, 
      title: 'Complete',
      sub: 'Data request complete and ready to view',
      icon: <FaCheckCircle  className='icon' />
    }
  ]



  return (
    <FlexDiv className='requests-container'>
      <div className='sections-container'>

        <FlexDiv align='center' justify='sb'>
          <h1>Requests</h1>

          <div>
            <button className='button' onClick={batchOptions}>Start</button>
            <button className='button'>Cancel all</button>
          </div>
        </FlexDiv>
        
        <p> Limit : {limit}</p>

        {sections.map(section=> 
          <Section data={section}/>
        )}
      </div>

      <div className='overview-container'>
        <ProgressOverview
          list={list}
          progress={progress}
          complete={complete}
          limit={limit}
        />
      </div>

    </FlexDiv>
  )
}
export default Requests