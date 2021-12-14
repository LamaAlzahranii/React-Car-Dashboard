import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function CastViewModal(props) {
  const { show, setShow, cast } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View cast</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Full Name:</strong> {cast.firstName} {cast.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>{" "}
            <img src={cast.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type:</strong> {cast.type}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item>
          <strong>Films:</strong>
          <ListGroup>
            {cast.films.map(film => (
              <ListGroup.Item>
                <Image src={film.poster} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <span style={{ marginLeft: 10 }}>{film.title}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CastViewModal
