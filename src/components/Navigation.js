import React from "react"
import { NavLink, Link } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

const Navigation = ({ current_user }) => {
  return (
    <>
      <Nav>
        <NavItem className="links">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </NavItem>
        {current_user && (
          <>
            <NavItem>
              <NavLink to="/apartmentprotectedindex" className="nav-link">My Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew" className="nav-link">Create Listing</NavLink>
            </NavItem>
          </>
        )}
        {!current_user && (
          <>
            <NavItem>
              <NavLink to="/apartmentindex" className="nav-link">View Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signin" className="nav-link">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </>
  )
}

export default Navigation
