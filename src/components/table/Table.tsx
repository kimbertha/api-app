/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './table.scss'
import FlexDiv from '../atoms/FlexDiv'
import { GoAlertFill } from 'react-icons/go'

interface TableProps {
  rows: any;
  columns:any;
}

const Table = ({ columns,rows }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {rows.map((row:any) => <td key={row.header}>{row.header}</td>)}
        </tr>
      </thead>
      <tbody>
        {columns.length > 0 ?
          columns.map((column: any, i: number) =>
            <tr key={i}>
              {rows.map((row:any) => 
                <td key={row.header}>{ row.component ? row.component(column) : column[row.id]}</td>
              )}
            </tr>
          ) : 
      
          <tr>
            <td colSpan={10}>
              <FlexDiv center dir='row'>
                <FlexDiv mr={10}><GoAlertFill/></FlexDiv>
                <p>No Data</p>
              </FlexDiv>
            </td>
          </tr>
        
        }

      </tbody>
    </table>
  )
}

export default Table