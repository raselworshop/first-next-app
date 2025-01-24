import { Home, File, UsersRound, HomeIcon } from "lucide-react"
import Link from "next/link";

import { NavButton } from "@/components/Navbutton";

export default function Header() {
    return (
        <header className="animate-slide bg-background h-12 p-2 border-b static top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <NavButton href="/home" label="Home" icon={HomeIcon} />
                    <Link href="/home" title="Home" className='flex justify-center items-center gap-2 ml-0'>
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">Computer Repair Shop</h1>
                    </Link>
                </div>

                <div className="flex items-center gap-2">

                    <NavButton href="/tickets" label="Tickets" icon={File} />
                    <NavButton href="/customers" label="Customers" icon={UsersRound} />

                </div>
            </div>
        </header>
    )
}