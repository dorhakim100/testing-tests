import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'

test('user clicks increment button and count increases', async () => {
  const user = userEvent.setup()

  render(<Counter />)

  expect(screen.getByText('0')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: 'Increment' }))

  expect(screen.getByText('1')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: 'Increment' }))

  expect(screen.getByText('2')).toBeInTheDocument()
})
