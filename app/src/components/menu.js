"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/toglemode"
import Link from "next/link"
export default function Menu(){
    return(
        <div className="w-full flex justify-center items-center my-5 relative">
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent className="flex flex-col">
        <NavigationMenuLink className="m-2"><Link href={`./`}>Main</Link></NavigationMenuLink>
        <NavigationMenuLink className="m-2"><Link href={`./strona1`}>Strona1</Link></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
<div className="absolute right-4 top-0">
<ModeToggle></ModeToggle>
</div>
</div>
    )
}
 