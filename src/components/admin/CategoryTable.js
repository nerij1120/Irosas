import React, {useState} from 'react'
import { Container, Table } from 'react-bootstrap'
import AddButton from './AddButton'
import AdminPagination from './AdminPagination'
import CategoryItem from './CategoryItem'
import AddCategoryModal from './AddCategoryModal'
import EditCategoryModal from './EditCategoryModal'
import DeleteCategoryModal from './DeleteCategoryModal'

const CategoryTable = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openCategoryModal = () =>{
    setShowCategoryModal(true)
  }

  const openEditModal = () =>{
    setShowEditModal(true)
  }

  const openDeleteModal = () =>{
    setShowDeleteModal(true)
  }

  
  return (
    <Container className='mt-5 d-flex flex-column' fluid>
      <AddButton onClick={openCategoryModal} text="Thêm danh mục" className="d-flex ms-auto me-2" showDropdown={false}/>
      <Table responsive="lg" className='mt-3'>
      <thead>
        <tr style={{ verticalAlign:"middle" }}>
          <th>Tên</th>
          <th>Hình ảnh</th>
          <th>Số lượng</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <CategoryItem openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
      </tbody>
    </Table>
    <AdminPagination className="d-flex ms-auto me-2 mt-5"/>
    <AddCategoryModal show={showCategoryModal} onHide={()=>setShowCategoryModal(false)}/>
    <EditCategoryModal show={showEditModal} onHide={()=>setShowEditModal(false)}/>
    <DeleteCategoryModal show={showDeleteModal} onHide={()=>setShowDeleteModal(false)} />
    </Container>
  )
}

export default CategoryTable