"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { UserDetailContext } from "@/context/UserDetailContext"
import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"

export function AppSidebar() {
    const [projectList, setProjectList] = useState([]);
    const {userDetail, setUserDetail} = useContext(UserDetailContext)
  return (
    <Sidebar>
      <SidebarHeader className="p-5" >
        <div className="flex items-center gap-2">
            <Image src={'./logo.svg'} alt="logo" width={35} height={35}/>
            <h2 className="font-bold ">Ai Website Generator</h2>
        </div>
        <Link href={'/workspace'} className="m-5 ">
        <Button className="w-full">+ Add new Project</Button>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup  >
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            {
                projectList.length==0 &&
                <h2 className="text-sm px-2 text-gray-500">No Project Found</h2>
            }
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div>
            <h2>Remaining Credits <span className="font-bold">{userDetail.credits}</span></h2>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}