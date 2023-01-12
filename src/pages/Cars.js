import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import CarsContext from "../utils/CarsContext"
import AddIcon from "@mui/icons-material/Add"
import CarAddModal from "../components/CarAddModal"
import CarRow from "../components/CarRow"

function Cars() {
  const { cars } = useContext(CarsContext)
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1 style={{ marginTop: 10 }}>Cars</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Model</th>
            <th style={{ width: "18%" }}>price</th>
            <th style={{ width: "18%" }}>miles</th>
            <th style={{ width: "9%" }}>year</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <CarRow key={car._id} car={car} />
          ))}
        </tbody>
      </Table>
      <CarAddModal show={show} setShow={setShow} />
    </div>
  )
}

export default Cars
// <th style={{ width: "36%" }}>cylinders</th>
// <th style={{ width: "36%" }}>engine</th>
// <th style={{ width: "36%" }}>horsePower</th>
// <th style={{ width: "36%" }}>passengerCapacity</th>
// <th style={{ width: "36%" }}>driveType</th>
// <th style={{ width: "36%" }}>size</th>
// <th style={{ width: "36%" }}>torque</th>
// <th style={{ width: "36%" }}>transmission</th>
// <th style={{ width: "36%" }}>remoteStart</th>
// <th style={{ width: "36%" }}>powerWindows</th>
// <th style={{ width: "36%" }}>powerLocks</th>
// <th style={{ width: "36%" }}>powerSeats</th>
// <th style={{ width: "36%" }}>powerMirrors</th>
// <th style={{ width: "36%" }}>cruiseControl</th>
