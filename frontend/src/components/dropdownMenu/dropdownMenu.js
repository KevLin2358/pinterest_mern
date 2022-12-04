import React from 'react'
import "./dropdownMenu.css"
function DropdownMenu() {
  return (
    <div>
    <nav role="navigation">
    <ul>
      <li><a href="#">Two</a>
        <ul class="dropdown">
          <li><a href="#">Sub-1</a></li>
          <li><a href="#">Sub-2</a></li>
          <li><a href="#">Sub-3</a></li>
        </ul>
      </li>
    </ul>
  </nav></div>
  )
}

export default DropdownMenu