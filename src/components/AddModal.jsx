import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { useState } from "react"

const AppModal = ({
  show,
  handleClose,
  doctorName,
  appointments,
  setAppointments,
}) => {
  const [patientName, setPatientName] = useState("second")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1,
        patient: patientName,
        day: date,
        doctor: doctorName,
        consulted: false,
      },
    ])
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="diplay-6 text-danger">
            Reservation for {doctorName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="patientName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                required
                onChange={(e) => setPatientName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" className="me-2">
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AppModal
