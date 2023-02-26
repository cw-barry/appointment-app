import AppointmentList from "../components/AppointmentList"
import { useEffect, useState } from "react"
import Doctors from "../components/Doctors"
// import { appointmentData } from "../helper/data"

const Home = () => {
  //? Mock Data
  // const [appointments, setAppointments] = useState(appointmentData)

  //! Get appointment data from localStorage if they exist otherwise assign empty array
  const [appointments, setAppointments] = useState(
    () => JSON.parse(localStorage.getItem("appointments")) || []
  )

  //! When appointments are updated, Refresh tasks in the localStorage
  //! ComponentDidUpdate
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments))
  }, [appointments])

  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors appointments={appointments} setAppointments={setAppointments} />

      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  )
}

export default Home
