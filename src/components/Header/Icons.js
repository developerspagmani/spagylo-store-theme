import React from "react"
import { Dropdown, Nav } from "react-bootstrap"
import ActiveLink from "../ActiveLink"
import Link from "next/link"
import CartOverviewDropdown from "../CartOverviewDropdown"
import Icon from "../Icon"
import userMenu from "../../data/user-menu.json"
export default function Icons({ loggedUser, searchToggle, setSearchToggle }) {
  return (
    <div className="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">

      {/* Cart Overview Dropdown*/}

      <CartOverviewDropdown />

      {/* End Cart Overview Dropdown*/}
    </div>
  )
}
