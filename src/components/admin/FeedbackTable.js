import React, {useState,useMemo} from 'react'
import { Container, Table } from 'react-bootstrap'
import AdminPagination from './AdminPagination'
import FeedbackItem from './FeedbackItem'

let PageSize = 10;


const FeedbackTable = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      userName: 'Nguyễn Văn A',
      drinkName: 'Iced milk coffee',
      comment: 'Cà phê ngon, giao nhanh',
      rating: "5.0",
    },
    {
      id: 2,
      userName: 'Nguyễn Văn B',
      drinkName: 'Black Coffee',
      comment: 'Cà phê đen nhưng làm quá ngọt',
      rating: "4.0",
    },{
      id: 3,
      userName: 'Nguyễn Văn C',
      drinkName: 'Latte',
      comment: 'Cà phê ngon, giao nhanh',
      rating: "5.0",
    },{
      id: 4,
      userName: 'Nguyễn Văn D',
      drinkName: 'Capuchino',
      comment: 'Giao hàng quá chậm',
      rating: "2.0",
    },{
      id: 5,
      userName: 'Nguyễn Văn E',
      drinkName: 'Americano',
      comment: 'Cà phê ngon, giao nhanh',
      rating: "5.0",
    },{
      id: 6,
      userName: 'Nguyễn Văn F',
      drinkName: 'Hot ginger juice',
      comment: 'Thái độ phục vụ chưa tốt',
      rating: "4.0",
    },{
      id: 7,
      userName: 'Nguyễn Văn G',
      drinkName: 'Hot fresh tea',
      comment: 'Cà phê ngon, giao nhanh',
      rating: "5.0",
    },{
      id: 8,
      userName: 'Nguyễn Văn H',
      drinkName: 'Thai tea',
      comment: 'Trà sữa không thơm',
      rating: "3.0",
    },{
      id: 9,
      userName: 'Nguyễn Văn I',
      drinkName: 'Matcha Ice blended',
      comment: 'Đá xay mịn, thơm, vị matcha rất ngon',
      rating: "5.0",
    },{
      id: 10,
      userName: 'Nguyễn Văn J',
      drinkName: 'Hot chocolate',
      comment: 'Thái độ nhân viên quá tệ',
      rating: "2.0",
    },
    {
      id: 11,
      userName: 'Nguyễn Văn J',
      drinkName: 'Hot chocolate',
      comment: 'Thái độ nhân viên quá tệ',
      rating: "2.0",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return feedbacks.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  return (
    <Container className='mt-5 d-flex flex-column' fluid>
      <Table responsive="lg" className='mt-3'>
      <thead>
        <tr style={{ verticalAlign:"middle" }}>
          <th>Tên</th>
          <th>Sản phẩm</th>
          <th>Bình luận</th>
          <th>Đánh giá</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {
          feedbacks.length > 0 ? 
            currentTableData.map((fb)=><FeedbackItem feedback={fb}/>)
            :
            <h4>No Feedback to show</h4>
        }
      </tbody>
    </Table>
    <AdminPagination className="d-flex ms-auto me-2  mt-5"
              currentPage={currentPage}
              totalCount={feedbacks.length}
              pageSize={PageSize}
              onPageChange={page=>setCurrentPage(page)}/>
    </Container>
  )
}

export default FeedbackTable