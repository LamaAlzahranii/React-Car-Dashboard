import { AirplaneTicket } from "@mui/icons-material"
import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import CarsContext from "./utils/CarsContext"
import Cars from "./pages/Cars"
import Login from "./pages/Login"
import Type from "./pages/Type"
import Make from "./pages/Make"

function App() {
  const [cars, setCars] = useState([])
  const [makes, setMakes] = useState([])
  const [types, setTypes] = useState([])
  const navigate = useNavigate()
  //------------------------------get cars-------------------------------//
  const getCars = async () => {
    const response = await axios.get("http://localhost:3020/api/cars")
    setCars(response.data)
  }
  //--------------------------------get makes-----------------------------//
  const getMakes = async () => {
    const response = await axios.get("http://localhost:3020/api/makes")
    setMakes(response.data)
  }
  //--------------------------------get types-----------------------------//

  const getTypes = async () => {
    const response = await axios.get("http://localhost:3020/api/types")
    setTypes(response.data)
  }
  useEffect(() => {
    getCars()
    getMakes()
    getTypes()
  }, [])
  //--------------------------------delete cars-----------------------------//
  const deleteCras = async carId => {
    try {
      await axios.delete(`http://localhost:3020/api/cars/${carId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      toast.success("car deleted")
      getCars()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //--------------------------------login-----------------------------//

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:3020/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardCars = response.data
      toast.success("login success")
      navigate("/cars")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------edit cars-------------------------------//

  const editCars = async (e, carId) => {
    e.preventDefault()
    try {
      const form = e.target

      const carBody = {
        model: form.elements.model.value,
        price: form.elements.price.value,
        make: form.elements.make.value,
        type: form.elements.type.value,
        miles: form.elements.miles.value,
        year: form.elements.year.value,
        photo360: form.elements.photo360.value.split(","),
        body: form.elements.body.value,
        cylinders: form.elements.cylinders.value,
        engine: form.elements.engine.value,
        horsePower: form.elements.horsePower.value,
        passengerCapacity: form.elements.passengerCapacity.value,
        driveType: form.elements.driveType.value,
        size: form.elements.size.value,
        torque: form.elements.torque.value,
        transmission: form.elements.transmission.value,
        remoteStart: form.elements.remoteStart.checked,
        powerWindows: form.elements.powerWindows.checked,
        powerLocks: form.elements.powerLocks.checked,
        powerSeats: form.elements.powerSeats.checked,
        powerMirrors: form.elements.powerMirrors.checked,
        cruiseControl: form.elements.cruiseControl.checked,
      }
      await axios.put(`http://localhost:3020/api/cars/${carId}`, carBody, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      getCars()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------add cars-------------------------------//

  const addCar = async e => {
    console.log("kkkk")
    e.preventDefault()
    try {
      const form = e.target

      const carBody = {
        model: form.elements.model.value,
        price: form.elements.price.value,
        make: form.elements.make.value,
        type: form.elements.type.value,
        miles: form.elements.miles.value,
        year: form.elements.year.value,
        photo360: form.elements.photo360.value.split(","),
        body: form.elements.body.value,
        cylinders: form.elements.cylinders.value,
        engine: form.elements.engine.value,
        horsePower: form.elements.horsePower.value,
        passengerCapacity: form.elements.passengerCapacity.value,
        driveType: form.elements.driveType.value,
        size: form.elements.size.value,
        torque: form.elements.torque.value,
        transmission: form.elements.transmission.value,
        remoteStart: form.elements.remoteStart.checked,
        powerWindows: form.elements.powerWindows.checked,
        powerLocks: form.elements.powerLocks.checked,
        powerSeats: form.elements.powerSeats.checked,
        powerMirrors: form.elements.powerMirrors.checked,
        cruiseControl: form.elements.cruiseControl.checked,
      }
      await axios.post(`http://localhost:3020/api/cars`, carBody, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      getCars()
      toast.success("add car success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------logout-------------------------------//

  const logout = () => {
    localStorage.removeItem("tokenDashboardCars")
  }
  //------------------------------add Admin-------------------------------//

  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      await axios.post(`http://localhost:3020/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------add make-------------------------------//

  const addMake = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const makeBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
      }
      await axios.post(`http://localhost:3020/api/makes`, makeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      getMakes()
      toast.success("add make success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------edit make-------------------------------//

  const editMake = async (e, carId) => {
    e.preventDefault()
    try {
      const form = e.target

      const makeBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
      }
      await axios.put(`http://localhost:3020/api/makes/${carId}`, makeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      getMakes()
      toast.success("edit make success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------delete make-------------------------------//

  const deleteMake = async makeId => {
    try {
      await axios.delete(`http://localhost:3020/api/makes/${makeId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      toast.success("make deleted")
      getMakes()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------add type-------------------------------//

  const addType = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const typeBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
      }
      await axios.post(`http://localhost:3020/api/types`, typeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      getTypes()
      toast.success("add type success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------edit type-------------------------------//

  const editType = async (e, typeId) => {
    e.preventDefault()
    try {
      const form = e.target

      const typeBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
      }
      await axios.put(`http://localhost:3020/api/types/${typeId}`, typeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      getTypes()
      toast.success("edit type success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------------------------delete type-------------------------------//

  const deleteType = async typeId => {
    try {
      await axios.delete(`http://localhost:3020/api/types/${typeId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardCars,
        },
      })
      toast.success("type deleted")
      getTypes()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    cars,
    makes,
    types,
    deleteCras,
    login,
    editCars,
    addCar,
    logout,
    addAdmin,
    addMake,
    editMake,
    deleteMake,
    addType,
    editType,
    deleteType,
  }

  return (
    <CarsContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/cars" element={localStorage.tokenDashboardCars ? <Cars /> : <Navigate to="/login" />} />
            <Route path="/types" element={localStorage.tokenDashboardCars ? <Type /> : <Navigate to="/login" />} />
            <Route path="/makes" element={localStorage.tokenDashboardCars ? <Make /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </CarsContext.Provider>
  )
}

export default App
