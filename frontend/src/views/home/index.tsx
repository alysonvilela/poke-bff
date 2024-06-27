import { NextPage } from "next"
import { useHomeViewModel } from "./view-model"

export const Home: NextPage = () => {
    const { data, form, onSubmit } = useHomeViewModel()
    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            {JSON.stringify(data.data, null, 2)}

            <input {...form.register('name')} />
            <button type="submit">Submit</button>
        </form>
    )
}
