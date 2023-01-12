import { useContext } from "react"
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"

function CarEditModal(props) {
  const { show, setShow, car } = props
  const { makes, types, editCars } = useContext(CarsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
    <Form className="mt-5" onSubmit={e => editCars(e, car._id)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit car</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              model
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="model" defaultValue={car.model}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              body
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="body" defaultValue={car.body}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photo360
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" type="url" name="photo360" defaultValue={car.photo360}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              price
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="price" defaultValue={car.price}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              year
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="year" defaultValue={car.year}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              miles
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="miles" defaultValue={car.miles}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              cylinders
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="cylinders" defaultValue={car.cylinders}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              engine
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="engine" defaultValue={car.engine}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              horsePower
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="horsePower" defaultValue={car.horsePower}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              passengerCapacity
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="passengerCapacity" defaultValue={car.passengerCapacity}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              driveType
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="driveType" defaultValue={car.driveType}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              size
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="size" defaultValue={car.size}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              torque
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="torque" defaultValue={car.torque}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              transmission
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="transmission" defaultValue={car.transmission}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              remoteStart
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="remoteStart" defaultValue={car.remoteStart}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              power Locks
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="powerLocks" defaultChecked={car.powerLocks}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              power Seats
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="powerSeats" defaultChecked={car.powerSeats}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              power Mirrors
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="powerMirrors" defaultChecked={car.powerMirrors}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              power Windows
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="powerWindows" defaultChecked={car.powerWindows}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              cruise Control
            </Form.Label>
            <Col md="8">
              <Form.Check type="checkbox" name="cruiseControl" defaultChecked={car.cruiseControl} />
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
                    <Form.Check type="radio" name="make" defaultChecked={car.make._id === make._id} value={make._id} />
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
              type
            </Form.Label>
            <Col md="8">
              {types.map(type => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="type" defaultChecked={car.type._id === type._id} value={type._id} />
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
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CarEditModal
