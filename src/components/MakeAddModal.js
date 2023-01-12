import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"

function MakeAddModal(props) {
  const { show, setShow } = props
  const { addMake } = useContext(CarsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addMake}>
        <Modal.Header closeButton>
          <Modal.Title>Add make</Modal.Title>
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
            Add make
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default MakeAddModal
