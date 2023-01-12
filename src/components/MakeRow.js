import { useState } from "react"
import { Button } from "react-bootstrap"
import MakeDeleteModal from "./MakeDeleteModal"
import MakeEditModal from "./MakeEditModal"

function TypeRow(props) {
  const { make } = props
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{make._id}</td>
      <td>{make.name}</td>
      <td>
        <img src={make.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <MakeDeleteModal show={deleteShow} setShow={setDeleteShow} makeId={make._id} />
      <MakeEditModal show={editShow} setShow={setEditShow} make={make} />
    </tr>
  )
}

export default TypeRow
