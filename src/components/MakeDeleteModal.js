import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"

function MakeDeleteModal(props) {
  const { deleteMake } = useContext(CarsContext)
  const { show, setShow, makeId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete make</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this make ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteMake(makeId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MakeDeleteModal
