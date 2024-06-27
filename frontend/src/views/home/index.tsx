import { NextPage } from "next"
import { useHomeViewModel } from "./view-model"
import { Dashboard } from "../../components/layouts/dashboard"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Search } from "lucide-react"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { PokemonCard, PokemonCardSkeleton } from "../../components/pokemon-card"
import { Skeleton } from "../../components/ui/skeleton"

export const Home: NextPage = () => {
    const { query, form, onSubmit } = useHomeViewModel()


    return (
        <>
            <Dashboard title="Encontre seu pokemon!" >
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[380px_1fr]">
                    <nav
                        className="grid gap-4 text-sm text-muted-foreground"
                    >
                        {query.data?.result ? (<PokemonCard data={query.data?.result} />) : (<PokemonCardSkeleton />)}
                    </nav>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Pesquisa</CardTitle>
                                <CardDescription>
                                    Used to identify your store in the marketplace.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Procurar pokemon..."
                                        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                        {...form.register('name')}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4">
                                <Button type="submit">Go!</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </Dashboard>
        </>
    )
}
