import React from 'react'
import TopAppBar from '../admin/TopAppBar'
import OrderTable from './OrderTable'

const StaffPage = () => {
  return (
    <div>
        <TopAppBar title="Quản lý tài khoản"/>
        <OrderTable/>
    </div>
  )
}

export default StaffPage