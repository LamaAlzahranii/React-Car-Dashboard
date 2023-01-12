import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"
import AddIcon from "@mui/icons-material/Add"
import MakeRow from "../components/MakeRow"
import MakeAddModal from "../components/MakeAddModal"

function Type() {
  const { makes } = useContext(CarsContext)
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1 style={{ marginTop: 10 }}>Make</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>#</th>
            <th style={{ width: "20%" }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {makes.map(make => (
            <MakeRow key={make._id} make={make} />
          ))}
        </tbody>
      </Table>
      <MakeAddModal show={show} setShow={setShow} />

    </div>
  )
}

export default Type
