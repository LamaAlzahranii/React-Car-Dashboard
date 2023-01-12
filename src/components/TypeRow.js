import { useState } from "react"
import { Button } from "react-bootstrap"
import TypeDeleteModal from "./TypeDeleteModal"
import TypeEditModal from "./TypeEditModal"

function TypeRow(props) {
  const { type } = props
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{type._id}</td>
      <td>{type.name}</td>
      <td>
        <img src={type.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <TypeDeleteModal show={deleteShow} setShow={setDeleteShow} typeId={type._id} />
      <TypeEditModal show={editShow} setShow={setEditShow} type={type} />
    </tr>
  )
}

export default TypeRow
