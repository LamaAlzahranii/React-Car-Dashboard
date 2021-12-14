import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function CastEditModal(props) {
  const { show, setShow, cast } = props
  const { editCast } = useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editCast(e, cast._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" defaultValue={cast.firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={cast.lastName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={cast.photo} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Type
            </Form.Label>
            <Col md="8">
              <Form.Select name="type" defaultValue={cast.type}>
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
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Cast
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CastEditModal
