import { Pagination } from 'react-bootstrap'

const AdminPagination = ({className}) => {
  return (
    <Pagination className={className}>
      <Pagination.Item>Previous</Pagination.Item>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Item>Next</Pagination.Item>
    </Pagination>
  )
}

export default AdminPagination