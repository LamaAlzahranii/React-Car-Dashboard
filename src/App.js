import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Films from "./pages/Films"
import FilmsContext from "./utils/FilmsContext"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {
  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState([])
  const [actors, setActors] = useState([])
  const [directors, setDirectors] = useState([])
  const navigate = useNavigate()

  const getFilms = async () => {
    const response = await axios.get("http://localhost:5000/api/films")
    setFilms(response.data)
  }

  const getGenres = async () => {
    const response = await axios.get("http://localhost:5000/api/genres")
    setGenres(response.data)
  }

  const getActors = async () => {
    const response = await axios.get("http://localhost:5000/api/casts/actors")
    setActors(response.data)
  }

  const getDirectors = async () => {
    const response = await axios.get("http://localhost:5000/api/casts/directors")
    setDirectors(response.data)
  }

  useEffect(() => {
    getFilms()
    getGenres()
    getActors()
    getDirectors()
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
      form.elements.genres.forEach(genre => {
        if (genre.checked) {
          genres.push(genre.value)
        }
      })

      const actors = []
      form.elements.actors.forEach(actor => {
        if (actor.checked) {
          actors.push(actor.value)
        }
      })

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
      form.elements.genres.forEach(genre => {
        if (genre.checked) {
          genres.push(genre.value)
        }
      })

      const actors = []
      form.elements.actors.forEach(actor => {
        if (actor.checked) {
          actors.push(actor.value)
        }
      })

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

  const store = {
    films,
    genres,
    actors,
    directors,
    deleteFilm,
    login,
    editFilm,
    addFilm,
  }

  return (
    <FilmsContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/films" element={<Films />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </FilmsContext.Provider>
  )
}

export default App
