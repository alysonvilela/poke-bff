import { zodResolver } from '@hookform/resolvers/zod';
import { useGetPokemonByNameQuery } from "../../services/mutations/use-get-pokemon-by-name-query"
import { SearchPokemonSchema, searchPokemonSchema } from "./search-pokemon-schema"
import { SubmitHandler, useForm } from 'react-hook-form';

export const useHomeViewModel = () => {
    const form = useForm<SearchPokemonSchema>({
        defaultValues: {
            name: ''
        },
        resolver: zodResolver(searchPokemonSchema)
    })


    const query = useGetPokemonByNameQuery({
        enabled: false,
        name: form.watch('name')
    })

    const onSubmit: SubmitHandler<SearchPokemonSchema> = (_data) => {
        query.refetch()
    }

    return {
        data: query,
        form,
        onSubmit
    }
}