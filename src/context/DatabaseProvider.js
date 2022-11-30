import { createContext, useEffect, useState } from "react";

const DatabaseContext = createContext({});

export const DataBaseProvider = ({children}) =>{
  const [drinks, setDrinks] = useState([
    {
      id: 1,
      name: "Iced Milk Coffee",
      photo: "/assets/image/icecoffee.png",
      description: "",
      category: 1,
      price: 15000,
    },
    {
      id: 2,
      name: "Latte",
      photo: "/assets/image/latte.png",
      description: "",
      category: 1,
      price: 19000,
    },
    {
      id: 3,
      name: "Honey Orange Juice",
      photo: "/assets/image/orangejuice.png",
      description: "",
      category: 7,
      price: 35000,
    },
    {
      id: 4,
      name: "Hot Ginger Juice",
      photo: "/assets/image/gingerjuice.png",
      description: "",
      category: 7,
      price: 29000,
    },
    {
      id: 5,
      name: "Hot Fresh Tea",
      photo: "/assets/image/freshtea.png",
      description: "",
      category: 2,
      price: 17000,
    },
    {
      id: 6,
      name: "Thai Tea",
      photo: "/assets/image/thaitea.png",
      description: "",
      category: 3,
      price: 25000,
    },
    {
      id: 7,
      name: "Strawberry Cocktail",
      photo: "/assets/image/strawberry.png",
      description: "",
      category: 8,
      price: 39000,
    },
    {
      id: 8,
      name: "Americano",
      photo: "/assets/image/americano.png",
      description: "",
      category: 1,
      price: 20000,
    },
    {
      id: 9,
      name: "Capuchino",
      photo: "/assets/image/capuchino.png",
      description: "",
      category: 1,
      price: 22000,
    },
    {
      id: 10,
      name: "Black Coffee",
      photo: "/assets/image/blackcoffee.png",
      description: "",
      category: 1,
      price: 15000,
    },
    {
      id: 11,
      name: "Hot Chocolate",
      photo: "/assets/image/chocolate.png",
      description: "",
      category: 6,
      price: 27000,
    },
    {
      id: 12,
      name: "Matcha Ice Blended",
      photo: "/assets/image/matcha.png",
      description: "",
      category: 4,
      price: 39000,
    },
  ])
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Coffee",
      photo: "/images/1.jpg",
      quantity: 5,
    },
    {
      id: 2,
      name: "Tea",
      photo: "/images/2.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Milk Tea",
      photo: "/images/6.jpg",
      quantity: 1,
    },
    {
      id: 4,
      name: "Ice Blended",
      photo: "/images/3.jpg",
      quantity: 1,
    },
    {
      id: 5,
      name: "Soft Drink",
      photo: "/images/9.jpg",
      quantity: 0,
    },
    {
      id: 6,
      name: "Chocolate",
      photo: "/images/4.jpg",
      quantity: 1,
    },
    {
      id: 7,
      name: "Fruit Juice",
      photo: "/images/5.jpg",
      quantity: 2,
    },
    {
      id: 8,
      name: "Cocktail",
      photo: "/images/7.jpg",
      quantity: 1,
    },
    {
      id: 9,
      name: "Shakes",
      photo: "/images/8.jpg",
      quantity: 0,
    },
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
  ]);

  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      userName: 'Nguyễn Văn A',
      drink: 1,
      comment: 'Cà phê ngon, giao nhanh',
      rating: 5,
    },
    {
      id: 2,
      userName: 'Nguyễn Văn B',
      drink: 10,
      comment: 'Cà phê đen nhưng làm quá ngọt',
      rating: 4,
    },{
      id: 3,
      userName: 'Nguyễn Văn C',
      drink: 2,
      comment: 'Cà phê ngon, giao nhanh',
      rating: 5,
    },{
      id: 4,
      userName: 'Nguyễn Văn D',
      drink: 9,
      comment: 'Giao hàng quá chậm',
      rating: 2,
    },{
      id: 5,
      userName: 'Nguyễn Văn E',
      drink: 8,
      comment: 'Cà phê ngon, giao nhanh',
      rating: 5,
    },{
      id: 6,
      userName: 'Nguyễn Văn F',
      drink: 4,
      comment: 'Thái độ phục vụ chưa tốt',
      rating: 4,
    },{
      id: 7,
      userName: 'Nguyễn Văn G',
      drink: 5,
      comment: 'Cà phê ngon, giao nhanh',
      rating: 5,
    },{
      id: 8,
      userName: 'Nguyễn Văn H',
      drink: 6,
      comment: 'Trà sữa không thơm',
      rating: 3,
    },{
      id: 9,
      userName: 'Nguyễn Văn I',
      drink: 12,
      comment: 'Đá xay mịn, thơm, vị matcha rất ngon',
      rating: 5,
    },{
      id: 10,
      userName: 'Nguyễn Văn J',
      drink: 11,
      comment: 'Thái độ nhân viên quá tệ',
      rating: 2,
    },
    {
      id: 11,
      userName: 'Nguyễn Văn J',
      drink: 11,
      comment: 'Thái độ nhân viên quá tệ',
      rating: 2,
    },
  ])

  useEffect(()=>{
    categories.map((cate)=>cate.quantity = 0)
    drinks.map((drink)=>categories.map((cate)=>cate.id === drink.category?cate.quantity++ : <></>))
  }, [drinks])

  return(
    <DatabaseContext.Provider value={{ drinks, setDrinks, categories, setCategories, orders, setOrders, feedbacks, setFeedbacks }}>
      {children}
    </DatabaseContext.Provider>
  )
}

export default DatabaseContext;