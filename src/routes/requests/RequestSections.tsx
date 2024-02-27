import React from 'react'
import FlexDiv from '../../components/atoms/FlexDiv'
import Section from './Section'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineIncompleteCircle } from 'react-icons/md'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


const RequestSections = ({  moveQueue,setStart , waiting, complete, progress }) => {

  const sections = [
    { section: waiting, 
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
    <div className='sections-container'>
      <FlexDiv align='center' justify='sb'>
        <h1>Requests</h1>
        <div>
          <button className='button' onClick={moveQueue}>Start</button>
          <button className='button' onClick={() => setStart(false)}>Cancel all</button>
        </div>
      </FlexDiv>

      {sections.map(section=> 
        <Section data={section} key={section.title}/>
      )}
    </div>
  )
}
export default RequestSections