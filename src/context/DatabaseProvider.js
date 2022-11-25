import { createContext, useEffect, useState } from "react";

const DatabaseContext = createContext({});

export const DataBaseProvider = ({children}) =>{
  const [drinks, setDrinks] = useState([
    {
      id: 1,
      name: "Iced milk coffee",
      photo: "/images/drink_1.png",
      category: "Coffee",
      price: 15000,
    },
    {
      id: 2,
      name: "Latte",
      photo: "/images/drink_2.png",
      category: "Coffee",
      price: 15000,
    },
    {
      id: 3,
      name: "Honey orange juice",
      photo: "/images/drink_3.png",
      category: "Fruit juice",
      price: 35000,
    },
    {
      id: 4,
      name: "Hot ginger juice",
      photo: "/images/drink_4.png",
      category: "Fruit juice",
      price: 29000,
    },
    {
      id: 5,
      name: "Hot fresh tea",
      photo: "/images/drink_5.png",
      category: "Tea",
      price: 17000,
    },
  ])
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Coffee",
      photo: "/images/category_1.png",
      quantity: 6,
    },
    {
      id: 2,
      name: "Tea",
      photo: "/images/category_2.png",
      quantity: 5,
    },
    {
      id: 3,
      name: "Milk Tea",
      photo: "/images/category_3.png",
      quantity: 7,
    },
    {
      id: 4,
      name: "Ice blended",
      photo: "/images/category_4.png",
      quantity: 3,
    },
    {
      id: 5,
      name: "Soft drink",
      photo: "/images/category_5.png",
      quantity: 10,
    }
  ]);

  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Lê Văn An",
      address: "34/35 Nguyễn Thị Minh Khai",
      status: "Đang giao hàng",
      phone: "0832328590",
      total: "34000",
    },
    {
      id: 2,
      name: "Nguyễn Hồng Ân",
      address: "12/5 Tạ Quang Bửu",
      status: "Chờ xác nhận",
      phone: "0833658792",
      total: "34000",
    },
    {
      id: 3,
      name: "Tô Minh Vũ",
      address: "20/8 Lý Thường Kiệt",
      status: "Đã giao",
      phone: "0236589745",
      total: "34000",
    },
  ])

  useEffect(()=>{
    
  }, [drinks])

  return(
    <DatabaseContext.Provider value={{ drinks, setDrinks, categories, setCategories, orders, setOrders }}>
      {children}
    </DatabaseContext.Provider>
  )
}

export default DatabaseContext;