import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"

function CarDeleteModal(props) {
  const { deleteCras } = useContext(CarsContext)
  const { show, setShow, carId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete car</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this car ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCras(carId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CarDeleteModal
