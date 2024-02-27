/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import FlexDiv from '../../components/atoms/FlexDiv'
import { MdMoreHoriz } from 'react-icons/md'
import PopMenu from '../../components/atoms/PopMenu/PopMenu'
import Table from '../../components/table/Table'
import './requests.scss'

interface SectionProps {
  data:{
  section :any;
  title: string;
  sub? : string;
  icon?: any;
  }
}

const Section = ({ data }:SectionProps) => {
  const [menu, setMenu] = useState(false)
  const [table,setTable] = useState(true)
  const { section,icon,title,sub } = data

  const menuOptions = [
    { title: table ? 'Hide table' : 'Show table',
      func: table ? () => setTable(false)  : () => setTable(true)
    }
  ]


  const row = [{
    header: 'Option',
    id: 'id'
  },
  { header: 'Obligor',
    component: (option:any) =>option.body?.obligorRef  
  },
  { header: 'Customer',
    component: (option:any) => option.body?.customer  
  },
  { header: 'Date',
    component: (option:any) => option.body?.overrideAnalysisDate
  }]

  const complete = [
    { header: 'Result',
      component: (option:any) => option.result === 'Run request not complete. Current status: Enquiry not found' ? 
        <p className='result' style={{ backgroundColor: 'red' }}>ERROR</p> 
        : <p className='result' style={{ backgroundColor: 'GREEN' }}>COMPLETE</p>
    },
    {
      header: 'View',
      component: (option:any) =>  <FlexDiv center><button>View</button></FlexDiv>
    }]


  return (
    <div className='section-container'>

      <FlexDiv className='section-header' justify='sb'>
        <FlexDiv>
          {icon}
          <div>
            <h1>{title}</h1>
            <p className='sub'>{sub}</p>
          </div>
        </FlexDiv>

        <div>
          <MdMoreHoriz className='more' onClick={() => setMenu(!menu)}/>
          <PopMenu options={menuOptions} show={menu} setShow={setMenu}/>
        </div>
      </FlexDiv>

      {table && <Table 
        columns={section}
        rows= {title === 'Complete' ? [...row, ...complete] : row}/>}
    </div>
  )
}

export default Section
