import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import AddIcon from "@mui/icons-material/Add"
import UserRow from "../components/UserRow"
import AdminAddModal from "../components/AdminAddModal"
import CastRow from "../components/CastRow"
import CastAddModal from "../components/CastAddModal"

function Casts() {
  const { casts } = useContext(FilmsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Casts</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add Cast
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Full Name</th>
            <th style={{ width: "18%" }}>Photo</th>
            <th style={{ width: "18%" }}>Type</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {casts.map(cast => (
            <CastRow key={cast._id} cast={cast} />
          ))}
        </tbody>
      </Table>
      <CastAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Casts
