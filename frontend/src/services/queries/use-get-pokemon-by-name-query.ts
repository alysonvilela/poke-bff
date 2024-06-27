import { useQuery } from "@tanstack/react-query";
import { api } from "../http-client";
import { getQueryClient } from "../rk-config";
import { IPokemon } from "../../models/pokemon-output";
import { AxiosError } from "axios";


type Params = {
    name: string,
    enabled: boolean
}

type GetPokemonResult = {
    result: IPokemon | null
}

export async function getPokemonByName(name: string) {
    const { data } = await api.get<GetPokemonResult>(`/pokemon/${name}`);
    return data;
}

export const useGetPokemonByNameQuery = ({
    name,
    enabled = false
}: Params) => useQuery<GetPokemonResult, AxiosError, GetPokemonResult>({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemonByName(name),
    initialData: getQueryClient().getQueryData(["pokemon", name]),
    staleTime: 60 * 1000, // 1 minute
    enabled
})