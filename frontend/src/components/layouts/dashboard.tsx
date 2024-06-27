import Link from "next/link"
import { Trophy } from "lucide-react"

type Params = {
    children?: React.ReactNode
    title?: string
}

export function Dashboard({children, title = "Dashboard"}: Params) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Trophy className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                </nav>
            </header>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold">{title}</h1>
                </div>
                {children}
            </main>
        </div>
    )
}





