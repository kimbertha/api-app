import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Content from './Content'

const App = () => {
  return (
    <>

      <Header/>
      <Sidebar/>
      <div className='main'>

        <Content/>
      </div>

    </>
  )
}
export default App