import React from "react"
import { NavLink, Link } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

const Navigation = ({ current_user }) => {
  return (
    <>
      <Nav>
        {current_user && (
          <>
            <NavItem>
              <NavLink to="/apartmentprotectedindex">My Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew">Create Listing</NavLink>
            </NavItem>
          </>
        )}
        {!current_user && (
          <>
            <NavItem>
              <NavLink to="/apartmentindex">View Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signin">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </>
  )
}

export default Navigation
