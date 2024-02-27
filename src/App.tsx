import { useState } from 'react'
import {  fakebody } from './lib/utils'
import { Options } from './types/appTypes' 
import Option from './routes/option/Option'
import { Route, Routes } from 'react-router-dom'
import Requests from './routes/requests/Requests'

const App = () => {
  const [waiting, setWaiting] = useState<Array<Options>>(fakebody)
  const [limit, setLimit] = useState(3)



  return (
    <div className="App">

      <Routes>
        <Route path='/progress' element={  
          <Requests   
            waiting={waiting}
            setWaiting={setWaiting}

            limit={limit}
            setLimit={setLimit}

          />}/>
        

        <Route path='/options' element={ 
          <Option
            limit={limit}
            setLimit={setLimit}
            
            waiting={waiting}
            setWaiting={setWaiting}

          />
        }/>
      </Routes>
    </div>
  )
}

export default App

