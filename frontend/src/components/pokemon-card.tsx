import { BellRing } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription, CardHeader,
    CardTitle
} from "./ui/card";
import { cn } from "../lib/utils";
import { IPokemon } from "../models/pokemon-output";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

type PokemonCard = React.ComponentProps<typeof Card> & {
    data: IPokemon;
};

type PokemonCardSkeleton = React.ComponentProps<typeof Card>

export function PokemonCard({ className, data, ...props }: PokemonCard) {
    return (
        <Card className={cn("", className)} {...props}>
            <CardHeader>
                <CardTitle>Pokemón encontrado!</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <Image alt={data.name} src={data.sprite} width={64} height={64} />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {data.name.toUpperCase()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Possui {data.abilities.length} habilidades
                        </p>
                    </div>
                    <div></div>
                </div>
                <div>
                    {data.abilities.map((ab) => (
                        <div
                            key={ab.ability.name}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {ab.ability.name.toUpperCase()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export function PokemonCardSkeleton({ className, ...props }: PokemonCardSkeleton) {
    return (
        <Card className={cn("", className)} {...props}>
            <Skeleton className="w-full h-[250px] " />
        </Card>
    );
}
