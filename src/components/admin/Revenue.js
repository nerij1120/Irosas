import React from 'react'
import RevenueChart from './RevenueChart'
import TopAppBar from './TopAppBar'

const Revenue = () => {
  return (
    <div>
      <TopAppBar title="Thông tin doanh thu"/>
      <RevenueChart/>
    </div>
  )
}

export default Revenue