/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import FlexDiv from '../atoms/FlexDiv'
import { Options, List } from '../../types/appTypes'
import './overview.scss'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineIncompleteCircle,MdOutlineRunningWithErrors } from 'react-icons/md'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import ProgressBar from '@ramonak/react-progress-bar'
import { HiArrowsExpand } from 'react-icons/hi'





interface OverviewProps {
  waiting:Options[];
  progress: List[];
  complete:any[];
  limit: number;
}

const ProgressOverview = ({ waiting, progress, complete }: OverviewProps ) => {

  const sections = [{
    title: 'Waiting',
    values: waiting,
    icon: <AiOutlineLoading3Quarters className='overview-icon' 
      style={{  backgroundColor: 'blue' }}
    /> ,
    color: 'blue'
  },
  {
    title: 'In Progress',
    values: progress,
    icon: <MdOutlineIncompleteCircle className='overview-icon' 
      style={{  backgroundColor: 'orange' }}
    />,
    color: 'orange'
  },{
    title: 'Complete',
    values: complete.filter(unit => unit.result.id ),
    icon: <FaCheckCircle  className='overview-icon' 
      style={{  backgroundColor: 'green' }}
    />,
    color: 'green'
  },{
    title: 'Error',
    values: complete.filter(unit => !unit.result.id ),
    icon: <MdOutlineRunningWithErrors className='overview-icon' 
      style={{  backgroundColor: 'red' }}
    />,
    color: 'red'
  }]


  const totalQueries = waiting.length + progress.length + complete.length

  
  return (
    <div className='overview-container'>
      <FlexDiv className='overview-cont' dir='column'>

        {sections.map(section => {
          const percent = section.values.length / totalQueries * 100
          return (
            <FlexDiv key={section.title} className='overview-unit'  dir='column'>
              <HiArrowsExpand className='open-table' />

              <FlexDiv align='center' className='overview-header'>
                {section.icon}
                <p className='title'>{section.title}</p> 
              </FlexDiv>


              <div className='overview-content'>

                <div className='number'>
                  <span>{section.values.length}</span><small>/ {totalQueries} Queires </small>  
                </div>
          
                <ProgressBar
                  completed={Math.floor(percent)} 
                  bgColor={section.color} 
                  className='progress-bar'
                  labelSize='10px' 
                  height='12px'/>
              </div>

            </FlexDiv>
          )
        })}

        
  
    
    
      </FlexDiv>
    </div>
  )
}

export default ProgressOverview