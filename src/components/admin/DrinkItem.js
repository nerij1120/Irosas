import React, {useState} from 'react'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import logo from './../../img/login_bg.jpg';
import SmallImage from './SmallImage';
import EditDrinkModal from './EditDrinkModal'
import DeleteDrinkModal from './DeleteDrinkModal'

const DrinkItem = ({drink, editDrink, deleteDrink}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openEditModal = () =>{
    setShowEditModal(true)
  }

  const openDeleteModal = () =>{
    setShowDeleteModal(true)
  }

  return (
    <>
    <tr style={{ verticalAlign:"middle", backgroundColor: "white" }}>
          <td>{drink.name}</td>
          <td><SmallImage src={drink.photo}/></td>
          <td>{drink.category}</td>
          <td>{drink.price.toLocaleString()}</td>
          <td>
            <EditButton openEditModal={openEditModal}/>
            <DeleteButton openDeleteModal={openDeleteModal}/>
          </td>
    </tr>
    <EditDrinkModal drink={drink} show={showEditModal} onHide={()=>setShowEditModal(false)} editDrink={editDrink}/>
    <DeleteDrinkModal drink={drink} show={showDeleteModal} onHide={()=>setShowDeleteModal(false)} deleteDrink={deleteDrink}/>
    </>
  )
}

export default DrinkItem