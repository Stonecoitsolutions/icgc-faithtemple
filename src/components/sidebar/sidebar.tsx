'use client'
import React from "react"

// ✅ Define the props type
type SidebarProps = {
  selected: string
  onSelect: (value: string) => void
}

// ✅ Use the props in the component
export default function Sidebar({ selected, onSelect }: SidebarProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-30 fixed">
      <ul className="space-y-4">
        <li
          className={`cursor-pointer p-2 rounded hover:bg-gray-300 ${
            selected === "children" ? "bg-gray-300" : ""
          }`}
          onClick={() => onSelect("children")}
        >
          Children Ministry
        </li>
        <li
          className={`cursor-pointer p-2 rounded hover:bg-gray-300 ${
            selected === "youth" ? "bg-gray-300" : ""
          }`}
          onClick={() => onSelect("youth")}
        >
          Youth Ministry
        </li>

         <li
          className={`cursor-pointer p-2 rounded hover:bg-gray-300 ${
            selected === "children" ? "bg-gray-300" : ""
          }`}
          onClick={() => onSelect("media")}
        >
          Media
        </li>

         <li
          className={`cursor-pointer p-2 rounded hover:bg-gray-300 ${
            selected === "children" ? "bg-gray-300" : ""
          }`}
          onClick={() => onSelect("housekeepingushering")}
        >
          HousekeepingUshering
        </li>

      </ul>
    </div>
  )
}