import React from 'react'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import logo from './../../img/login_bg.jpg';
import SmallImage from './SmallImage';

const CategoryItem = ({openEditModal,openDeleteModal}) => {
  return (
    <tr style={{ verticalAlign:"middle", backgroundColor: "white" }}>
          <td>Coffee</td>
          <td><SmallImage src={logo}/></td>
          <td>6</td>
          <td>
            <EditButton openEditModal={openEditModal}/>
            <DeleteButton openDeleteModal={openDeleteModal}/>
          </td>
    </tr>
  )
}

export default CategoryItem