import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import AccountItem from './AccountItem'
import AdminPagination from './AdminPagination'
import DropDownButton from './DropDownButton'
import { AiOutlinePlus } from 'react-icons/ai'
import AddAccountModal from './AddAccountModal'


const AccountTable = () => {
  const [showStaffModal, setShowStaffModal] = useState(false);
  const [showManagerModal, setShowManagerModal] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const handleAddAccount = (newAccount) =>{
    setAccounts([...accounts, newAccount])
  }

  const handleEditAccount = (newAccount)=>{
    setAccounts(
      accounts.map((acc)=>
        acc.id === newAccount.id ? newAccount: acc
      )
    )
  }

  const handleDeleteAccount = (id)=>{
    setAccounts(
      accounts.filter((acc) => acc.id !== id)
    )
  }


  const openStaffModal = () =>{
    setShowStaffModal(true)
  }

  const openManagerModal = () =>{
    setShowManagerModal(true)
  }



  return (
    <Container className='mt-5 d-flex flex-column' fluid>
      <DropDownButton openStaffModal={openStaffModal} openManagerModal={openManagerModal} startLogo={<AiOutlinePlus className='me-2'/>} text="Thêm tài khoản" className="d-flex ms-auto me-2"/>
      <Table responsive="lg" className='mt-3'>
      <thead>
        <tr style={{ verticalAlign:"middle" }}>
          <th>Tên</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Chức vụ</th>
          <th>Số điện thoại</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      {accounts.length > 0 ?

      <tbody>
        <>
          {accounts.map((acc)=>(
            <AccountItem key={acc.id} account={acc} editAccount={handleEditAccount} deleteAccount={handleDeleteAccount}/>
          ))}
        </>
      </tbody> : <h2>No Account to show</h2>
    } 
    </Table>
    <AdminPagination className="d-flex ms-auto me-2  mt-5"/>
    <AddAccountModal show={showStaffModal} onHide={()=>setShowStaffModal(false)} addAccount={handleAddAccount} type={1}/>
    <AddAccountModal show={showManagerModal} onHide={()=>setShowManagerModal(false)} addAccount={handleAddAccount} type={2}/>
  </Container>
  )
}

export default AccountTable