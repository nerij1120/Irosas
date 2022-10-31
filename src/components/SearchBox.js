import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FaSearch} from 'react-icons/fa';
import '../index.css';

const SearchBox = () => {
  return (
    <Form className="d-flex m-auto">
      <InputGroup className="input-group">
      <Form.Control
              type="search"
              placeholder="Tìm kiếm..."
              aria-label="Search"
              variant="dark"
          />
        <Button variant='primary'>
          <FaSearch color='white'/>
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBox