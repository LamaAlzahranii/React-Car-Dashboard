import { Button, ListGroup, Modal } from "react-bootstrap"
import { GrCheckmark } from "react-icons/gr"
import { GrClose } from "react-icons/gr"
function CarViewModal(props) {
  const { show, setShow, car } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>model:</strong> {car.model}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>body:</strong> {car.body}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>
            <img src={car.photo360[0]} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>make :</strong>
            {car.make.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>type :</strong>
            {car.type.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>price :</strong>
            {car.price}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>year :</strong>
            {car.year}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>miles:</strong>
            {car.miles}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>cylinders:</strong>
            {car.cylinders}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>engine:</strong>
            {car.engine}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>horsePower:</strong>
            {car.horsePower}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>passengerCapacity:</strong>
            {car.passengerCapacity}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>driveType:</strong>
            {car.driveType}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>size:</strong>
            {car.size}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>torque:</strong>
            {car.torque}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>transmission:</strong>
            {car.transmission}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>remoteStart:</strong>
            {car.remoteStart ? <GrCheckmark /> : <GrClose />}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>powerLocks:</strong>
            {car.powerLocks ? <GrCheckmark /> : <GrClose />}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>powerWindows:</strong>
            {car.powerWindows ? <GrCheckmark /> : <GrClose />}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>powerSeats:</strong>
            {car.powerSeats ? <GrCheckmark /> : <GrClose />}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>powerMirrors:</strong>
            {car.powerMirrors ? <GrCheckmark /> : <GrClose />}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>cruiseControl:</strong>
            {car.cruiseControl ? <GrCheckmark /> : <GrClose />}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CarViewModal
