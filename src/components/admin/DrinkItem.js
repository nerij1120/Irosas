import React from 'react'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import logo from './../../img/login_bg.jpg';
import SmallImage from './SmallImage';

const DrinkItem = ({openEditModal,openDeleteModal}) => {
  return (
    <tr style={{ verticalAlign:"middle", backgroundColor: "white" }}>
          <td>Iced milk coffee</td>
          <td><SmallImage src={logo}/></td>
          <td>Coffee</td>
          <td>15.000đ</td>
          <td>
            <EditButton openEditModal={openEditModal}/>
            <DeleteButton openDeleteModal={openDeleteModal}/>
          </td>
    </tr>
  )
}

export default DrinkItem