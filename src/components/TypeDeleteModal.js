import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"

function TypeDeleteModal(props) {
  const { deleteType } = useContext(CarsContext)
  const { show, setShow, typeId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete type</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this type ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteType(typeId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TypeDeleteModal
