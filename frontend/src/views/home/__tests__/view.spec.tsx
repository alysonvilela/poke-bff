import { fireEvent, render, screen, waitFor, } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Home } from '../';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as query from '../../../services/queries/use-get-pokemon-by-name-query';

const reactQueryWrapper = () => {
  const queryClient = new QueryClient()
  return ({ children }: {
    children: React.ReactNode
  }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

describe('HomeView', () => {
  it('renders the page', async () => {
    vi.spyOn(query, 'useGetPokemonByNameQuery')
    const wrapper = reactQueryWrapper()
    render(<Home />, {
      wrapper
    })

    const inputName = screen.getByPlaceholderText('Procurar pokemon...')
    const searchButton = screen.getByRole('button', { name: 'Go!' })

    const user = userEvent.setup()

    await user.type(inputName, 'pikachu')
    await userEvent.click(searchButton)


    expect(query.useGetPokemonByNameQuery).toBeCalledWith({ enabled: false, name: "pikachu" })
  })
})