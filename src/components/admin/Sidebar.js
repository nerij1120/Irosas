import React from 'react'
import SidebarNav from './SidebarNav'

const Sidebar = () => {
  return (
    <div className='d-flex flex-column flex-shrink-0 fixed-bar p-2' style={{ backgroundColor: "#DFD3C3" }}>
      <h2 className='ms-4' style={{ color: "#7D6E83" }}>Irosas</h2>
      <SidebarNav/>
    </div>
  )
}

export default Sidebar