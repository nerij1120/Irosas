import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'

const DropDownAccount = () => {
  return (
    <div  className='ms-auto d-flex flex-row align-items-center dropdown-account'>
      <MdOutlineAccountCircle className='me-2' style={{ width: "20px", height:"20px" }}/>
      <NavDropdown title="jayson@vinova.com.sg"  id="collapsible-nav-dropdown">
          <NavDropdown.ItemText>Chào Admin</NavDropdown.ItemText>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">
            Thông tin cá nhân 
          </NavDropdown.Item>
          <NavDropdown.Item href="#">Đăng xuất</NavDropdown.Item>
      </NavDropdown>
    </div>
    
  )
}

export default DropDownAccount