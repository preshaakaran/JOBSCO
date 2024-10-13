'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import {AlignJustify} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { UserButton } from "@clerk/nextjs";



function Header({user,profileInfo}) {

    const menuItems = [
        {
            label: "Home",
            href: "/",
            show: true,
          },
          {
            label: "Login",
            href: "/sign-in",
            show: !user,
          },
          {
            label: "Register",
            href: "/sign-up",
            show: !user,
          },
          {
            label: "Activity",
            href: "/activity",
            show: profileInfo?.role === "candidate",
          },
          {
            label: "Jobs",
            href: "/jobs",
            show: user,
          },
          {
            label: "Membership",
            href: "/membership",
            show: user,
          },
          {
            label: "Account",
            href: "/account",
            show: user,
          },
    ]
    return(
        <div>
            <header className="flex h-16 w-full shrink-0 items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="lg:hidden">
                            <AlignJustify className="w-6 h-6"/>
                            <span className="sr-only">
                                Toggle Navigation Menu

                            </span>

                        </Button>

                    </SheetTrigger>
                    <SheetContent side="left">
                        <Link href={'#'} className="mr-6 hidden lg:flex">
                            <h3>JOBSCO</h3>
                        </Link>
                        <div className="grid gap-2 py-6">
                            {
                                menuItems.map((item, index) => {
                                    if(item.show){
                                        return(
                                            <Link href={item.href} key={index} className="flex w-full items-center py-2 font-semibold text-lg">
                                                
                                                    {item.label}
                                                
                                            </Link>
                                        )
                                    }
                                })
                            }
                        <UserButton afterSignOutUrl="/"/>
                        </div>


                    </SheetContent>
                </Sheet>

                <Link href={'/'} className="mr-6 hidden font-bold text-3xl lg:flex">JOBSCO</Link>
                <nav className="ml-auto hidden lg:flex gap-6">
                    {
                        menuItems.map((item, index) => {
                            if(item.show){
                                return(
                                    <Link href={item.href} key={index} onClick={() => sessionStorage.removeItem("filterParams")} className="group inline-flex h-9 w-max items-center py-2 font-medium text-sm rounded-md bg-white px-4 ">
                                        {item.label}    
                                    </Link>
                                )
                            }
                        }
                    )
                    }
                    <UserButton afterSignOutUrl="/"/>
                </nav>


            </header>
        </div>
    )
}

export default Header;