/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import  styled from 'styled-components'

const centerClass = ` 
justify-content: center;
alight-items:center;
flex-direction: column;
background: pink;'
`
const flexEnd = 'flex-end;'
const flexStart  = 'flex-start;'
const fullWidth = 'width: 100%;'
const fullHeight = 'height: 100%;'

const Container =  styled.div`
display: flex;
border: 2px solid red;

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
      : justify === 'fe' ? flexEnd
        : flexStart}` }
      
`
const FlexDiv = ({  children, ...otherProps }) => {
  return (
    <Container {...otherProps} >
      {children}
    </Container>

  )
}

export default FlexDiv

