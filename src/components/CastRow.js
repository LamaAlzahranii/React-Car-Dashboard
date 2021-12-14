import { useState } from "react"
import { Button } from "react-bootstrap"
import CastDeleteModal from "./CastDeleteModal"
import CastEditModal from "./CastEditModal"
import CastViewModal from "./CastViewModal"
import UserDeleteModal from "./UserDeleteModal"
import UserViewModal from "./UserViewModal"

function CastRow(props) {
  const { cast } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{cast._id}</td>
      <td>
        {cast.firstName} {cast.lastName}
      </td>
      <td>
        <img src={cast.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{cast.type}</td>
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
      <CastViewModal show={viewShow} setShow={setViewShow} cast={cast} />
      <CastEditModal show={editShow} setShow={setEditShow} cast={cast} />
      <CastDeleteModal show={deleteShow} setShow={setDeleteShow} castId={cast._id} />
    </tr>
  )
}

export default CastRow
