import Link from "next/link";

export default function Header() { 
    return (
        <header className="flex justify-between items-center h-[50px] px-10 shadow-md">
            <div><Link href="/">AGATA STAN</Link></div>
            <nav>
                <Link href="/pielegnacje">Pielegnacje</Link>
            </nav>
        </header>
    )
}