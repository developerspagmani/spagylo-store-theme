import React, { useState } from "react"

import { Button, Dropdown } from "react-bootstrap"

import Link from "next/link"

import CartOverviewItem from "./CartOverviewItem"

import items from "../data/products-cart.json"
import Icon from "./Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function CartDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <>
      <div className="nav-item">
        <Link href="/cart">
          <a className="navbar-icon-link d-lg-none">
            {/* cart icon */}  
            <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6798 7.71511H16.6535V6.23439C16.6534 2.79654 13.8566 0 10.4189 0C6.98119 0 4.18426 2.79693 4.18426 6.23439V7.71511H3.15802C1.48943 7.71511 0.131836 9.07271 0.131836 10.7413V24.8448C0.131836 26.5138 1.48943 27.871 3.15802 27.871H17.6797C19.3482 27.871 20.7058 26.5136 20.7058 24.8448V10.7413C20.7058 9.07271 19.3482 7.71511 17.6798 7.71511ZM6.15851 6.23439C6.15851 3.88532 8.06958 1.97425 10.4189 1.97425C12.768 1.97425 14.679 3.88532 14.679 6.23439V7.71511H6.15851V6.23439ZM18.7317 24.8448C18.7317 25.4252 18.2596 25.8967 17.6798 25.8967H3.15789C2.57782 25.8967 2.10596 25.4249 2.10596 24.8448V10.7413C2.10596 10.1612 2.57782 9.68936 3.15789 9.68936H4.18413V11.0737C3.86691 11.35 3.66231 11.7525 3.66231 12.2066C3.66231 13.04 4.33787 13.7158 5.17132 13.7158C6.00451 13.7158 6.68032 13.04 6.68032 12.2066C6.68032 11.7529 6.47559 11.3504 6.15851 11.0737V9.68936H14.679V11.0737C14.3618 11.35 14.1572 11.7525 14.1572 12.2066C14.1572 13.04 14.8328 13.7158 15.6662 13.7158C16.4997 13.7158 17.1752 13.04 17.1752 12.2066C17.1752 11.7529 16.9705 11.35 16.6534 11.0737V9.68936H17.6797C18.2597 9.68936 18.7316 10.1612 18.7316 10.7413V24.8448H18.7317Z" fill="#454545"/>
            </svg>

            <span className="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">
              View cart
            </span>
          </a>
        </Link>
        <div className="d-none d-lg-block">
          {/* Cart Dropdown*/}
          <Dropdown onToggle={toggleDropdown} show={dropdownOpen}>
            <Dropdown.Toggle
              as="a"
              href="#"
              className="navbar-icon-link dropdown-toggle--no-chevron"
            >
            {/* cart icon */}  
            <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6798 7.71511H16.6535V6.23439C16.6534 2.79654 13.8566 0 10.4189 0C6.98119 0 4.18426 2.79693 4.18426 6.23439V7.71511H3.15802C1.48943 7.71511 0.131836 9.07271 0.131836 10.7413V24.8448C0.131836 26.5138 1.48943 27.871 3.15802 27.871H17.6797C19.3482 27.871 20.7058 26.5136 20.7058 24.8448V10.7413C20.7058 9.07271 19.3482 7.71511 17.6798 7.71511ZM6.15851 6.23439C6.15851 3.88532 8.06958 1.97425 10.4189 1.97425C12.768 1.97425 14.679 3.88532 14.679 6.23439V7.71511H6.15851V6.23439ZM18.7317 24.8448C18.7317 25.4252 18.2596 25.8967 17.6798 25.8967H3.15789C2.57782 25.8967 2.10596 25.4249 2.10596 24.8448V10.7413C2.10596 10.1612 2.57782 9.68936 3.15789 9.68936H4.18413V11.0737C3.86691 11.35 3.66231 11.7525 3.66231 12.2066C3.66231 13.04 4.33787 13.7158 5.17132 13.7158C6.00451 13.7158 6.68032 13.04 6.68032 12.2066C6.68032 11.7529 6.47559 11.3504 6.15851 11.0737V9.68936H14.679V11.0737C14.3618 11.35 14.1572 11.7525 14.1572 12.2066C14.1572 13.04 14.8328 13.7158 15.6662 13.7158C16.4997 13.7158 17.1752 13.04 17.1752 12.2066C17.1752 11.7529 16.9705 11.35 16.6534 11.0737V9.68936H17.6797C18.2597 9.68936 18.7316 10.1612 18.7316 10.7413V24.8448H18.7317Z" fill="#454545"/>
            </svg>

              <div className="navbar-icon-link-badge">3 </div>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="p-4 dropdown-menu-animated">
              <div className="navbar-cart-product-wrapper">
                {items.map((item, index) => (
                  <CartOverviewItem
                    item={item}
                    key={index}
                    toggleDropdown={toggleDropdown}
                  />
                ))}
              </div>
              {/* total price*/}
              <div className="navbar-cart-total">
                <span className="text-uppercase text-muted">Total</span>
                <strong className="text-uppercase">$240.00</strong>
              </div>
              {/* buttons*/}
              <div className="d-flex justify-content-between">
                <Link href="/cart" passHref>
                  <Button
                    variant="link"
                    className="text-dark me-3"
                    onClick={() => toggleDropdown()}
                  >
                    View Cart <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Link>
                <Link href="/checkout-1" passHref>
                  <Button
                    variant="outline-dark"
                    onClick={() => toggleDropdown()}
                  >
                    Checkout
                  </Button>
                </Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  )
}
