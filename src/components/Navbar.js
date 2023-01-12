// import { useContext } from "react"
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
// import { Link } from "react-router-dom"
// import CarsContext from "../utils/CarsContext"

// function NavbarItem() {
//   const { logout } = useContext(CarsContext)
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Link to="/" className="navbar-brand d-flex align-items-center">
//           <img
//             src="https://storage.googleapis.com/ff-storage-p01/festivals/logos/000/039/385/large/logo.jpg?1498668430"
//             width="40"
//             height="40"
//             className="d-inline-block align-top"
//             alt="React Bootstrap logo"
//           />
//           <span>My cars</span>
//         </Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Link className="nav-link" to="/cars">
//               Cars
//             </Link>
//             <NavDropdown title="Make" id="basic-nav-dropdown">
//               <Link className="dropdown-item" to="/Makes">
//                 Make
//               </Link>

//               <NavDropdown.Divider />
//               <Link className="dropdown-item" to="/Types">
//                 Types
//               </Link>
//             </NavDropdown>
//           </Nav>
//           {localStorage.tokenCars ? (
//             <Nav className="ms-auto">
//               <Link className="nav-link" to="/profile">
//                 Profile
//               </Link>
//               <Link className="nav-link" to="/" onClick={logout}>
//                 Logout
//               </Link>
//             </Nav>
//           ) : (
//             <Nav className="ms-auto">
//               <Link className="nav-link" to="/login">
//                 Login
//               </Link>
//               <Link className="nav-link" to="/signup">
//                 Sign Up
//               </Link>
//             </Nav>
//           )}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default NavbarItem
