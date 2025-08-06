"use client"
import Link from "next/link";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Sheet } from "./ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() { 
    const [open, setOpen] = useState(false);
    return (
        <header className="flex justify-between items-center h-[50px] px-5 shadow-md">
            <div><Link href="/">AGATA STAN</Link></div>
            <div>
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger>
                        <FontAwesomeIcon icon={faBars} className="text-[var(--color-primary)]" />
                    </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px] bg-white" >
                        <SheetHeader>
                            <SheetTitle className="text-[var(--color-primary)]">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col px-10">
                            <Link href="/pielegnacje" onClick={() => setOpen(false)}>Plany pielęgnacyjne</Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}