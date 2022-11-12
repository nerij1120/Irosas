import React, {useState} from 'react'
import { Container, Table } from 'react-bootstrap'
import AddButton from './AddButton'
import AdminPagination from './AdminPagination'
import DrinkItem from './DrinkItem'
import AddDrinkModal from './AddDrinkModal'
import EditDrinkModal from './EditDrinkModal'
import DeleteDrinkModal from './DeleteDrinkModal'

const DrinkTable = () => {
  const [showDrinkModal, setShowDrinkModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openDrinkModal = () =>{
    setShowDrinkModal(true)
  }

  const openEditModal = () =>{
    setShowEditModal(true)
  }

  const openDeleteModal = () =>{
    setShowDeleteModal(true)
  }

  return (
    <Container className='mt-5 d-flex flex-column' fluid>
      <AddButton onClick={openDrinkModal} text="Thêm thức uống" className="d-flex ms-auto me-2" showDropdown={false}/>
      <Table responsive="lg" className='mt-3'>
        <thead>
          <tr style={{ verticalAlign:"middle" }}>
            <th>Tên</th>
            <th>Hình ảnh</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <DrinkItem openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
          <DrinkItem/>
          <DrinkItem/>
          <DrinkItem/>
          <DrinkItem/>
        </tbody>
      </Table>
      <AdminPagination className="d-flex ms-auto me-2  mt-5"/>
      <AddDrinkModal show={showDrinkModal} onHide={()=>setShowDrinkModal(false)}/>
      <EditDrinkModal show={showEditModal} onHide={()=>setShowEditModal(false)}/>
      <DeleteDrinkModal show={showDeleteModal} onHide={()=>setShowDeleteModal(false)}/>
    </Container>
  )
}

export default DrinkTable