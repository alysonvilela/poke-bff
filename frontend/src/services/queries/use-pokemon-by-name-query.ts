import { useQuery } from "@tanstack/react-query";
import { api } from "../http-client";
import { getQueryClient } from "../rk-config";


type Params = {
    name: string,
    enabled: boolean
}


async function getPokemonByName(name: string) {
    const { data } = await api.get(`/pokemon/${name}`);
    return data;
}

export const usePokemonByNameQuery = ({
    name,
    enabled = false
}: Params) => useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemonByName(name),
    initialData: getQueryClient().getQueryData(["pokemon", name]),
    staleTime: 60 * 1000, // 1 minute
    enabled
})