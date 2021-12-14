import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function CastAddModal(props) {
  const { show, setShow } = props
  const { addCast } = useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addCast}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Type
            </Form.Label>
            <Col md="8">
              <Form.Select name="type" required>
                <option value="Actor">Actor</option>
                <option value="Director">Director</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Cast
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CastAddModal
