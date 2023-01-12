import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"

function TypeAddModal(props) {
  
  const { show, setShow } = props
  const { addType } = useContext(CarsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addType}>
        <Modal.Header closeButton>
          <Modal.Title>Add type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add type
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default TypeAddModal
