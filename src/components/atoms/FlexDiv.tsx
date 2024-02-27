/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import  styled from 'styled-components'

interface FlexDivProps {
  children: React.ReactNode;
  className?: string;
  m?:number;
  ml?:number;
  mr?:number;
  mt?:number;
  mb?:number;
  p?:number;
  pl?:number;
  pr?:number;
  pt?:number;
  pb?:number;
  dir?: 'row' |'column';
  align?:  'center'  | 'fe'  |'fs'; 
  justify? :  'center'  | 'fe'  |'sb'; 
  center?: boolean;
  fw?:boolean;
  fh?:boolean;

}

const centerClass = ` 
justify-content: center;
alight-items:center;
flex-direction: column;
`
const flexEnd = 'flex-end;'
const flexStart  = 'flex-start;'
const fullWidth = 'width: 100%;'
const fullHeight = 'height: 100%;'

const Container =  styled.div<FlexDivProps>`
display: flex;


${({ center }) => center && centerClass}

${({ fw }) => fw && fullWidth}
${({ fh }) => fh && fullHeight}


${({ m }) => m && `margin: ${m};` }
${({ ml }) => ml && `margin-left: ${ml}px;` }
${({ mr }) => mr && `margin-right: ${mr}px;` }
${({ mt }) => mt && `margin-top: ${mt}px;` }
${({ mb }) => mb && `margin-bottom: ${mb}px;` }

${({ p }) => p && `padding: ${p};` }
${({ pl }) => pl && `padding-left: ${pl}px;` }
${({ pr }) => pr && `padding-right: ${pr}px;` }
${({ pt }) => pt && `padding-top: ${pt}px;` }
${({ pb }) => pb && `padding-bottom: ${pb}px;` }

${({ dir }) => dir && `flex-direction: ${
    dir === 'row' ? 'row;'
      : 'column;'}` }

${({ align }) => align && `align-items: ${
    align === 'center' ? 'center;' 
      : align === 'fe' ? flexEnd
        : flexStart}` }

${({ justify }) => justify && `justify-content:${
    justify === 'center' ? 'center;' 
      : justify === 'fe' ?  flexEnd
        : justify === 'sb' ? 'space-between' 
          : flexStart}` }
      
`
const FlexDiv = ({  children, ...otherProps }:FlexDivProps) => {
  return (
    <Container {...otherProps} >
      {children}
    </Container>

  )
}

export default FlexDiv

