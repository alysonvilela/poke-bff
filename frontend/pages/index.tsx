import type { NextPage } from 'next'
import { usePokemonByNameQuery } from '../src/services/queries/use-pokemon-by-name-query'

const Home: NextPage = () => {
  const { data } = usePokemonByNameQuery({
    name: 'pikachu',
    enabled: true
  })

  return (
    <div>
      Init
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export default Home
