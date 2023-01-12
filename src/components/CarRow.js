import { useState } from "react"
import { Button } from "react-bootstrap"
import CarDeleteModal from "./CarDeleteModal"
import CarEditModal from "./CarEditModal"
import CarViewModal from "./CarViewModal"

function CarRow(props) {
  const { car } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{car._id}</td>
      <td>{car.model}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{car.price}SAR</td>
      <td>{car.miles}</td>
      <td>{car.year}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <CarViewModal show={viewShow} setShow={setViewShow} car={car} />
      <CarEditModal show={editShow} setShow={setEditShow} car={car} />
      <CarDeleteModal show={deleteShow} setShow={setDeleteShow} carId={car._id} />
    </tr>
  )
}

export default CarRow
