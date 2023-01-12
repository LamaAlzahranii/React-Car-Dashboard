import { useContext, useState } from "react"
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"

function CarAddModal(props) {
  const { show, setShow } = props
  const { makes, addCar, types } = useContext(CarsContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form
        onSubmit={e => {
          addCar(e)
          setShow(false)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              modal
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="model" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Body
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="body" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photo360
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" type="url" name="photo360" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              price
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="price" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              year
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="year" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              miles
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="miles" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              cylinders
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="cylinders" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              engine
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="engine" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              horse Power
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="horsePower" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              passenger Capacity
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="passengerCapacity" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              drive Type
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="driveType" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              size
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="size" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              torque
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="torque" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              transmission
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="transmission" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              remoteStart
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="remoteStart" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              power Locks
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="powerLocks" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              power Seats
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="powerSeats" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
          power Windows
          </Form.Label>
          <Col md="8">
            <Form.Check type="checkbox" name="powerWindows" />
          </Col>
        </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              power Mirrors
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="powerMirrors" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              cruise Control
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="cruiseControl" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              makes
            </Form.Label>
            <Col md="8">
              {makes.map(make => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="make" value={make._id} />
                  </Col>
                  <Col md="2">
                    <span>{make.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              types
            </Form.Label>
            <Col md="8">
              {types.map(type => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="type" value={type._id} />
                  </Col>
                  <Col md="2">
                    <span>{type.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add car
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CarAddModal
