import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Films from "./pages/Films"
import FilmsContext from "./utils/FilmsContext"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Genres from "./pages/Genres"
import Casts from "./pages/Casts"

function App() {
  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState([])
  const [casts, setCasts] = useState([])
  const [actors, setActors] = useState([])
  const [directors, setDirectors] = useState([])
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getFilms = async () => {
    const response = await axios.get("http://localhost:5000/api/films")
    setFilms(response.data)
  }

  const getCasts = async () => {
    const response = await axios.get("http://localhost:5000/api/casts")
    setCasts(response.data)
    setActors(response.data.filter(cast => cast.type === "Actor"))
    setDirectors(response.data.filter(cast => cast.type === "Director"))
  }

  const getGenres = async () => {
    const response = await axios.get("http://localhost:5000/api/genres")
    setGenres(response.data)
  }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboardFilms,
      },
    })
    setUsers(response.data)
  }

  useEffect(() => {
    getFilms()
    getGenres()
    getCasts()
    getUsers()
  }, [])

  const deleteFilm = async filmId => {
    try {
      await axios.delete(`http://localhost:5000/api/films/${filmId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("film deleted")
      getFilms()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardFilms = response.data
      toast.success("login success")
      navigate("/films")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editFilm = async (e, filmId) => {
    e.preventDefault()
    try {
      const form = e.target

      const genres = []
      if (form.elements.genres.forEach) {
        form.elements.genres.forEach(genre => {
          if (genre.checked) {
            genres.push(genre.value)
          }
        })
      } else {
        if (form.elements.genres.checked) {
          genres.push(form.elements.genres.value)
        }
      }

      const actors = []
      if (form.elements.genres.forEach) {
        form.elements.actors.forEach(actor => {
          if (actor.checked) {
            actors.push(actor.value)
          }
        })
      } else {
        if (form.elements.actors.checked) {
          actors.push(form.elements.actors.value)
        }
      }

      const filmBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        genres: genres,
        actors: actors,
        director: form.elements.director.value,
      }
      await axios.put(`http://localhost:5000/api/films/${filmId}`, filmBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getFilms()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addFilm = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const genres = []
      if (form.elements.genres.forEach) {
        form.elements.genres.forEach(genre => {
          if (genre.checked) {
            genres.push(genre.value)
          }
        })
      } else {
        if (form.elements.genres.checked) {
          genres.push(form.elements.genres.value)
        }
      }

      const actors = []
      if (form.elements.genres.forEach) {
        form.elements.actors.forEach(actor => {
          if (actor.checked) {
            actors.push(actor.value)
          }
        })
      } else {
        if (form.elements.actors.checked) {
          actors.push(form.elements.actors.value)
        }
      }

      const filmBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        genres: genres,
        actors: actors,
        director: form.elements.director.value,
      }
      await axios.post(`http://localhost:5000/api/films`, filmBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getFilms()
      toast.success("add film success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenDashboardFilms")
  }

  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`http://localhost:5000/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addGenre = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const genreBody = {
        name: form.elements.name.value,
      }
      await axios.post(`http://localhost:5000/api/genres`, genreBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getGenres()
      toast.success("add genre success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editGenre = async (e, genreId) => {
    e.preventDefault()
    try {
      const form = e.target

      const genreBody = {
        name: form.elements.name.value,
      }
      await axios.put(`http://localhost:5000/api/genres/${genreId}`, genreBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getGenres()
      toast.success("edit genre success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteGenre = async genreId => {
    try {
      await axios.delete(`http://localhost:5000/api/genres/${genreId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("genre deleted")
      getGenres()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addCast = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const castBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        type: form.elements.type.value,
      }
      await axios.post(`http://localhost:5000/api/casts`, castBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getCasts()
      toast.success("add cast success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editCast = async (e, castId) => {
    e.preventDefault()
    try {
      const form = e.target

      const castBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        type: form.elements.type.value,
      }
      await axios.put(`http://localhost:5000/api/casts/${castId}`, castBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getCasts()
      toast.success("edit cast success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteCast = async castId => {
    try {
      await axios.delete(`http://localhost:5000/api/casts/${castId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("cast deleted")
      getCasts()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    films,
    genres,
    actors,
    directors,
    users,
    casts,
    deleteFilm,
    login,
    editFilm,
    addFilm,
    logout,
    addAdmin,
    deleteUser,
    addGenre,
    editGenre,
    deleteGenre,
    addCast,
    editCast,
    deleteCast,
  }

  return (
    <FilmsContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/films" element={localStorage.tokenDashboardFilms ? <Films /> : <Navigate to="/login" />} />
            <Route path="/users" element={localStorage.tokenDashboardFilms ? <Users /> : <Navigate to="/login" />} />
            <Route path="/genres" element={localStorage.tokenDashboardFilms ? <Genres /> : <Navigate to="/login" />} />
            <Route path="/casts" element={localStorage.tokenDashboardFilms ? <Casts /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </FilmsContext.Provider>
  )
}

export default App
