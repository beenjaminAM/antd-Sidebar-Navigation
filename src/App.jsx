import React from 'react'
import AuxRoute from './components/common/AuxRoute'
import LayoutApp from './Layout/LayoutApp'
import useWindowSize from './Layout/useWindowSize'

const App = () => {
  const {width} = useWindowSize()

  return (
    <AuxRoute element={<LayoutApp width={width}/>} >
        
        {/* 
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        */}
    </AuxRoute>
  )
}

export default App