import React from 'react'
import AuxRoute from './components/common/AuxRoute'
import LayoutApp from './Layout/LayoutApp'

const Index = () => {
  return (
    <AuxRoute element={<LayoutApp />} >
        
        {/* 
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        */}
    </AuxRoute>
  )
}

export default Index