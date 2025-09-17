'use client'
import Sidebar from "@/components/sidebar/sidebar"
import React, { useState } from "react"
import ChildrenMinistry from "../childrenmimistry/page"
import YouthMinistry from "../youthministry/page"
import Media from "../media/page"
import HousekeepingUshering from "../housekeepingUshering/page"


export default function Ministries() {
  const [selected, setSelected] = useState("children")

  return (
    <div className="container mx-auto flex md:flex-row flex-col space-x-4">
      <div className="md:w-[20%]">
        <Sidebar selected={selected} onSelect={setSelected} />
      </div>
      <div className="md:w-[80%]">
        {selected === "children" && <ChildrenMinistry />}
        {selected === "youth" && <YouthMinistry />}
        {selected === "media" && <Media />}
        {selected === "housekeepingushering" && <HousekeepingUshering />}
      </div>
    </div>
  )
}
